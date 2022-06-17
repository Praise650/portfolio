import 'package:flutter/material.dart';
import '../styles/color.dart';

class BaseScaffold extends StatelessWidget {
  final double elevation;
  final bool showBackBtn;

  const BaseScaffold({
    Key? key,
    this.body,
    this.backButtonAction,
    // required this.titleText,
    this.bottomNavigationBar,
    this.floatingActionButton,
    this.backgroundColor = AppColor.scaffoldBgColor,
    this.showBackBtn = false,
    this.floatingActionButtonLocation,
    this.bottom,
    this.elevation = 0,
  }) : super(key: key);

  final Widget? body;
  // final String titleText;
  final PreferredSizeWidget? bottom;
  final Function()? backButtonAction;
  final Widget? bottomNavigationBar;
  final Widget? floatingActionButton;
  final Color? backgroundColor;
  final FloatingActionButtonLocation? floatingActionButtonLocation;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: true,
      backgroundColor: backgroundColor,
      // appBar: getAppBar(),
      body: body,
      floatingActionButton: floatingActionButton,
      bottomNavigationBar: bottomNavigationBar,
      floatingActionButtonLocation: floatingActionButtonLocation ??
          FloatingActionButtonLocation.centerDocked,
    );
  }

  // PreferredSizeWidget getAppBar() {
  //   if (showBackBtn) {
  //     return CustomAppBar(
  //       backIconSvg: AppSvgs.back,
  //       titleText: titleText,
  //       bottom: bottom,
  //       customBackBtnAction: backButtonAction,
  //     );
  //   } else {
  //     return AppBar(
  //         elevation: elevation,
  //         backgroundColor: Colors.white,
  //         automaticallyImplyLeading: false,
  //         centerTitle: true,
  //         leading: null,
  //         title: Text(
  //           titleText,
  //           style: kAppBarTitleTextStyle,
  //         ),
  //         bottom: bottom);
  //   }
  // }
}