import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tudespensa/provider/goal_provider.dart';

class SelectionButton extends StatelessWidget {
  const SelectionButton({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            _buildGoalOption(
              context: context,
              title: "Bajar de peso",
              imagePath: "assets/images/bajarPeso.png",
              value: "Bajar de peso",
            ),
            _buildGoalOption(
              context: context,
              title: "Subir de peso",
              imagePath: "assets/images/ganarPeso.png",
              value: "Subir de peso",
            ),
          ],
        ),
        SizedBox(height: 20),
        _buildGoalOption(
          context: context,
          title: "Mantener Peso",
          imagePath: "assets/images/mantenerPeso.png",
          value: "Mantener Peso",
        ),
      ],
    );
  }

  Widget _buildGoalOption({
    required BuildContext context,
    required String title,
    required String imagePath,
    required String value,
  }) {
    final goalProvider = Provider.of<GoalProvider>(context);
    final isSelected = goalProvider.selectedGoal == value;

    return InkWell(
      onTap: () {
        goalProvider.setSelectedGoal(value);
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
