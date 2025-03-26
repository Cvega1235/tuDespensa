import 'package:flutter/material.dart';
import 'package:tudespensa/constants.dart';
import 'package:tudespensa/pages/home_page.dart';

class InformationPage extends StatelessWidget {
  const InformationPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        toolbarHeight: 30,
        backgroundColor: BackgroundColor,
      ),
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
            "Informacion",
            style: TextStyle(
              fontSize: 30,
              fontWeight: FontWeight.bold,
              color: Colors.black,
            ),
          ),
          SizedBox(height: 25),
          Text(
            "Ingresa tus datos para poder ayudarte en tu objetivo.",
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.bold,
              color: Colors.black,
            ),
            textAlign: TextAlign.center,
          ),
          SizedBox(height: 30),
          Column(
            children: [
              SizedBox(height: 8),
              Container(
                width: 321,
                height: 36,
                color: Colors.white,
                child: TextField(
                  decoration: InputDecoration(
                    label: Text(
                      "1.67 m",
                    ),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                  ),
                ),
              ),
            ],
          ),
          SizedBox(height: 20),
          Column(
            children: [
              SizedBox(height: 8),
              Container(
                width: 321,
                height: 36,
                color: Colors.white,
                child: TextField(
                  decoration: InputDecoration(
                    label: Text(
                      "78.6 kg",
                    ),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                  ),
                ),
              ),
            ],
          ),
          SizedBox(height: 20),
          Column(
            children: [
              SizedBox(height: 8),
              Container(
                width: 321,
                height: 36,
                color: Colors.white,
                child: TextField(
                  decoration: InputDecoration(
                    label: Text(
                      "07/07/1997",
                    ),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                  ),
                ),
              ),
            ],
          ),
          SizedBox(height: 20),
          Column(
            children: [
              SizedBox(height: 8),
              Container(
                width: 321,
                height: 36,
                color: Colors.white,
                child: TextField(
                  decoration: InputDecoration(
                    label: Text(
                      "sexo",
                    ),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                  ),
                ),
              ),
            ],
          ),
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
