import 'package:flutter/material.dart';

import '../../site_layout/portfolio_body.dart';

class MobileView extends StatefulWidget {
  const MobileView({Key? key}) : super(key: key);

  @override
  State<MobileView> createState() => _MobileViewState();
}

class _MobileViewState extends State<MobileView> {
  // int selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      // color: Colors.red,
      children: const [
        PortfolioBody(),
      ],
    );
  }
}
