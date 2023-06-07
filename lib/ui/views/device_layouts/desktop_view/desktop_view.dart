import 'package:flutter/material.dart';
import '../../site_layout/portfolio_body.dart';

class DesktopView extends StatefulWidget {
  const DesktopView({Key? key}) : super(key: key);

  @override
  State<DesktopView> createState() => _DesktopViewState();
}

class _DesktopViewState extends State<DesktopView> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: const [
        PortfolioBody(),
      ],
    );
  }
}
