import 'package:flutter/material.dart';

class AppColor {
  static const int primaryColorValue = 0xFF2255FF;

  static Color error = Color(0xFFE52836);
  static Color warning = Color(0xFFF6A609);
  static Color success = Color(0xFF2AC769);
  static const Color primary = Color(primaryColorValue);

  static const MaterialColor primarySwatch = MaterialColor(
    primaryColorValue,
    <int, Color>{
      50: Color(0xFFeaebff),
      100: Color(0xFFc9ccff),
      200: Color(0xFFa4abff),
      300: Color(0xFF7a89ff),
      400: Color(0xFF576cff),
      500: Color(primaryColorValue),
      600: Color(0xFF2a45f3),
      700: Color(0xFF1c39e6),
      800: Color(0xFF0a2bdb),
      900: Color(0xFF0006cb),
    },
  );

  static const int secondaryColorValue = 0xFFfe337a;

  static const MaterialColor secondarySwatch = MaterialColor(
    secondaryColorValue,
    <int, Color>{
      50: Color(0xFFffe4ec),
      100: Color(0xFFffbbd1),
      200: Color(0xFFff8eb2),
      300: Color(0xFFff5d93),
      400: Color(secondaryColorValue),
      500: Color(0xFFfd0062),
      600: Color(0xFFec005f),
      700: Color(0xFFd6005b),
      800: Color(0xFFc10059),
      900: Color(0xFF9b0053),
    },
  );

  static const Color scaffoldBgColor = Colors.black;
  static const Color appBtnColor = Colors.white;

  static Color primaryBtnBg = primarySwatch;
  static const Color primaryAltBtnBg = Color(0xFFF4F6FF);
  static const Color secondaryAltBtnBg = Color(0xFFDFE1FB);
  static const Color secondaryIconBtnBg = Color(0xFFEDF0FF);
  static const Color textPrimary = Color(0xFFFFFFFF);
  static const Color textSecondary = Color(0xFFFFFFFF);


}