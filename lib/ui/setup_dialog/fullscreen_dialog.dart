import 'package:flutter/material.dart';
import 'package:stacked_services/stacked_services.dart';

import '../../app/app_setup.locator.dart';
import '../../core/models/completed_model.dart';

class FullScreenDialog extends StatefulWidget {
  final DialogRequest request;
  final void Function(DialogResponse) completer;

  const FullScreenDialog(
      {Key? key, required this.request, required this.completer})
      : super(key: key);

  @override
  State<FullScreenDialog> createState() => _AppFullScreenDialog();
}

class _AppFullScreenDialog extends State<FullScreenDialog> {
  @override
  Widget build(BuildContext context) {
    CompletedModel model = widget.request.data as CompletedModel;
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
                Text(model.projectName),
                Material(
                  child: GestureDetector(
                    onTap: () {
                      locator<NavigationService>().back();
                    },
                  ),
                ),
                const Text('App FullScreen Dialog'),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
