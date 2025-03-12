import 'package:flutter/material.dart';
import 'package:tudespensa/constants.dart';
//import 'package:tudespensa/pages/home_page.dart';
import 'package:tudespensa/pages/login_page.dart';
import 'package:tudespensa/widgets/top_banner.dart';
import 'package:tudespensa/widgets/wellcome_button.dart';

class WellcomePage extends StatelessWidget {
  const WellcomePage({super.key});

  @override
  Widget build(BuildContext context) {
    //Size size = MediaQuery.of(context).size;

    return Scaffold(
        body: SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          TopBanner(),
          Container(
            padding: EdgeInsets.all(38),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "Tu\n" + "Despensa",
                  style: TextStyle(
                    fontSize: 36,
                    fontWeight: FontWeight.w700,
                    color: TextColor,
                  ),
                ),
                SizedBox(height: 25),
                Text(
                  "Lema de la aplicacion que todavia no esta definida pero ahi vamos mi gente",
                  style: TextStyle(
                    fontSize: 16,
                    color: TextColor,
                  ),
                ),
                SizedBox(height: 40),
                WellcomeButton(
                  tapEvent: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => LoginPage()));
                    /* MaterialPageRoute(builder: (context) => HomePage())); */
                  },
                )
              ],
            ),
          )
        ],
      ),
    ));
  }
}
