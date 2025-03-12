import 'package:flutter/material.dart';
import 'package:tudespensa/Models/Pages.dart';
import 'package:tudespensa/util.dart';
//import 'package:tudespensa/constants.dart';
//import 'package:flutter_svg/svg.dart';
//import 'package:tudespensa/constants.dart';
import 'package:tudespensa/widgets/app_bar.dart';
import 'package:tudespensa/widgets/bottom_nav_bar.dart';
import 'package:tudespensa/widgets/despensa_menu.dart';
import 'package:tudespensa/widgets/pages_categories.dart';
import 'package:tudespensa/widgets/user_avatar.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBody: true,
      appBar: buildAppBar(
        context,
        title: 'Discover',
        leading: DespensaMenu(),
        actions: [UserAvatar()],
      ),
      backgroundColor: Colors.white,
      bottomNavigationBar: BottomNavBar(),
      body: SingleChildScrollView(
        child: Column(
          children: [
            PagesCategories(),
            SizedBox(
              width: double.infinity,
              height: 260,
              child: Column(
                children: [
                  Expanded(
                    flex: 3,
                    child: PageView.builder(
                      onPageChanged: (value) {},
                      controller:
                          PageController(viewportFraction: 0.8, initialPage: 0),
                      //aca podemos poner un codigo que llame a un modelo de las comidas, el codigo es ItemCount: demoPlace.length,
                      //para eso debemos importar import 'package:travel_app/Models/Place.dart';
                      itemCount: demoPages.length,
                      itemBuilder: (context, index) => Container(
                        margin: EdgeInsets.only(right: 30),
                        width: double.infinity,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(15),
                          image: DecorationImage(
                            image: AssetImage(demoPages[index].image),
                            fit: BoxFit.cover,
                          ),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Container(
                              width: double.infinity,
                              height: 80,
                              padding: EdgeInsets.symmetric(
                                  horizontal: 20, vertical: 5),
                              decoration: cardInfoDecoration,
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Row(
                                    children: [
                                      Text(
                                        demoPages[index].name,
                                        style: TextStyle(
                                          color: Colors.white,
                                          fontSize: 20,
                                          fontWeight: FontWeight.w700,
                                        ),
                                      ),
                                    ],
                                  )
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
