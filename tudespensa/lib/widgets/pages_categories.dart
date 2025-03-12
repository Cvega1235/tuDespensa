import 'package:flutter/material.dart';
import 'package:tudespensa/constants.dart';

class PagesCategories extends StatefulWidget {
  const PagesCategories({
    super.key,
  });

  @override
  State<PagesCategories> createState() => _PagesCategoriesState();
}

class _PagesCategoriesState extends State<PagesCategories> {
  int selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    List<String> pagesCategoris = [
      "Popular",
      "Featured",
      "Most Visited",
      "Europe",
      "Asia",
      "Africa",
      "America",
      "Australia"
    ];

    return Padding(
        padding: EdgeInsets.all(30),
        child: SizedBox(
            height: 25,
            child: ListView.builder(
              scrollDirection: Axis.horizontal,
              itemCount: pagesCategoris.length,
              itemBuilder: (BuildContext context, int index) {
                return GestureDetector(
                  onTap: () {
                    setState(() {
                      this.selectedIndex = index;
                    });
                  },
                  child: Padding(
                    padding: EdgeInsets.symmetric(horizontal: 20),
                    child: Text(
                      pagesCategoris[index],
                      style: TextStyle(
                        fontSize: 16,
                        color:
                            selectedIndex == index ? PrimaryColor : TextColor,
                        fontWeight: selectedIndex == index
                            ? FontWeight.bold
                            : FontWeight.normal,
                      ),
                    ),
                  ),
                );
              },
            )));
  }
}
