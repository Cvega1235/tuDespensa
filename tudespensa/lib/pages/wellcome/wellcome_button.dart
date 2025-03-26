import 'package:flutter/material.dart';
//import 'package:tudespensa/constants.dart';

class WellcomeButton extends StatelessWidget {
  const WellcomeButton({
    super.key,
    required this.tapEvent,
    required this.title,
    required this.color,
    required this.textColor,
  });

  final GestureTapCallback tapEvent;
  final String title;
  final Color color;
  final Color textColor;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: tapEvent,
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.all(Radius.circular(50)),
          color: color,
        ),
        width: 135,
        height: 50,
        child: Padding(
          padding: EdgeInsets.all(10),
          child: Text(
            title,
            textAlign: TextAlign.center,
            style: TextStyle(
              color: textColor,
              fontSize: 14,
            ),
          ),
        ),
      ),
    );
  }
}
