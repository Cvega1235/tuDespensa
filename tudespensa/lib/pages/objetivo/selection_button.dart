import 'package:flutter/material.dart';

class SelectionButton extends StatefulWidget {
  const SelectionButton({super.key});

  @override
  State<SelectionButton> createState() => _SelectionButtonState();
}

class _SelectionButtonState extends State<SelectionButton> {
  String? selectedGoal;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            _buildGoalOption(
              title: "Bajar de peso",
              imagePath: "assets/images/bajarPeso.png",
              value: "lose",
            ),
            _buildGoalOption(
              title: "Subir de peso",
              imagePath: "assets/images/ganarPeso.png",
              value: "gain",
            ),
          ],
        ),
        SizedBox(height: 20),
        _buildGoalOption(
          title: "Mantener Peso",
          imagePath: "assets/images/mantenerPeso.png",
          value: "maintain",
        ),
      ],
    );
  }

  Widget _buildGoalOption({
    required String title,
    required String imagePath,
    required String value,
  }) {
    bool isSelected = selectedGoal == value;

    return InkWell(
      onTap: () {
        setState(() {
          selectedGoal = value;
        });
      },
      child: Container(
        width: 150,
        height: 150,
        decoration: BoxDecoration(
          color: isSelected ? Colors.blue.withOpacity(0.2) : Colors.transparent,
          border: Border.all(
            color: isSelected ? Colors.blue : Colors.grey,
            width: 2,
          ),
          borderRadius: BorderRadius.circular(10),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset(imagePath, width: 60, height: 60),
            SizedBox(height: 10),
            Text(
              title,
              textAlign: TextAlign.center,
              style: TextStyle(
                fontWeight: FontWeight.bold,
                color: isSelected ? Colors.blue : Colors.black,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
