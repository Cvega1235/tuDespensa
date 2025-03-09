import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tudespensa/pages/login_page.dart';
import 'package:tudespensa/provider/auth_provider.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [ChangeNotifierProvider(create: (context) => AuthProvider())],
      child: MaterialApp(
        title: 'Material App',
        home: LoginPage(),
      ),
    );
  }
}
