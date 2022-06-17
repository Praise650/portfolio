import 'package:flutter/material.dart';

import '../views/home_page/view_model/home_viewmodel.dart';

class NormalFlutterDialog extends StatelessWidget {
  final CompletedModel model;
  const NormalFlutterDialog({Key? key, required this.model}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          Text(model.projectName)
        ],
      ),
    );
  }
}
