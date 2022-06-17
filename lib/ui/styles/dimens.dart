import 'package:flutter/material.dart';

class Dimens {
  static bool isMobile(BuildContext context)=> MediaQuery.of(context).size.width <650;
  static bool isDesktop(BuildContext context)=> MediaQuery.of(context).size.width >1100;
  static bool isTablet(BuildContext context)=> MediaQuery.of(context).size.width <1100 &&
      MediaQuery.of(context).size.width>=650;
  static const double iconSize = 24;
  static const double horizontalPadding = 20;

  static const EdgeInsets screenPadding =
  EdgeInsets.symmetric(vertical: 8.0, horizontal: 20);

  static const double inputFieldRadius = 10;
  static const double inputFieldHeight = 65;

}