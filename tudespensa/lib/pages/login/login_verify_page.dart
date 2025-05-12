import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart'; // Responsividad
import 'package:provider/provider.dart';
import 'package:tudespensa/pages/home_page.dart';
import 'package:tudespensa/provider/auth_provider.dart';
import 'package:tudespensa/constants.dart';

class LoginVerifyPage extends StatelessWidget {
  final String email;
  LoginVerifyPage({super.key, required this.email});

  final codeController = TextEditingController();
  final passwordController = TextEditingController();
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    final authProvider = context.watch<AuthProvider>();
    final screenHeight = MediaQuery.of(context).size.height;
    final iskeyboard = MediaQuery.of(context).viewInsets.bottom != 0;

    return Scaffold(
      backgroundColor: BackgroundColor,
      body: SafeArea(
        child: SingleChildScrollView(
          reverse: true, // Hace scroll hacia abajo si el teclado aparece
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
                            height: 80,
                            width: 80,
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
                    Text(
                      "Código enviado a: $email",
                      style: TextStyle(
                        color: Colors.black,
                        fontSize: 15.sp,
                      ),
                    ),
                    SizedBox(height: 20.h),
                    Container(
                      color: Colors.white,
                      width: 350.w,
                      height: 50.h,
                      child: TextFormField(
                        keyboardType: TextInputType.number,
                        controller: codeController,
                        decoration: InputDecoration(
                          label: Text(
                            "Codigo",
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
                    const SizedBox(height: 20),
                    Container(
                      color: Colors.white,
                      width: 350.w,
                      height: 50.h,
                      child: TextFormField(
                        controller: passwordController,
                        obscureText: true, // Ocultar la contraseña
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
                    const SizedBox(height: 20),
                    SizedBox(
                      width: 180.w,
                      height: 36.h,
                      child: ElevatedButton(
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Naranja,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10),
                          ),
                        ),
                        onPressed: authProvider.isLoading
                            ? null
                            : () async {
                                final success =
                                    await authProvider.verifyLoginCode(
                                  email: email,
                                  codigo: codeController.text.trim(),
                                  password: passwordController.text.trim(),
                                );
                                if (success) {
                                  Navigator.pushReplacement(
                                    context,
                                    MaterialPageRoute(
                                        builder: (_) => HomePage()),
                                  );
                                } else {
                                  ScaffoldMessenger.of(context).showSnackBar(
                                    const SnackBar(
                                      content:
                                          Text("Error al verificar código"),
                                      backgroundColor: Colors.red,
                                    ),
                                  );
                                }
                              },
                        child: authProvider.isLoading
                            ? const CircularProgressIndicator(
                                color: Colors.white)
                            : Text(
                                "Verificar y Entrar",
                                style: TextStyle(
                                  color: Colors.black,
                                  fontSize: 16,
                                ),
                              ),
                      ),
                    ),
                    SizedBox(height: 30.h),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          "Los Kollingas",
                          style: TextStyle(fontSize: 15.sp),
                        ),
                        SizedBox(width: 10),
                        Image.asset(
                          "assets/images/logo_empresa.png",
                          height: 45,
                          width: 45,
                        )
                      ],
                    ),
                    SizedBox(
                      height: 20.h,
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
