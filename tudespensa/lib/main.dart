import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tudespensa/constants.dart';
//import 'package:tudespensa/pages/login_page.dart';
import 'package:tudespensa/pages/wellcome/wellcome_page.dart';
import 'package:tudespensa/provider/auth_provider.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [ChangeNotifierProvider(create: (context) => AuthProvider())],
      child: ScreenUtilInit(
        designSize: const Size(430, 932),
        builder: (context, child) => MaterialApp(
          title: 'Material App',
          debugShowCheckedModeBanner: false,
          theme: ThemeData(
            primaryColor: BackgroundColor,
            scaffoldBackgroundColor: BackgroundColor,
          ),
          home: WellcomePage(),
        ),
      ),
    );
  }
}
