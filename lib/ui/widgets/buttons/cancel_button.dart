import 'package:flutter/material.dart';
import 'package:stacked_services/stacked_services.dart';

import '../../../app/app_setup.locator.dart';
import '../../styles/dimens.dart';

class CancelButton extends StatelessWidget {
  final AlignmentGeometry position;
  const CancelButton({Key? key, this.position = Alignment.centerLeft}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment:position,
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
