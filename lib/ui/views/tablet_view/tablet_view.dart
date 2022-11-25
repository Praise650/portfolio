import 'package:flutter/material.dart';
import 'package:stacked/stacked.dart';

import '../../layouts/base_scaffold.dart';
import '../../layouts/base_scaffold_body.dart';
import '../../styles/color.dart';
import '../../widgets/build_header_view.dart';
import '../../widgets/completed_project_widget.dart';
import '../home_page/view_model/home_view_model.dart';

class TabletView extends StatefulWidget {
  const TabletView({Key? key}) : super(key: key);

  @override
  State<TabletView> createState() => _TabletViewState();
}

class _TabletViewState extends State<TabletView>
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
      builder: (context, model, child) => Scaffold(
        body: BaseScaffold(
          body: Row(
            children: [
              Column(
                children: [
                  Expanded(
                    child: RotatedBox(
                      quarterTurns: 3,
                      child: TabBar(
                        indicator:
                            const UnderlineTabIndicator(borderSide: BorderSide.none),
                        tabs: const [
                          Tab(
                            text: 'About Me',
                          ),
                          Tab(
                            text: 'Get In Touch',
                          ),
                          Tab(
                            text: 'Selected Works',
                          ),
                        ].reversed.toList(),
                        controller: controller,
                      ),
                    ),
                  ),
                  Expanded(
                    child: Container(
                      color: Colors.white,
                    ),
                  )
                ],
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
                                  images:
                                      model.completedProjectList[index].images,
                                  projectName: model
                                      .completedProjectList[index].projectName,
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
        ),
      ),
    );
  }
}
