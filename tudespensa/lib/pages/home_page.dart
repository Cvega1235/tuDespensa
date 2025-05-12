import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:provider/provider.dart';
import 'package:tudespensa/constants.dart';
import 'package:tudespensa/pages/ajustes_page.dart';
import 'package:tudespensa/pages/despensa_page.dart';
import 'package:tudespensa/pages/user_page.dart';
import 'package:tudespensa/provider/auth_provider.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  String username = "";

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    if (username != authProvider.username) {
      username = authProvider.username ?? "Perro";
    }
  }

  Widget _buildIconButton(String assetPath, VoidCallback onTap) {
    return IconButton(
      padding: EdgeInsets.zero,
      icon: SvgPicture.asset(
        assetPath,
        width: 50,
        height: 50,
        fit: BoxFit.contain,
        color: Colors.white,
      ),
      onPressed: onTap,
    );
  }

  Widget _buildImageButton(String imagePath, String label, VoidCallback onTap) {
    return Column(
      children: [
        ClipRRect(
          borderRadius: BorderRadius.circular(15),
          child: Stack(
            children: [
              Image.asset(
                imagePath,
                width: 130,
                height: 135,
                fit: BoxFit.cover,
              ),
              Positioned.fill(
                child: Material(
                  color: Colors.transparent,
                  child: InkWell(
                    splashColor: Colors.yellow.shade100,
                    onTap: onTap,
                  ),
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: 6),
        Text(
          label,
          style: const TextStyle(fontSize: 20),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: SafeArea(
        child: Container(
          height: 56,
          padding: const EdgeInsets.all(12),
          margin: const EdgeInsets.symmetric(horizontal: 24, vertical: 10),
          decoration: BoxDecoration(
            color: Verde,
            borderRadius: BorderRadius.circular(15),
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              _buildIconButton('assets/icons/home.svg', () {}),
              _buildIconButton('assets/icons/carrito-compras.svg', () {}),
              _buildIconButton('assets/icons/heart.svg', () {}),
              _buildIconButton('assets/icons/ajustes.svg', () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const AjustesPage()),
                );
              }),
            ],
          ),
        ),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(vertical: 30),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            // Header
            Padding(
              padding: const EdgeInsets.all(20),
              child: Row(
                children: [
                  Image.asset('assets/images/logo.png', width: 65, height: 65),
                  const Spacer(flex: 2),
                  ClipRRect(
                    borderRadius: BorderRadius.circular(50),
                    child: Stack(
                      children: [
                        Image.asset('assets/images/mono.png',
                            width: 68, height: 68),
                        Positioned.fill(
                          child: Material(
                            color: Colors.transparent,
                            child: InkWell(
                              splashColor: Colors.yellow.shade100,
                              onTap: () {
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                      builder: (context) => const UserPage()),
                                );
                              },
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),

            // Saludo
            Padding(
              padding: const EdgeInsets.only(left: 45),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text("Hola", style: TextStyle(fontSize: 30)),
                  Text(
                    username,
                    style:
                        const TextStyle(fontSize: 30, color: Colors.deepOrange),
                  ),
                ],
              ),
            ),

            const SizedBox(height: 15),

            // Recetas recomendadas
            Column(
              children: [
                const Text("Recetas Recomendadas",
                    style: TextStyle(fontSize: 20)),
                const SizedBox(height: 6),
                ClipRRect(
                  borderRadius: BorderRadius.circular(15),
                  child: Stack(
                    children: [
                      Image.asset(
                        'assets/images/recetasRecom.png',
                        width: 228,
                        height: 85,
                        fit: BoxFit.cover,
                      ),
                      Positioned.fill(
                        child: Material(
                          color: Colors.transparent,
                          child: InkWell(
                            splashColor: Colors.yellow.shade100,
                            onTap: () {},
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),

            const SizedBox(height: 25),

            // Botones principales 1
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                _buildImageButton(
                    'assets/images/objetivoButton.png', 'Objetivo', () {}),
                const SizedBox(width: 15),
                _buildImageButton(
                    'assets/images/recetasButton.png', 'Recetas', () {}),
              ],
            ),

            const SizedBox(height: 15),

            // Botones principales 2
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                _buildImageButton(
                  'assets/images/despensabutton.png',
                  'Despensa',
                  () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => const DespensaPage()),
                    );
                  },
                ),
                const SizedBox(width: 15),
                _buildImageButton(
                    'assets/images/historialButton.png', 'Historial', () {}),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
