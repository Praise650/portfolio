import 'package:flutter/material.dart';
import 'package:stacked_services/stacked_services.dart';

import '../../../app/app_setup.locator.dart';
import '../../styles/dimens.dart';

class CancelButton extends StatelessWidget {
  const CancelButton({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.centerLeft,
      child: Material(
        elevation: 0,
        color: Colors.transparent,
        child: GestureDetector(
          onTap: (){
            locator<NavigationService>().back();
          },
          child: const Icon(
            Icons.close,
            size: Dimens.iconSize,
            color: Colors.white,
          ),
        ),
      ),
    );
  }
}
