import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart'; // Responsividad
import 'package:provider/provider.dart';
import 'package:tudespensa/provider/auth_provider.dart';
import 'package:tudespensa/constants.dart';
import 'package:tudespensa/pages/objetivo/goal_page.dart';

class RegisterVerifyPage extends StatefulWidget {
  final String email;
  const RegisterVerifyPage({super.key, required this.email});

  @override
  State<RegisterVerifyPage> createState() => _RegisterVerifyPageState();
}

class _RegisterVerifyPageState extends State<RegisterVerifyPage> {
  final TextEditingController _codeController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final TextEditingController _nameController = TextEditingController();
  final _formKey = GlobalKey<FormState>();

  bool _loading = false;
  String? _error;

  Future<void> _handleVerifyAndRegister() async {
    setState(() {
      _loading = true;
      _error = null;
    });

    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    final success = await authProvider.verifyRegisterCode(
      email: widget.email,
      codigo: _codeController.text.trim(),
      password: _passwordController.text,
      username: _nameController.text.trim(),
    );

    setState(() {
      _loading = false;
    });

    if (success) {
      Navigator.pushAndRemoveUntil(
        context,
        MaterialPageRoute(builder: (_) => GoalPage()),
        (route) => false,
      );
    } else {
      setState(() {
        _error = 'Código inválido o error en el registro.';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final screenHeight = MediaQuery.of(context).size.height;
    final iskeyboard = MediaQuery.of(context).viewInsets.bottom != 0;

    return Scaffold(
      resizeToAvoidBottomInset: false,
      backgroundColor: BackgroundColor,
      body: SafeArea(
        child: SingleChildScrollView(
          reverse: true,
          child: Column(
            children: [
              if (!iskeyboard)
                Stack(
                  children: [
                    Container(
                      height: screenHeight * 0.35, // 35% de la pantalla
                      width: double.infinity,
                      decoration: BoxDecoration(
                        image: DecorationImage(
                          image: AssetImage('assets/images/login.png'),
                          fit: BoxFit.cover,
                        ),
                        borderRadius: BorderRadius.only(
                          bottomLeft: Radius.circular(50),
                          bottomRight: Radius.circular(50),
                        ),
                      ),
                    ),
                    Positioned.fill(
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                "Bienvenido a",
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 20.sp,
                                ),
                              ),
                              Text(
                                "Tu Despensa",
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 28.sp,
                                ),
                              ),
                            ],
                          ),
                          SizedBox(width: 55),
                          Image.asset(
                            'assets/images/logo.png',
                            height: 86,
                            width: 86,
                          )
                        ],
                      ),
                    ),
                  ],
                ),
              SizedBox(height: 20.h),
              Form(
                key: _formKey,
                child: Column(
                  children: [
                    Text('Correo: ${widget.email}'),
                    SizedBox(height: 16.h),
                    Container(
                      width: 321.w,
                      color: Colors.white,
                      child: TextFormField(
                        controller: _codeController,
                        keyboardType: TextInputType.number,
                        decoration: InputDecoration(
                          label: Text(
                            "Codigo de Verificación",
                            style: TextStyle(color: Colors.black),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(10),
                            borderSide: BorderSide(
                              color: Colors.black,
                            ),
                          ),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(10),
                            borderSide: BorderSide(
                              color: Colors.black,
                            ),
                          ),
                          errorStyle: TextStyle(color: Colors.red),
                        ),
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return 'Por favor ingresa el código';
                          }
                          return null;
                        },
                      ),
                    ),
                    SizedBox(height: 16.h),
                    Container(
                      width: 321.w,
                      color: Colors.white,
                      child: TextFormField(
                        controller: _nameController,
                        decoration: InputDecoration(
                          label: Text(
                            "Nombre Completo",
                            style: TextStyle(color: Colors.black),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(10),
                            borderSide: BorderSide(
                              color: Colors.black,
                            ),
                          ),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(10),
                          ),
                          errorStyle: TextStyle(color: Colors.red),
                        ),
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return 'Por favor ingresa su nombre completo';
                          }
                          return null;
                        },
                      ),
                    ),
                    SizedBox(height: 16.h),
                    Container(
                      width: 321.w,
                      color: Colors.white,
                      child: TextFormField(
                        controller: _passwordController,
                        obscureText: true,
                        keyboardType: TextInputType.visiblePassword,
                        decoration: InputDecoration(
                          label: Text(
                            "Contraseña",
                            style: TextStyle(color: Colors.black),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(10),
                            borderSide: BorderSide(
                              color: Colors.black,
                            ),
                          ),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(10),
                            borderSide: BorderSide(
                              color: Colors.black,
                            ),
                          ),
                          errorStyle: TextStyle(color: Colors.red),
                        ),
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return 'Por favor ingresa una contraseña';
                          }
                          if (value.length < 6) {
                            return 'La contraseña debe tener al menos 6 caracteres';
                          }
                          return null; // Sin errores
                        },
                      ),
                    ),
                    if (_error != null)
                      Text(_error!, style: const TextStyle(color: Colors.red)),
                    SizedBox(height: 16.h),
                    Container(
                      width: 180,
                      height: 36,
                      child: ElevatedButton(
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Naranja,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10),
                          ),
                        ),
                        onPressed: _loading ? null : _handleVerifyAndRegister,
                        child: _loading
                            ? const CircularProgressIndicator()
                            : const Text(
                                'Registrarse',
                                style: TextStyle(
                                  color: Colors.black,
                                  fontSize: 10,
                                ),
                              ),
                      ),
                    ),
                  ],
                ),
              ),
              SizedBox(height: 30.h),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    "Los Kollingas",
                    style: TextStyle(fontSize: 16),
                  ),
                  SizedBox(width: 10),
                  Image.asset(
                    "assets/images/logo_empresa.png",
                    height: 45,
                    width: 45,
                  )
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
