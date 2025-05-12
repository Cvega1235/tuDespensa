import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class TopBanner extends StatelessWidget {
  const TopBanner({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return Stack(
      children: [
        Image.asset(
          'assets/images/wellcome.png',
          height: size.height * 0.4,
          width: double.infinity,
          fit: BoxFit.cover,
        ),
        Positioned.fill(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                "Tu\n" "Despensa",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 35.sp,
                ),
              ),
              SizedBox(width: 35),
              Image.asset(
                'assets/images/logo.png',
                height: 80,
                width: 80,
              )
            ],
          ),
        )
      ],
    );
  }
}
