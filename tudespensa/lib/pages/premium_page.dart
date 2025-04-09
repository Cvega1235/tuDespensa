import 'package:flutter/material.dart';
import 'package:tudespensa/constants.dart';
import 'package:tudespensa/icon_personalizado.dart';
import 'package:tudespensa/pages/compra_page.dart';

class PremiumPage extends StatelessWidget {
  const PremiumPage({super.key});

  @override
  Widget build(BuildContext context) {
    final screenHeight = MediaQuery.of(context).size.height;

    return Scaffold(
      backgroundColor: BackgroundColor,
      body: Column(
        children: [
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
                    'assets/images/premium.png',
                    height: 59,
                    width: 59,
                    fit: BoxFit.cover,
                  ),
                ),
              ),
              Positioned.fill(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    IconButton(
                        icon: Icon(
                          Icons.menu,
                          color: Colors.black,
                        ),
                        onPressed: () {}),
                  ],
                ),
              ),
            ],
          ),
          SizedBox(height: 15),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    "Tu Despensa",
                    style: TextStyle(
                      color: Colors.black,
                      fontSize: 23,
                    ),
                  ),
                  Text(
                    "PREMIUM",
                    style: TextStyle(
                      color: Naranja,
                      fontSize: 25,
                    ),
                  ),
                ],
              ),
              SizedBox(width: 8),
              Image.asset(
                'assets/images/logo.png',
                height: 59,
                width: 59,
                fit: BoxFit.cover,
              ),
            ],
          ),
          SizedBox(height: 12),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 25),
            child: Text(
              "Alguno de los beneficios de nuestro plan premium, son nuestras funcinones adicionales.",
              style: TextStyle(
                color: Colors.black,
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          SizedBox(height: 15),
          Container(
            width: 350,
            height: 90,
            padding: const EdgeInsets.symmetric(
              horizontal: 20,
              vertical: 10,
            ),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(15),
              border: Border.all(color: Colors.black, width: 1),
            ),
            child: Row(
              children: [
                SvgIcon(
                  'assets/icons/candado.svg',
                  size: 35,
                  color: Colors.black,
                ),
                SizedBox(width: 15),
                Expanded(
                  child: Text(
                    'Disfruta de objetivos de calorias flexibles y personalizadas para tu dia diario.',
                    style: const TextStyle(
                      fontSize: 14,
                      color: Colors.black,
                    ),
                    overflow: TextOverflow.ellipsis,
                    maxLines: 3,
                  ),
                ),
              ],
            ),
          ),
          SizedBox(height: 15),
          Container(
            width: 350,
            height: 90,
            padding: const EdgeInsets.symmetric(
              horizontal: 20,
              vertical: 10,
            ),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(15),
              border: Border.all(color: Colors.black, width: 1),
            ),
            child: Row(
              children: [
                SvgIcon(
                  'assets/icons/candado.svg',
                  size: 35,
                  color: Colors.black,
                ),
                SizedBox(width: 15),
                Expanded(
                  child: Text(
                    'Disfruta de objetivos de calorias flexibles y personalizadas para tu dia diario.',
                    style: const TextStyle(
                      fontSize: 14,
                      color: Colors.black,
                    ),
                    overflow: TextOverflow.ellipsis,
                    maxLines: 3,
                  ),
                ),
              ],
            ),
          ),
          SizedBox(height: 15),
          Container(
            width: 350,
            height: 90,
            padding: const EdgeInsets.symmetric(
              horizontal: 20,
              vertical: 10,
            ),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(15),
              border: Border.all(color: Colors.black, width: 1),
            ),
            child: Row(
              children: [
                SvgIcon(
                  'assets/icons/candado.svg',
                  size: 35,
                  color: Colors.black,
                ),
                SizedBox(width: 15),
                Expanded(
                  child: Text(
                    'Disfruta de objetivos de calorias flexibles y personalizadas para tu dia diario.',
                    style: const TextStyle(
                      fontSize: 14,
                      color: Colors.black,
                    ),
                    overflow: TextOverflow.ellipsis,
                    maxLines: 3,
                  ),
                ),
              ],
            ),
          ),
          SizedBox(height: 8),
          Container(
            width: 205,
            height: 50,
            child: ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: Verde,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => CompraPage(),
                  ),
                );
              },
              child: Text(
                "Siguiente",
                style: TextStyle(color: Colors.white, fontSize: 16),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
