import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tudespensa/pages/home_page.dart';
import 'package:tudespensa/pages/register_page.dart';
import 'package:tudespensa/provider/auth_provider.dart';

class LoginPage extends StatelessWidget {
  LoginPage({super.key});

  final emailController = TextEditingController();
  final passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    final isLoading = context.watch<AuthProvider>().isLoading;

    return Scaffold(
      backgroundColor: const Color(0xffDCDADD),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Icon(
              Icons.lock,
              size: 100,
              color: Color(0xff240000),
            ),
            SizedBox(height: 20),
            Text(
              "Bienvenido de vuelta!",
              style: TextStyle(color: Colors.black38),
            ),
            SizedBox(height: 20),
            Container(
              width: 400,
              color: Colors.white,
              child: TextField(
                //controller: controller,
                controller: emailController,
                decoration: InputDecoration(
                  label: Text(
                    "Correo Electronico",
                  ),
                  border: OutlineInputBorder(),
                ),
              ),
            ),
            SizedBox(height: 20),
            Container(
              width: 400,
              color: Colors.white,
              child: TextField(
                //controller: controller,
                controller: passwordController,
                decoration: InputDecoration(
                  label: Text("Contraseña"),
                  border: OutlineInputBorder(),
                ),
              ),
            ),
            SizedBox(height: 20),
            Text(
              "Olvidate tu contraseña",
              style: TextStyle(color: Colors.black45),
            ),
            SizedBox(height: 20),
            Container(
              width: 400,
              height: 70,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Color(0xff240000),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8),
                  ),
                ),
                onPressed: isLoading
                    ? null
                    : () async {
                        final login =
                            await context.read<AuthProvider>().loginUser(
                                  email: emailController.text,
                                  password: passwordController.text,
                                );
                        if (login == true) {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => const HomePage(),
                            ),
                          );
                        }
                      },
                child: isLoading
                    ? CircularProgressIndicator()
                    : Text(
                        "Entrar",
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 25,
                        ),
                      ),
              ),
            ),
            SizedBox(height: 20),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text("No estas registrado? "),
                TextButton(
                    style:
                        TextButton.styleFrom(overlayColor: Color(0xff240000)),
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => RegisterPage(),
                        ),
                      );
                    },
                    child: const Text(
                      'Registrate ahora',
                      style: TextStyle(color: Colors.black),
                    ))
              ],
            )
          ],
        ),
      ),
    );
  }
}
