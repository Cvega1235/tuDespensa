import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Padding(
              padding: const EdgeInsets.all(20),
              child: Row(
                children: [
                  Image.asset(
                    'assets/images/logo.png',
                    width: 65,
                    height: 65,
                  ),
                  Spacer(flex: 2),
                  Image.asset(
                    'assets/images/mono.png',
                    width: 60,
                    height: 60,
                  ),
                ],
              ),
            ),
            SizedBox(height: 30),
            Text(
              "Hola",
              style: TextStyle(fontSize: 30),
            ),
            SizedBox(height: 15),
            Column(
              children: [
                Text("Recetar Reomendadas"),
                Image.asset(
                  'assets/images/recetasReom.png',
                  width: 419,
                  height: 82,
                )
              ],
            ),
          ],
        ),
      ),
    );
  }
}
