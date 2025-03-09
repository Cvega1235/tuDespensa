import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class AuthProvider extends ChangeNotifier {
  bool _isLoading = false;
  bool get isLoading => _isLoading;
  set isLoading(bool value) {
    _isLoading = value;
    notifyListeners();
  }

  Future<bool> loginUser({
    required String email,
    required String password,
  }) async {
    try {
      print(email);
      print(password);

      isLoading = true;
      await Future.delayed(Duration(seconds: 3));

      final response = await http.post(
        Uri.parse(
          "http://127.0.0.1:4000/api/login",
        ),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          "email": email,
          "password": password,
        }),
      );
      print(response.body);
      isLoading = false;
      return true;
    } catch (e) {
      print(e);
      return false;
    }
  }

  Future<bool> registerUser({
    //email, password, username
    required String email,
    required String password,
    required String username,
  }) async {
    try {
      print(email);
      print(password);
      print(username);

      isLoading = true; //esta cargando
      await Future.delayed(
          Duration(seconds: 3)); //vamos a esperar 3 seg para ejec td

      final response = await http.post(
        Uri.parse(
          "http://localhost:4000/api/register",
        ),
        headers: {
          'Content-Type': 'application/json'
        }, //lo que vamos a enviar al backend
        body: jsonEncode({
          "username": username,
          "email": email,
          "password": password,
        }),
      );

      print(response.body); //nos va imprimir la respuesta del backend

      isLoading = false; //va terminar la carga

      return true; //significa que todo salio bien
    } catch (e) {
      print(e);
      return false;
    }
  }
}
