import 'package:flutter/material.dart';
import '../../site_layout/portfolio_body.dart';

class TabletView extends StatefulWidget {
  const TabletView({Key? key}) : super(key: key);

  @override
  State<TabletView> createState() => _TabletViewState();
}

class _TabletViewState extends State<TabletView> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: const [
        PortfolioBody(),
      ],
    );
  }
}
