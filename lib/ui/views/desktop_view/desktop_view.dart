import 'package:flutter/material.dart';
import 'package:portfolio/ui/layouts/base_scaffold.dart';
import 'package:portfolio/ui/layouts/base_scaffold_body.dart';
import 'package:portfolio/ui/styles/color.dart';
import 'package:portfolio/ui/views/home_page/view_model/home_viewmodel.dart';
import 'package:stacked/stacked.dart';

import '../../widgets/build_header_view.dart';
import '../../widgets/completed_project_widget.dart';

class DesktopView extends StatefulWidget {
  const DesktopView({Key? key}) : super(key: key);

  @override
  State<DesktopView> createState() => _DesktopViewState();
}

class _DesktopViewState extends State<DesktopView>
    with SingleTickerProviderStateMixin {
  late TabController controller;

  @override
  void initState() {
    super.initState();
    controller = TabController(length: 3, vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<HomeViewModel>.reactive(
        viewModelBuilder: () => HomeViewModel(),
        builder: (context, model, _) {
          return BaseScaffold(
            body: Row(
              children: [
                RotatedBox(
                  quarterTurns: 3,
                  child: TabBar(
                    indicator: const UnderlineTabIndicator(
                      borderSide: BorderSide.none
                    ),
                    tabs: const [
                    Tab(text: 'About Me',),
                    Tab(text: 'Get In Touch',),
                    Tab(text: 'Selected Works',),
                  ].reversed.toList(),
                  controller: controller,
                  ),
                ),
                // RotatedBox(
                //   quarterTurns: 3,
                //   child: Row(
                //     mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                //     children: [
                //       Text(
                //         'Get In Touch',
                //         style: kHeadline4TextStyle,
                //       ),
                //       Text(
                //         'About Me',
                //         style: kHeadline4TextStyle,
                //       ),
                //       Text(
                //         'Selected Works',
                //         style: kHeadline4TextStyle,
                //       ),
                //     ],
                //   ),
                // ),
                VerticalDivider(color: AppColor.primarySwatch.shade50),
                Expanded(
                  child: BaseScaffoldBody(
                    child: Column(
                      children: [
                        const BuildHeader(),
                        const SizedBox(height: 20),
                        Column(
                          // physics: const NeverScrollableScrollPhysics(),
                          // shrinkWrap: true,
                          children: List.generate(
                              model.completedProjectList.length,
                              (index) => CompletedProjectWidget(
                                    images: model
                                        .completedProjectList[index].images,
                                    projectName: model
                                        .completedProjectList[index]
                                        .projectName,
                                    projectShortDesc: model
                                        .completedProjectList[index]
                                        .projectShortDesc,
                                    roleTaken: model
                                        .completedProjectList[index].roleTaken,
                                    model: model.completedProjectList[index],
                                  )),
                        )
                      ],
                    ),
                  ),
                ),
              ],
            ),
          );
        });
  }
}
