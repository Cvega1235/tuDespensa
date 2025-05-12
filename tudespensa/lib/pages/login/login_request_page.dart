import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart'; // Responsividad
import 'package:provider/provider.dart'; // Estado con Provider
import 'package:tudespensa/provider/auth_provider.dart'; // Nuestro Provider personalizado
import 'package:tudespensa/pages/login/login_verify_page.dart';
import 'package:tudespensa/constants.dart'; // Colores

// Página donde se ingresa el correo para pedir un código
class LoginRequestPage extends StatelessWidget {
  LoginRequestPage({super.key});

  // Controlador para manejar el texto del input de correo
  final emailController = TextEditingController();
  // 🔒 Clave del formulario para validar campos
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    // Obtenemos el estado del AuthProvider con Provider
    final authProvider = context.watch<AuthProvider>();
    // Altura de la pantalla (para distribuir elementos)
    final screenHeight = MediaQuery.of(context).size.height;
    // Detecta si el teclado está activo
    final isKeyboard = MediaQuery.of(context).viewInsets.bottom != 0;

    return Scaffold(
      backgroundColor: BackgroundColor,
      body: SafeArea(
        child: SingleChildScrollView(
          reverse: true, // Hace scroll hacia abajo si el teclado aparece
          child: Column(
            children: [
              // Imagen de bienvenida si el teclado NO está activo
              if (!isKeyboard)
                Stack(
                  // Imagen de fondo y logo
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
                    // Posicionamiento de texto/logo encima de la imagen
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
                                  fontSize:
                                      24.sp, // se adapta al tamaño de pantalla
                                  color: Colors.white,
                                ),
                              ),
                              Text(
                                "Tu Despensa",
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize:
                                      34.sp, // se adapta al tamaño de pantalla
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                            ],
                          ),
                          SizedBox(width: 20.w),
                          // Logo de la empresa
                          Image.asset(
                            'assets/images/logo.png',
                            height: 50,
                            width: 50,
                          )
                        ],
                      ),
                    ),
                  ],
                ),
              // Zona del formulario
              Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 24.0, vertical: 20),
                child: Form(
                  key: _formKey, // Clave para validar el formulario
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Text(
                        "Iniciar Sesion",
                        style: TextStyle(
                          fontSize: 24.sp, // se adapta al tamaño de pantalla
                          fontWeight: FontWeight.bold,
                          color: Colors.black,
                        ),
                      ),
                      SizedBox(height: 10.h),
                      Text(
                        "Bienvenido de vuelta!",
                        style: TextStyle(
                          color: Colors.black54,
                          fontSize: 15.sp, // se adapta al tamaño de pantalla
                        ),
                      ),
                      SizedBox(height: 25.h),
                      // Campo de correo electrónico
                      Container(
                        color: Colors.white,
                        width: 350.w,
                        height: 50.h,
                        child: TextFormField(
                          controller: emailController,
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
                              borderSide: BorderSide(
                                color: Colors.black,
                              ),
                            ),
                            errorStyle: TextStyle(color: Colors.red),
                          ),
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return 'Por favor ingresa un correo electrónico';
                            }
                            final emailRegExp =
                                RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$');
                            if (!emailRegExp.hasMatch(value)) {
                              return 'Ingresa un correo electrónico válido';
                            }
                            return null;
                          },
                        ),
                      ),
                      SizedBox(height: 30.h),
                      // Botón para enviar código
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
                                      await authProvider.requestLoginCode(
                                          emailController.text.trim());
                                  if (success) {
                                    Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                        builder: (_) => LoginVerifyPage(
                                            email: emailController.text.trim()),
                                      ),
                                    );
                                  } else {
                                    ScaffoldMessenger.of(context).showSnackBar(
                                      const SnackBar(
                                        content:
                                            Text("No se pudo enviar el código"),
                                        backgroundColor: Colors.red,
                                      ),
                                    );
                                  }
                                },
                          child: authProvider.isLoading
                              ? const CircularProgressIndicator(
                                  color: Colors.white)
                              : Text(
                                  "Enviar código",
                                  style: TextStyle(
                                    color: Colors.black,
                                    fontSize: 16,
                                  ),
                                ),
                        ),
                      ),
                      SizedBox(height: 40.h),
                      // Pie de página
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text("Los Kollingas",
                              style: TextStyle(fontSize: 15.sp)),
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
                      ), // Extra espacio por si el teclado está activo
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
