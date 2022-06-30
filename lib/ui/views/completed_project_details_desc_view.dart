import 'package:flutter/material.dart';
import 'package:portfolio/ui/layouts/base_scaffold.dart';
import 'package:portfolio/ui/styles/dimens.dart';
import 'package:portfolio/ui/widgets/buttons/cancel_button.dart';
import 'package:stacked_services/stacked_services.dart';

import '../../app/app_setup.locator.dart';
import 'home_page/view_model/home_viewmodel.dart';

class CompletedProjectDetailsDescView extends StatelessWidget {
  final CompletedModel model;
  const CompletedProjectDetailsDescView({Key? key, required this.model}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BaseScaffold(
      body: SingleChildScrollView(
        child: Column(
          children: [
            const CancelButton(),
            Text(model.projectName)
          ],
        ),
      ),
    );
  }
}
