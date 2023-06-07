import 'package:flutter/material.dart';
import 'package:portfolio/ui/layouts/base_scaffold.dart';
import 'package:portfolio/ui/widgets/layout/responsive_widget.dart';
import 'package:portfolio/ui/widgets/buttons/cancel_button.dart';

import '../../../core/models/completed_model.dart';


class ProjectDetailsView extends StatelessWidget {
  final CompletedModel model;

  const ProjectDetailsView({Key? key, required this.model})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BaseScaffold(
      body: Column(
        children: [
          displayCancelButton(),
          Text(model.projectName),
          Column(
            children:
                List.generate(30, (index) => Text('${2 + index}')).toList(),
          ),
        ],
      ),
    );
  }
}

Widget displayCancelButton() {
  return Builder(
    builder: (context) {
      if (ResponsiveWidget.isMobile(context) == true) {
        return const CancelButton(position: Alignment.centerRight);
      } else if (ResponsiveWidget.isDesktop(context) ||
          ResponsiveWidget.isTablet(context) == true) {
        return const CancelButton(
          position: Alignment.centerLeft,
        );
      } else {
        return const CancelButton();
      }
    },
  );
}
