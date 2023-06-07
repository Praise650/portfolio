import 'package:flutter/material.dart';
import 'package:portfolio/ui/layouts/base_scaffold_body.dart';
import 'package:portfolio/ui/widgets/section_widget.dart';

import '../../widgets/build_header_view.dart';
import '../../widgets/selected_project_widget.dart';

class PortfolioBody extends StatelessWidget {
  const PortfolioBody({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const BuildHeaderViewWidget(),
        const SizedBox(height: 20),
        SectionWidget(title: "Selected Works",body: Container(),),
        SectionWidget(title: "Get In Touch",body: Container(),),
        SectionWidget(title: "About Me",body: Container(),),

        // Column(
        //   // physics: const NeverScrollableScrollPhysics(),
        //   // shrinkWrap: true,
        //   children: List.generate(
        //       model.completedProject.length,
        //           (index) => SelectedProjectWidget(
        //         images:
        //         model.completedProject[index].images,
        //         projectName: model
        //             .completedProject[index].projectName,
        //         projectShortDesc: model
        //             .completedProject[index]
        //             .projectShortDesc,
        //         roleTaken: model
        //             .completedProject[index].roleTaken,
        //         model: model.completedProject[index],
        //       )),
        // )
      ],
    );
  }
}
