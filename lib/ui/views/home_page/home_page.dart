import 'package:flutter/material.dart';
import 'package:portfolio/ui/views/desktop_view/desktop_view.dart';
import 'package:portfolio/ui/views/mobile_view/mobile_view.dart';
import 'package:portfolio/ui/views/responsive_view.dart';
import 'package:portfolio/ui/views/tablet_view/tablet_view.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return const ResponsiveView(
      mobile: MobileView(),
      tablet: TabletView(),
      desktop: DesktopView(),
    );
  }
}
