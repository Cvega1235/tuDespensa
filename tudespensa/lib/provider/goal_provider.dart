import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';
import 'auth_provider.dart'; // Asegúrate de importar AuthProvider

class GoalProvider extends ChangeNotifier {
  final String baseUrl =
      'http://localhost:4000/api'; // ajusta si usas IP local o deploy

  String? _selectedGoal;
  bool _isLoading = false;

  String? get selectedGoal => _selectedGoal;
  bool get isLoading => _isLoading;

  void setSelectedGoal(String goal) {
    _selectedGoal = goal;
    notifyListeners();
  }

  void _setLoading(bool value) {
    _isLoading = value;
    notifyListeners();
  }

  Future<bool> saveGoal(BuildContext context) async {
    if (_selectedGoal == null) return false;

    try {
      final token =
          await Provider.of<AuthProvider>(context, listen: false).getToken();

      if (token == null) {
        print("Token no encontrado");
        _setLoading(false);
        return false;
      }

      final res = await http.post(
        Uri.parse('$baseUrl/goal'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
        body: jsonEncode({'goal': _selectedGoal}),
      );

      _setLoading(false);

      if (res.statusCode == 201) {
        print("Objetivo guardado correctamente");
        return true;
      } else {
        print("Error al guardar objetivo: ${res.body}");
        return false;
      }
    } catch (e) {
      _setLoading(false);
      print("Error en saveGoal: $e");
      return false;
    }
  }
}
