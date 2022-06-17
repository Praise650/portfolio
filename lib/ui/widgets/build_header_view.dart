import 'package:flutter/material.dart';
import 'package:portfolio/app/app_setup.dialog.dart';
import 'package:stacked_services/stacked_services.dart';

import '../../app/app_setup.locator.dart';
import '../styles/decoration.dart';
import '../styles/texts.dart';
import '../views/home_page/view_model/home_viewmodel.dart';
import 'base_button.dart';

class BuildHeader extends StatelessWidget {
  BuildHeader({Key? key, this.model}) : super(key: key);
  // final service = locator<NavigationService>();
  final CompletedModel? model;
  final dialog = locator<DialogService>();
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.only(
        left: 20,
        top: 20,
        bottom: 20,
      ),
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
            onPress: () async{
              await dialog.showCustomDialog(
              variant: DialogType.basicDialog,
              data: model,
              barrierDismissible: true);
            },
          ),
        ],
      ),
    );
  }
}
