import 'package:flutter/material.dart';

import '../styles/decoration.dart';
import '../styles/texts.dart';
import 'buttons/base_button.dart';
import 'layout/responsive_widget.dart';

class BuildHeaderViewWidget extends StatelessWidget {
  const BuildHeaderViewWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final mobileView = ResponsiveWidget.isMobile(context);
    final desktopView = ResponsiveWidget.isMobile(context);
    final tabletView = ResponsiveWidget.isMobile(context);
    return Container(
      padding: mobileView? const EdgeInsets.symmetric(vertical: 20, horizontal: 20):const EdgeInsets.symmetric(vertical: 20, horizontal: 20),
      margin: const EdgeInsets.symmetric(horizontal: 10),
      width: double.infinity,
      decoration: desktopDecoration,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'How are you?\n'
            "My name is Praise Afuwape, and this is\nwhat I do.",
            style: kHeadline1TextStyle,
          ),
          const Padding(padding: EdgeInsets.all(10)),
          Text(
            'Welcome to my online portfolio and CV',
            style: kBody1TextStyle,
          ),
          const Padding(padding: EdgeInsets.all(10)),
          //TODO: wrap widget with flexible to check for responsiveness
          Text(
            'I am a Mobile Developer, and front end specialist from Nigeria. What started off 14 years ago as an adventure\n'
            'through wireframes and layouts, has turned into passion for front end development and game\n.'
            'design. Honing these skills has allowed my UX and UI roots to grow deeper into everything I do,\n'
            'making it all come together.',
            style: kHeadline4TextStyle,
          ),
          const Padding(padding: EdgeInsets.all(10)),
          BaseButton(
            text: 'View My Works',
            onPress: () {},
          ),
        ],
      ),
    );
  }
}
