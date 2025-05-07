import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart'; // ✅ Responsividad
import 'package:tudespensa/constants.dart';
import 'package:tudespensa/pages/login/login_request_page.dart';
import 'package:tudespensa/pages/register/register_request_page.dart';
import 'package:tudespensa/pages/wellcome/top_banner.dart';
import 'package:tudespensa/pages/wellcome/wellcome_button.dart';

class WellcomePage extends StatelessWidget {
  const WellcomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            TopBanner(),
            SizedBox(height: 20.h), // ✅ Responsivo
            Container(
              padding: EdgeInsets.all(38.w), // ✅ Responsivo
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  SizedBox(height: 15.h),
                  Text(
                    "Cocina fácil, come inteligente",
                    style: TextStyle(
                      fontSize: 20.sp, // ✅ Responsivo
                      fontWeight: FontWeight.w700,
                      color: Colors.black,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  SizedBox(height: 25.h),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      WellcomeButton(
                        title: "Registrarse",
                        textColor: Colors.black,
                        color: Naranja,
                        tapEvent: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => RegisterRequestPage(),
                            ),
                          );
                        },
                      ),
                      SizedBox(width: 10.w),
                      WellcomeButton(
                        title: "Iniciar sesión",
                        textColor: Colors.white,
                        color: Verde,
                        tapEvent: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => LoginRequestPage(),
                            ),
                          );
                        },
                      ),
                    ],
                  ),
                  SizedBox(height: 20.h),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        "Los Kollingas",
                        style: TextStyle(fontSize: 14.sp), // ✅ Responsivo
                      ),
                      SizedBox(width: 15.w),
                      Image.asset(
                        "assets/images/logo_empresa.png",
                        height: 45.h,
                        width: 45.w,
                      )
                    ],
                  )
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
