import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:tudespensa/constants.dart';

class BottomNavBar extends StatelessWidget {
  const BottomNavBar({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 75,
      margin: EdgeInsets.all(15),
      padding: EdgeInsets.symmetric(horizontal: 40),
      decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(50),
          color: Colors.transparent,
          boxShadow: [
            BoxShadow(
                blurRadius: 20,
                offset: const Offset(0, 3),
                color: Colors.black.withAlpha(20))
          ]),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          NavItem(
            icon: 'assets/icons/home.svg',
            isActive: true,
          ),
          NavItem(
            icon: 'assets/icons/calendar.svg',
            isActive: false,
          ),
          NavItem(
            icon: 'assets/icons/search.svg',
            isActive: false,
          ),
          NavItem(
            icon: 'assets/icons/user.svg',
            isActive: false,
          )
        ],
      ),
    );
  }
}

class NavItem extends StatelessWidget {
  const NavItem({
    super.key,
    required this.icon,
    required this.isActive,
  });

  final String icon;
  final bool isActive;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Spacer(),
        IconButton(
          onPressed: () {},
          icon: SvgPicture.asset(icon),
          color: Colors.black,
        ),
        Spacer(),
        Container(
          height: 4,
          width: 35,
          decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              color: isActive ? PrimaryColor : Colors.transparent,
              boxShadow: [
                BoxShadow(
                  blurRadius: 6,
                  offset: const Offset(0, -2),
                  color: isActive ? PrimaryColor : Colors.transparent,
                )
              ]),
        )
      ],
    );
  }
}
