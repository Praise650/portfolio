import 'package:flutter/material.dart';
import 'package:stacked_services/stacked_services.dart';

import '../../app/app_setup.locator.dart';
import '../views/home_page/view_model/home_viewmodel.dart';

class BasicDialog extends StatelessWidget{
  final DialogRequest request;
  final Function(DialogResponse) completer;
  const BasicDialog({Key? key, required this.request, required this.completer})
      : super(key: key);
  @override
  Widget build(BuildContext context){
    final CompletedModel model = request.data as CompletedModel;
    return Dialog(
      child: LayoutBuilder(
          builder: (context, constraints) => SizedBox(
            height: constraints.maxHeight,
            width: constraints.maxWidth,
            child: Expanded(
              child: Container(
                color: Colors.blue,
                child: SingleChildScrollView(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(model.projectShortDesc),
                      Material(
                        elevation: 0,
                        child: GestureDetector(
                          onTap: (){
                            locator<NavigationService>().back();
                          },
                        ),
                      ),
                      Text('Basic Dialog',style: TextStyle(
                        fontSize: 50
                      ),)
                    ],
                  ),
                ),
              ),
            ),
          )),
    );
  }
}
