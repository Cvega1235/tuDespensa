import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SvgIcon extends StatelessWidget {
  final String assetName;
  final double size;
  final Color color;

  SvgIcon(this.assetName, {this.size = 24, this.color = Colors.white});

  @override
  Widget build(BuildContext context) {
    return SvgPicture.asset(
      assetName,
      width: size,
      height: size,
      color: color,
      fit: BoxFit.contain,
    );
  }
}
