//import 'package:flutter/material.dart';

class Page {
  final int id;
  final String name;
  final String description;
  final String image;

  Page({
    required this.id,
    required this.name,
    required this.description,
    required this.image,
  });
}

// demo places

List<Page> demoPages = [
  Page(
      id: 1,
      name: 'Objetivo',
      description:
          'Es el apartado donde mostramos cual es tu objetivo a lograr',
      image: 'assets/images/page1.png'),
  Page(
      id: 2,
      name: 'Despensa',
      description: 'Es el apartado donde puedes agregar tu despensa',
      image: 'assets/images/page2.png'),
  Page(
      id: 3,
      name: 'Recetas',
      description:
          'Es el apartado donde puedes generar recetas personalizadas a base de tu despensa',
      image: 'assets/images/page3.png'),
];
