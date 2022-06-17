import 'package:flutter/material.dart';
import 'package:stacked_services/stacked_services.dart';

import '../../app/app_setup.locator.dart';

class BasicDialog extends StatelessWidget{
  final DialogRequest request;
  final Function(DialogResponse) completer;
  const BasicDialog({Key? key, required this.request, required this.completer})
      : super(key: key);
  @override
  Widget build(BuildContext context){
    return Dialog(
      child: LayoutBuilder(
          builder: (context, constraints) => SizedBox(
            height: constraints.maxHeight,
            width: constraints.maxWidth,
            child: Container(
              color: Colors.white,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Material(
                    elevation: 0,
                    child: GestureDetector(
                      onTap: (){
                        locator<NavigationService>().back();
                      },
                    ),
                  ),
                  Text('Basic Dialog')
                ],
              ),
            ),
          )),
    );
  }
}
