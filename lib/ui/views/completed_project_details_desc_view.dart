import 'package:flutter/material.dart';
import 'package:portfolio/ui/layouts/base_scaffold.dart';
import 'package:portfolio/ui/views/responsive_view.dart';
import 'package:portfolio/ui/widgets/buttons/cancel_button.dart';

import 'home_page/view_model/home_view_model.dart';

class CompletedProjectDetailsDescView extends StatelessWidget {
  final CompletedModel model;

  const CompletedProjectDetailsDescView({Key? key, required this.model})
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
      if (ResponsiveView.isMobile(context) == true) {
        return const CancelButton(position: Alignment.centerRight);
      } else if (ResponsiveView.isDesktop(context) ||
          ResponsiveView.isTablet(context) == true) {
        return const CancelButton(
          position: Alignment.centerLeft,
        );
      } else {
        return const CancelButton();
      }
    },
  );
}
