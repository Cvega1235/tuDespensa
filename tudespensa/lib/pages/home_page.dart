import 'package:flutter/material.dart';
import 'package:tudespensa/pages/user_page.dart';

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
                  ClipRRect(
                    borderRadius: BorderRadius.circular(50),
                    child: Stack(
                      children: [
                        Image.asset(
                          'assets/images/mono.png',
                          width: 45,
                          height: 45,
                        ),
                        Positioned.fill(
                          child: Material(
                            color: Colors.transparent,
                            child: InkWell(
                              splashColor: Colors.yellow.shade100,
                              onTap: () {
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (context) => UserPage(),
                                  ),
                                );
                              },
                            ),
                          ),
                        )
                      ],
                    ),
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
