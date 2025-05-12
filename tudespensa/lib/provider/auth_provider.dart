import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
//import 'package:jwt_decoder/jwt_decoder.dart';

class AuthProvider extends ChangeNotifier {
  final String baseUrl =
      'http://localhost:4000/api'; // cambia esto según el entorno

  bool _isLoading = false;
  bool get isLoading => _isLoading;

  String? _username;
  String? get username => _username;

  void setLoading(bool value) {
    _isLoading = value;

    notifyListeners();
  }

  // ======== TOKEN ========
  Future<void> saveToken(String token) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('auth_token', token);
  }

  Future<String?> getToken() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString('auth_token');
  }

  // ======== REGISTRO ========
  Future<bool> requestRegisterCode(String email) async {
    try {
      setLoading(true);
      final res = await http.post(
        Uri.parse('$baseUrl/register/request-code'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({"email": email}),
      );
      setLoading(false);

      final data = jsonDecode(res.body);
      if (res.statusCode == 200) {
        print("Código enviado");
        return true;
      } else {
        print(data['message']);
        return false;
      }
    } catch (e) {
      print('Error en requestRegisterCode: $e');
      setLoading(false);
      return false;
    }
  }

  Future<bool> verifyRegisterCode({
    required String email,
    required String codigo,
    required String password,
    required String username,
  }) async {
    try {
      setLoading(true);
      final res = await http.post(
        Uri.parse('$baseUrl/register/verify-code'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          "email": email,
          "codigo": codigo,
          "password": password,
          "nombre": username,
        }),
      );
      setLoading(false);

      final data = jsonDecode(res.body);
      if (res.statusCode == 200) {
        print("Usuario registrado y autenticado");
        final token = data['token'];
        await saveToken(token);
        return true;
      } else {
        print(data['message']);
        return false;
      }
    } catch (e) {
      print('Error en verifyRegisterCode: $e');
      setLoading(false);
      return false;
    }
  }

  // ======== LOGIN ========
  Future<bool> requestLoginCode(String email) async {
    try {
      setLoading(true);
      final res = await http.post(
        Uri.parse('$baseUrl/login-mobile/request-code'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({"email": email}),
      );
      setLoading(false);

      final data = jsonDecode(res.body);
      if (res.statusCode == 200) {
        print("Código enviado para login");
        return true;
      } else {
        print(data['message']);
        return false;
      }
    } catch (e) {
      print('Error en requestLoginCode: $e');
      setLoading(false);
      return false;
    }
  }

  Future<bool> verifyLoginCode({
    required String email,
    required String codigo,
    required String password,
  }) async {
    try {
      setLoading(true);
      final res = await http.post(
        Uri.parse('$baseUrl/login-mobile/verify-code'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          "email": email,
          "verificationCode": codigo,
          "password": password,
        }),
      );
      setLoading(false);

      final data = jsonDecode(res.body);
      if (res.statusCode == 200) {
        print("Login exitoso");
        final token = data['token'];
        await saveToken(token);
        await loadCurrentUser(); // <=== IMPORTANTE
        return true;
      } else {
        print(data['message']);
        return false;
      }
    } catch (e) {
      print('Error en verifyLoginCode: $e');
      setLoading(false);
      return false;
    }
  }

  // ======== NOMBRE DEL USUARIO ========
  Future<Map<String, dynamic>?> getCurrentUser() async {
    try {
      final token = await getToken();
      if (token == null) return null;

      final res = await http.get(
        Uri.parse('$baseUrl/user'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
      );

      final data = jsonDecode(res.body);
      if (res.statusCode == 200) {
        print("Usuario actual: $data");
        return data; // esto es el usuario con _id, email, nombre
      } else {
        print("Error al obtener usuario: ${data['message']}");
        return null;
      }
    } catch (e) {
      print("Error en getCurrentUser: $e");
      return null;
    }
  }

  Future<void> loadCurrentUser() async {
    final userData = await getCurrentUser();
    if (userData != null && userData.containsKey('nombre')) {
      _username = userData['nombre'];
      notifyListeners();
    }
  }
}
