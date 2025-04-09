import 'package:flutter/material.dart';
import 'package:tudespensa/constants.dart';
import 'package:tudespensa/icon_personalizado.dart';
import 'package:tudespensa/pages/premium_page.dart';

class AjustesPage extends StatelessWidget {
  const AjustesPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(icon: Icon(Icons.menu), onPressed: () {}),
        title: Text('Ajuste', style: TextStyle(fontSize: 26)),
        centerTitle: true,
        actions: [
          Padding(
            padding: const EdgeInsets.all(10.0),
            child: Image.asset('assets/images/logo.png', width: 40, height: 40),
          )
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Center(
              child: Card(
                color: Naranja,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(25),
                ),
                child: Container(
                  width: 400,
                  height: 500,
                  margin: EdgeInsets.all(5),
                  child: Padding(
                    padding: const EdgeInsets.all(25.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Container(
                          width: 255,
                          height: 45,
                          margin: EdgeInsets.all(1),
                          child: ElevatedButton(
                            style: ButtonStyle(
                              backgroundColor: WidgetStateColor.transparent,
                              shadowColor: WidgetStateColor.transparent,
                            ),
                            onPressed: () {},
                            child: Row(
                              children: [
                                SvgIcon(
                                  'assets/icons/cuenta.svg',
                                  size: 25,
                                  color: Colors.black,
                                ),
                                SizedBox(width: 10),
                                Text(
                                  'Cuenta',
                                  style: TextStyle(
                                    fontSize: 16,
                                    color: Colors.black,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                        SizedBox(height: 15),
                        Container(
                          width: 255,
                          height: 45,
                          margin: EdgeInsets.all(1),
                          child: ElevatedButton(
                            style: ButtonStyle(
                              backgroundColor: WidgetStateColor.transparent,
                              shadowColor: WidgetStateColor.transparent,
                            ),
                            onPressed: () {},
                            child: Row(
                              children: [
                                SvgIcon(
                                  'assets/icons/perfil.svg',
                                  size: 25,
                                  color: Colors.black,
                                ),
                                SizedBox(width: 10),
                                Text(
                                  'Perfil',
                                  style: TextStyle(
                                    fontSize: 16,
                                    color: Colors.black,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                        SizedBox(height: 15),
                        Container(
                          width: 255,
                          height: 45,
                          margin: EdgeInsets.all(1),
                          child: ElevatedButton(
                            style: ButtonStyle(
                              backgroundColor: WidgetStateColor.transparent,
                              shadowColor: WidgetStateColor.transparent,
                            ),
                            onPressed: () {},
                            child: Row(
                              children: [
                                SvgIcon(
                                  'assets/icons/objetivo.svg',
                                  size: 25,
                                  color: Colors.black,
                                ),
                                SizedBox(width: 10),
                                Text(
                                  'Mi Objetivo',
                                  style: TextStyle(
                                    fontSize: 16,
                                    color: Colors.black,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                        SizedBox(height: 15),
                        Container(
                          width: 255,
                          height: 45,
                          margin: EdgeInsets.all(1),
                          child: ElevatedButton(
                            style: ButtonStyle(
                              backgroundColor: WidgetStateColor.transparent,
                              shadowColor: WidgetStateColor.transparent,
                            ),
                            onPressed: () {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (context) => PremiumPage(),
                                ),
                              );
                            },
                            child: Row(
                              children: [
                                SvgIcon(
                                  'assets/icons/premium.svg',
                                  size: 25,
                                  color: Colors.black,
                                ),
                                SizedBox(width: 10),
                                Text(
                                  'Premium',
                                  style: TextStyle(
                                    fontSize: 16,
                                    color: Colors.black,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                        SizedBox(height: 15),
                        Container(
                          width: 255,
                          height: 45,
                          margin: EdgeInsets.all(1),
                          child: ElevatedButton(
                            style: ButtonStyle(
                              backgroundColor: WidgetStateColor.transparent,
                              shadowColor: WidgetStateColor.transparent,
                            ),
                            onPressed: () {},
                            child: Row(
                              children: [
                                SvgIcon(
                                  'assets/icons/pagina-web.svg',
                                  size: 25,
                                  color: Colors.black,
                                ),
                                SizedBox(width: 10),
                                Text(
                                  'Sitio Web',
                                  style: TextStyle(
                                    fontSize: 16,
                                    color: Colors.black,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                        SizedBox(height: 15),
                        Container(
                          width: 255,
                          height: 45,
                          margin: EdgeInsets.all(1),
                          child: ElevatedButton(
                            style: ButtonStyle(
                              backgroundColor: WidgetStateColor.transparent,
                              shadowColor: WidgetStateColor.transparent,
                            ),
                            onPressed: () {},
                            child: Row(
                              children: [
                                SvgIcon(
                                  'assets/icons/cuenta.svg',
                                  size: 25,
                                  color: Colors.black,
                                ),
                                SizedBox(width: 10),
                                Text(
                                  'Pagina de la Empresa',
                                  style: TextStyle(
                                    fontSize: 16,
                                    color: Colors.black,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
