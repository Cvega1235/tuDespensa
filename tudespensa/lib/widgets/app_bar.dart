import 'package:flutter/material.dart';
import 'package:tudespensa/constants.dart';

AppBar buildAppBar(BuildContext context,
    {required String title,
    required List<Widget> actions,
    required Widget leading}) {
  return AppBar(
    backgroundColor: Colors.transparent,
    elevation: 0,
    title: Text(
      title,
      style: TextStyle(
        color: TextColor,
        fontSize: 27,
      ),
    ),
    leading: leading,
    actions: actions,
  );
}
