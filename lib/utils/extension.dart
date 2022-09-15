import 'package:flutter/cupertino.dart';

extension CustomContext on BuildContext{
  double screenHeight(double percent) {
    return MediaQuery.of(this).size.height * (percent / 100);
  }

  double screenWidth(double percent) {
    return MediaQuery.of(this).size.width * (percent / 100);
  }
}