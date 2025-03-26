import 'package:flutter/material.dart';
import 'package:tudespensa/constants.dart';
import 'package:tudespensa/pages/register_page.dart';
import 'package:tudespensa/pages/login_page.dart';
import 'package:tudespensa/pages/wellcome/top_banner.dart';
import 'package:tudespensa/pages/wellcome/wellcome_button.dart';

class WellcomePage extends StatelessWidget {
  const WellcomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            TopBanner(),
            SizedBox(height: 30),
            Container(
              padding: EdgeInsets.all(38),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  SizedBox(height: 20),
                  Text(
                    "Cocina fácil, come inteligente",
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.w700,
                      color: Colors.black,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  SizedBox(height: 100),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      WellcomeButton(
                        title: "Registrarse",
                        textColor: Colors.black,
                        color: BottonColor,
                        tapEvent: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => RegisterPage(),
                              //builder: (context) => ObjetivoPage(),
                            ),
                          );
                        },
                      ),
                      SizedBox(width: 35),
                      WellcomeButton(
                        title: "Iniciar sesión",
                        textColor: Colors.black,
                        color: PrimaryColor,
                        tapEvent: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => LoginPage(),
                              //builder: (context) => InformationPage(),
                            ),
                          );
                        },
                      ),
                    ],
                  ),
                  SizedBox(height: 100),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        "Los Kollingas",
                        style: TextStyle(fontSize: 26),
                      ),
                      SizedBox(width: 15),
                      Image.asset(
                        "assets/images/logo_empresa.png",
                        height: 45,
                        width: 45,
                      )
                    ],
                  )
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
