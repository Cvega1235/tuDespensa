import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;

class InformationProvider extends ChangeNotifier {
  final String baseUrl =
      'http://localhost:4000/api'; // Ajusta según tu URL de backend

  String? _estatura;
  String? _peso;
  String? _edad;
  String? _genero;

  String? get estatura => _estatura;
  String? get peso => _peso;
  String? get edad => _edad;
  String? get genero => _genero;

  bool _isLoading = false;
  bool get isLoading => _isLoading;

  void _setLoading(bool value) {
    _isLoading = value;
    notifyListeners();
  }

  // Obtener información del usuario
  Future<void> getInformation() async {
    _setLoading(true);
    try {
      final prefs = await SharedPreferences.getInstance();
      final token = prefs.getString('auth_token');

      if (token == null) {
        print("Token no encontrado");
        _setLoading(false);
        return;
      }

      final res = await http.get(
        Uri.parse('$baseUrl/information'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
      );

      _setLoading(false);

      if (res.statusCode == 200) {
        final data = jsonDecode(res.body);
        if (data.isNotEmpty) {
          _estatura = data[0]['Estatura'];
          _peso = data[0]['Peso'];
          _edad = data[0]['Edad'];
          _genero = data[0]['Genero'];
          notifyListeners();
        }
      } else {
        print("Error al obtener información: ${res.body}");
      }
    } catch (e) {
      _setLoading(false);
      print("Error en getInformation: $e");
    }
  }

  // Crear o actualizar la información del usuario
  Future<bool> saveInformation(
      String estatura, String peso, String edad, String genero) async {
    _setLoading(true);
    try {
      final prefs = await SharedPreferences.getInstance();
      final token = prefs.getString('auth_token');

      if (token == null) {
        print("Token no encontrado");
        _setLoading(false);
        return false;
      }

      final res = await http.post(
        Uri.parse('$baseUrl/information'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
        body: jsonEncode({
          'Estatura': estatura,
          'Peso': peso,
          'Edad': edad,
          'Genero': genero,
        }),
      );

      _setLoading(false);

      if (res.statusCode == 201) {
        print("Información guardada correctamente");
        return true;
      } else {
        print("Error al guardar la información: ${res.body}");
        return false;
      }
    } catch (e) {
      _setLoading(false);
      print("Error en saveInformation: $e");
      return false;
    }
  }
}
