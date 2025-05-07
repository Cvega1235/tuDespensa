import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tudespensa/constants.dart';
import 'package:tudespensa/pages/home_page.dart';
import 'package:tudespensa/provider/information_provider.dart';

class InformationPage extends StatefulWidget {
  const InformationPage({super.key});

  @override
  State<InformationPage> createState() => _InformationPageState();
}

class _InformationPageState extends State<InformationPage> {
  final estaturaController = TextEditingController();
  final pesoController = TextEditingController();
  final edadController = TextEditingController();
  final generoController = TextEditingController();
  final _formKey = GlobalKey<FormState>();

  @override
  void dispose() {
    estaturaController.dispose();
    pesoController.dispose();
    edadController.dispose();
    generoController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isKeyboard = MediaQuery.of(context).viewInsets.bottom != 0;
    final provider = Provider.of<InformationProvider>(context);

    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(vertical: 30),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            if (!isKeyboard)
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text("Tu\nDespensa",
                      style: TextStyle(color: Colors.black, fontSize: 30)),
                  SizedBox(width: 35),
                  Image.asset('assets/images/logo.png', height: 56, width: 56),
                ],
              ),
            SizedBox(height: 30),
            Text("Información",
                style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold)),
            SizedBox(height: 25),
            if (!isKeyboard)
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20.0),
                child: Text(
                  "Ingresa tus datos para poder ayudarte en tu objetivo.",
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                  textAlign: TextAlign.center,
                ),
              ),
            SizedBox(height: 30),
            Form(
              key: _formKey,
              child: Column(
                children: [
                  TextFormField(
                    keyboardType: TextInputType.number,
                    controller: estaturaController,
                    decoration: InputDecoration(
                      label: Text(
                        "Estatura",
                        style: TextStyle(color: Colors.black),
                      ),
                      hintText: "1.67 m",
                      focusedBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10),
                        borderSide: BorderSide(
                          color: Colors.black,
                        ),
                      ),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10),
                        borderSide: BorderSide(
                          color: Colors.black,
                        ),
                      ),
                      errorStyle: TextStyle(color: Colors.red),
                    ),
                    validator: (value) {
                      if (value == null || value.trim().isEmpty) {
                        return 'Por favor ingresa tu estatura';
                      }
                      final num? estatura = num.tryParse(value);
                      if (estatura == null || estatura <= 0 || estatura > 3) {
                        return 'Estatura inválida (ej: 1.67)';
                      }
                      return null;
                    },
                  ),
                  SizedBox(height: 20),
                  TextFormField(
                    keyboardType: TextInputType.number,
                    controller: pesoController,
                    decoration: InputDecoration(
                      label: Text(
                        "Peso",
                        style: TextStyle(color: Colors.black),
                      ),
                      hintText: "Ej: 70.5 kg",
                      hintStyle: TextStyle(color: Colors.grey),
                      focusedBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10),
                        borderSide: BorderSide(
                          color: Colors.black,
                        ),
                      ),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10),
                        borderSide: BorderSide(
                          color: Colors.black,
                        ),
                      ),
                      errorStyle: TextStyle(color: Colors.red),
                    ),
                    validator: (value) {
                      if (value == null || value.trim().isEmpty) {
                        return 'Por favor ingresa tu peso';
                      }
                      final num? peso = num.tryParse(value);
                      if (peso == null || peso <= 0 || peso > 500) {
                        return 'Peso inválido (ej: 70.5)';
                      }
                      return null;
                    },
                  ),
                  SizedBox(height: 20),
                  TextFormField(
                    keyboardType: TextInputType.datetime,
                    controller: edadController,
                    decoration: InputDecoration(
                      label: Text(
                        "Fecha de nacimiento",
                        style: TextStyle(color: Colors.black),
                      ),
                      hintText: "Ej: 2002-04-30",
                      hintStyle: TextStyle(color: Colors.grey),
                      focusedBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10),
                        borderSide: BorderSide(
                          color: Colors.black,
                        ),
                      ),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10),
                        borderSide: BorderSide(
                          color: Colors.black,
                        ),
                      ),
                      errorStyle: TextStyle(color: Colors.red),
                    ),
                    validator: (value) {
                      if (value == null || value.trim().isEmpty) {
                        return 'Por favor ingresa tu fecha de nacimiento';
                      }
                      final regex = RegExp(r'^\d{4}-\d{2}-\d{2}$');
                      if (!regex.hasMatch(value.trim())) {
                        return 'Formato inválido (usa YYYY-MM-DD)';
                      }
                      return null;
                    },
                  ),
                  SizedBox(height: 20),
                  buildValidatedGenderInput(),
                ],
              ),
            ),
            SizedBox(height: 30),
            provider.isLoading
                ? CircularProgressIndicator()
                : ElevatedButton(
                    onPressed: provider.isLoading
                        ? null
                        : () async {
                            if (_formKey.currentState!.validate()) {
                              final success = await provider.saveInformation(
                                estaturaController.text,
                                pesoController.text,
                                edadController.text,
                                generoController.text,
                              );
                              if (success && context.mounted) {
                                Navigator.pushReplacement(
                                  context,
                                  MaterialPageRoute(builder: (_) => HomePage()),
                                );
                              }
                            }
                          },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Naranja,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(10)),
                      padding:
                          EdgeInsets.symmetric(horizontal: 30, vertical: 15),
                    ),
                    child: Text("Siguiente",
                        style: TextStyle(color: Colors.black)),
                  ),
            SizedBox(height: 30),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text("Los Kollingas", style: TextStyle(fontSize: 16)),
                SizedBox(width: 15),
                Image.asset("assets/images/logo_empresa.png",
                    height: 35, width: 35),
              ],
            ),
            SizedBox(height: 10),
          ],
        ),
      ),
    );
  }

  Widget buildInput(String label, String hint, TextEditingController controller,
      TextInputType inputType) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 30),
      child: Container(
        height: 45,
        child: TextField(
          controller: controller,
          keyboardType: inputType,
          decoration: InputDecoration(
            labelText: label,
            hintText: hint,
            hintStyle: TextStyle(color: Colors.black45),
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
          ),
        ),
      ),
    );
  }
}

Widget buildValidatedGenderInput() {
  final generoController = TextEditingController();

  return Padding(
    padding: const EdgeInsets.symmetric(horizontal: 30),
    child: SizedBox(
      height: 60,
      child: TextFormField(
        controller: generoController,
        keyboardType: TextInputType.text,
        decoration: InputDecoration(
          labelText: "Género",
          hintText: "Masculino/Femenino",
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
        ),
        validator: (value) {
          final input = value?.trim().toLowerCase();
          if (input != 'masculino' && input != 'femenino') {
            return 'Solo se permite Masculino o Femenino';
          }
          return null;
        },
      ),
    ),
  );
}
