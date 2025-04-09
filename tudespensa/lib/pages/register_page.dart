import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tudespensa/constants.dart';
import 'package:tudespensa/pages/objetivo/objetivo_page.dart';
import 'package:tudespensa/provider/auth_provider.dart';

class RegisterPage extends StatelessWidget {
  RegisterPage({super.key});

  final _formKey = GlobalKey<FormState>();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  final usernameController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    final isLoading = context.watch<AuthProvider>().isLoading;
    final screenHeight = MediaQuery.of(context).size.height;
    final iskeyboard = MediaQuery.of(context).viewInsets.bottom != 0;
    return Scaffold(
      resizeToAvoidBottomInset: false,
      backgroundColor: BackgroundColor,
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          if (!iskeyboard)
            Stack(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.only(
                    bottomLeft: Radius.circular(50),
                    bottomRight: Radius.circular(50),
                  ),
                  child: Container(
                    height: screenHeight * 0.3,
                    width: double.infinity,
                    child: Image.asset(
                      'assets/images/login.png',
                      height: 59,
                      width: 59,
                      fit: BoxFit.cover,
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
                            "Registrate a",
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                            ),
                          ),
                          Text(
                            "Tu Despensa",
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 28,
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
          SizedBox(height: 35),
          Text(
            "Registrate",
            style: TextStyle(
              fontSize: 40,
              fontWeight: FontWeight.bold,
              color: Colors.black,
            ),
          ),
          SizedBox(height: 30),
          Form(
            key: _formKey,
            child: Column(
              children: [
                Container(
                  width: 321,
                  color: Colors.white,
                  child: TextFormField(
                    // Cambiamos TextField por TextFormField
                    controller: usernameController,
                    decoration: InputDecoration(
                      label: Text("Nombre de Usuario"),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                      errorStyle: TextStyle(color: Colors.red),
                    ),
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Por favor ingresa un nombre de usuario';
                      }
                      if (value.length < 3) {
                        return 'El nombre debe tener al menos 3 caracteres';
                      }
                      return null; // Sin errores
                    },
                  ),
                ),
                SizedBox(height: 20),
                Container(
                  width: 321,
                  color: Colors.white,
                  child: TextFormField(
                    // Cambiamos TextField por TextFormField
                    controller: emailController,
                    decoration: InputDecoration(
                      label: Text("Correo Electrónico"),
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
                    },
                  ),
                ),
                SizedBox(height: 20),
                Container(
                  width: 321,
                  color: Colors.white,
                  child: TextFormField(
                    // Cambiamos TextField por TextFormField
                    controller: passwordController,
                    obscureText: true, // Ocultar la contraseña
                    decoration: InputDecoration(
                      label: Text("Contraseña"),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10),
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
                      // Puedes agregar más validaciones según tus requisitos
                      // Por ejemplo, verificar que contenga números, letras mayúsculas, etc.
                      return null; // Sin errores
                    },
                  ),
                ),
                SizedBox(height: 40),
                Container(
                  width: 180,
                  height: 36,
                  child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Color(0xffE6E02D),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                    onPressed: isLoading
                        ? null
                        : () async {
                            // Validar el formulario antes de proceder
                            if (_formKey.currentState!.validate()) {
                              // Solo continuar si todas las validaciones pasan
                              final register = await context
                                  .read<AuthProvider>()
                                  .registerUser(
                                    email: emailController.text,
                                    password: passwordController.text,
                                    username: usernameController.text,
                                  );
                              if (register == true) {
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (context) => const ObjetivoPage(),
                                  ),
                                );
                              }
                            }
                          },
                    child: isLoading
                        ? CircularProgressIndicator()
                        : Text(
                            'Entrar',
                            style: TextStyle(
                              color: Colors.black,
                              fontSize: 18,
                            ),
                          ),
                  ),
                ),
              ],
            ),
          ),
          SizedBox(height: 30),
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
    );
  }
}
