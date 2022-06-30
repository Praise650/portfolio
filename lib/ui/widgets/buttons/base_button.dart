import 'package:flutter/material.dart';
import 'package:portfolio/ui/styles/color.dart';

import '../../styles/texts.dart';

class BaseButton extends StatelessWidget {
  final Function()? onPress;
  final String? text;
  final Widget? child;
  final bool disabled;
  final bool isBusy;

  const BaseButton({
    Key? key,
    this.onPress,
    this.text,
    this.child,
    this.disabled = false,
    this.isBusy = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Material(
      elevation: 0,
      color: AppColor.primarySwatch.shade600,
      child: Container(
        margin: EdgeInsets.all(15.0),
        child: GestureDetector(
          onTap: disabled ? null : onPress,
          child: isBusy?CircularProgressIndicator(
            color: AppColor.primarySwatch.shade50,
          ): getChild(),
        ),
      ),
    );
  }

  Widget getChild() {
    if (text != null) {
      return Text(
        text!.toUpperCase(),
        style: kButtonStyle,
      );
    } else {
      return child!;
    }
  }
}
