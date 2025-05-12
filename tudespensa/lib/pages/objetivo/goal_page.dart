import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tudespensa/constants.dart';
import 'package:tudespensa/pages/information_page.dart';
import 'package:tudespensa/pages/objetivo/selection_button.dart';
import 'package:tudespensa/provider/goal_provider.dart';

class GoalPage extends StatelessWidget {
  const GoalPage({super.key});

  @override
  Widget build(BuildContext context) {
    final goalProvider = Provider.of<GoalProvider>(context);

    return Scaffold(
      body: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(vertical: 30),
        child: Column(
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
              width: 200,
              height: 50,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Verde,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
                onPressed: goalProvider.isLoading
                    ? null // Deshabilitar el botón si está cargando
                    : () async {
                        if (goalProvider.selectedGoal == null) {
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(
                                content:
                                    Text("Porfavor selecciona su objetivo")),
                          );
                          return;
                        }

                        final success = await goalProvider.saveGoal(context);

                        if (success) {
                          // Navegar solo si el objetivo se guarda correctamente
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (_) => const InformationPage()),
                          );
                        } else {
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(
                                content: Text("Fallo al guardar el objetivo")),
                          );
                        }
                      },
                child: goalProvider.isLoading
                    ? const CircularProgressIndicator(
                        color: Colors.white,
                      )
                    : const Text(
                        "Siguiente",
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 16,
                        ),
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
      ),
    );
  }
}
