import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:provider/provider.dart';
import 'package:tudespensa/provider/auth_provider.dart';
import 'package:tudespensa/pages/register/register_verify_page.dart';
import 'package:tudespensa/constants.dart';

class RegisterRequestPage extends StatefulWidget {
  const RegisterRequestPage({super.key});

  @override
  State<RegisterRequestPage> createState() => _RegisterRequestPageState();
}

class _RegisterRequestPageState extends State<RegisterRequestPage> {
  final TextEditingController _emailController = TextEditingController();
  final _formKey = GlobalKey<FormState>();

  bool _loading = false;
  String? _error;

  Future<void> _handleRequestCode() async {
    setState(() {
      _loading = true;
      _error = null;
    });

    final email = _emailController.text.trim();
    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    final success = await authProvider.requestRegisterCode(email);

    setState(() {
      _loading = false;
    });

    if (success) {
      Navigator.push(
        context,
        MaterialPageRoute(
          builder: (_) => RegisterVerifyPage(email: email),
        ),
      );
    } else {
      setState(() {
        _error = 'Error al enviar el código. Verifica tu correo.';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final iskeyboard = MediaQuery.of(context).viewInsets.bottom != 0;
    final screenHeight = MediaQuery.of(context).size.height;

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
                          SizedBox(width: 55.w),
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
              Text(
                "Registrate",
                style: TextStyle(
                  fontSize: 38.sp,
                  fontWeight: FontWeight.bold,
                  color: Colors.black,
                ),
              ),
              SizedBox(height: 25.h),
              Form(
                key: _formKey,
                child: Column(
                  children: [
                    const Text(
                        'Ingresa tu correo para recibir un código de verificación'),
                    SizedBox(height: 16.h),
                    Container(
                      width: 321.w,
                      color: Colors.white,
                      child: TextFormField(
                          controller: _emailController,
                          keyboardType: TextInputType.emailAddress,
                          decoration: InputDecoration(
                            label: Text(
                              "Correo Electrónico",
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
                              return 'Por favor ingresa un correo electrónico';
                            }
                            // Validación básica de formato de email con RegExp
                            final emailRegExp =
                                RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$');
                            if (!emailRegExp.hasMatch(value)) {
                              return 'Ingresa un correo electrónico válido';
                            }
                            return null; // Sin errores
                          }),
                    ),
                    SizedBox(height: 16.h),
                    if (_error != null)
                      Text(_error!, style: const TextStyle(color: Colors.red)),
                    SizedBox(height: 20.h),
                    Container(
                      width: 180.w,
                      height: 36.h,
                      child: ElevatedButton(
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Naranja,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10),
                          ),
                        ),
                        onPressed: _loading ? null : _handleRequestCode,
                        child: _loading
                            ? const CircularProgressIndicator()
                            : const Text(
                                'Enviar código',
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
              //chuchacha chu cha
              SizedBox(height: 30.h),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    "Los Kollingas",
                    style: TextStyle(fontSize: 16),
                  ),
                  SizedBox(width: 10.w),
                  Image.asset(
                    "assets/images/logo_empresa.png",
                    height: 45.h,
                    width: 45.w,
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
