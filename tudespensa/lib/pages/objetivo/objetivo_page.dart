import 'package:flutter/material.dart';
import 'package:tudespensa/constants.dart';
import 'package:tudespensa/pages/home_page.dart';
import 'package:tudespensa/pages/objetivo/selection_button.dart';

class ObjetivoPage extends StatelessWidget {
  const ObjetivoPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                "Tu\n" "Despensa",
                style: TextStyle(
                  color: Colors.black,
                  fontSize: 30,
                ),
              ),
              SizedBox(width: 35),
              Image.asset(
                'assets/images/logo.png',
                height: 56,
                width: 56,
              )
            ],
          ),
          SizedBox(height: 30),
          Text(
            "¿Cuál es tu objetivo?",
            style: TextStyle(
              fontSize: 26,
              fontWeight: FontWeight.bold,
              color: Colors.black,
            ),
          ),
          SizedBox(height: 30),
          SelectionButton(),
          SizedBox(height: 30),
          Container(
            width: 135,
            height: 50,
            child: ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: BottonColor,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => HomePage(),
                  ),
                );
              },
              child: Text(
                "Siguiente",
                style: TextStyle(color: Colors.black),
              ),
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
              SizedBox(width: 15),
              Image.asset(
                "assets/images/logo_empresa.png",
                height: 35,
                width: 35,
              )
            ],
          ),
          SizedBox(height: 10),
        ],
      ),
    );
  }
}
