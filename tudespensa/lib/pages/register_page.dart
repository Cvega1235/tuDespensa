import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tudespensa/pages/home_page.dart';
import 'package:tudespensa/provider/auth_provider.dart';

class RegisterPage extends StatelessWidget {
  RegisterPage({super.key});

  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  final usernameController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    final isLoading = context.watch<AuthProvider>().isLoading;

    return Scaffold(
      backgroundColor: Color(0xffDCDADD),
      appBar: AppBar(
        backgroundColor: Color(0xffDCDADD),
        title: Center(
          child: Text(
            'Registrate',
            textAlign: TextAlign.center,
          ),
        ),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Icon(
              Icons.lock,
              size: 70,
              color: Color(0xff240000),
            ),
            SizedBox(
              height: 35,
            ),
            Text('Vamos a crear una cuenta!'),
            SizedBox(
              height: 25,
            ),
            Container(
              width: 400,
              color: Colors.white,
              child: TextField(
                controller: usernameController,
                decoration: InputDecoration(
                  label: Text(
                    "Nombre de Usuario",
                  ),
                  border: OutlineInputBorder(),
                ),
              ),
            ),
            SizedBox(
              height: 20,
            ),
            Container(
              width: 400,
              color: Colors.white,
              child: TextField(
                controller: passwordController,
                decoration: InputDecoration(
                  label: Text(
                    "Contraseña",
                  ),
                  border: OutlineInputBorder(),
                ),
              ),
            ),
            SizedBox(
              height: 20,
            ),
            Container(
              width: 400,
              color: Colors.white,
              child: TextField(
                controller: emailController,
                decoration: InputDecoration(
                  label: Text(
                    "Correo Electronico",
                  ),
                  border: OutlineInputBorder(),
                ),
              ),
            ),
            SizedBox(
              height: 30,
            ),
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
                        final register =
                            await context.read<AuthProvider>().registerUser(
                                  email: emailController.text,
                                  password: passwordController.text,
                                  username: usernameController.text,
                                );
                        if (register == true) {
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
                        'Registrar',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 25,
                        ),
                      ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
