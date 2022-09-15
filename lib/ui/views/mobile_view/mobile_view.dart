import 'package:flutter/material.dart';
import 'package:portfolio/ui/layouts/base_scaffold.dart';
import 'package:portfolio/ui/layouts/base_scaffold_body.dart';
import 'package:portfolio/ui/widgets/build_header_view.dart';
import 'package:stacked/stacked.dart';

import '../../widgets/completed_project_widget.dart';
import '../home_page/view_model/home_viewmodel.dart';

class MobileView extends StatefulWidget {
  const MobileView({Key? key}) : super(key: key);

  @override
  State<MobileView> createState() => _MobileViewState();
}

class _MobileViewState extends State<MobileView> {
  int selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<HomeViewModel>.reactive(
        viewModelBuilder: () => HomeViewModel(),
        builder: (context, model, _) {
          return BaseScaffold(
            body: BaseScaffoldBody(
              child: Column(
                // color: Colors.red,
                children: [
                  const BuildHeader(),
                  const SizedBox(height: 20),
                  Column(
                    // physics: const NeverScrollableScrollPhysics(),
                    // shrinkWrap: true,
                    children: List.generate(
                        model.completedProjectList.length,
                        (index) => CompletedProjectWidget(
                              images: model.completedProjectList[index].images,
                              projectName:
                                  model.completedProjectList[index].projectName,
                              projectShortDesc: model
                                  .completedProjectList[index].projectShortDesc,
                              roleTaken:
                                  model.completedProjectList[index].roleTaken,
                              model: model.completedProjectList[index],
                            )),
                  )
                ],
              ),
            ),
            bottomNavigationBar: BottomNavigationBar(
              items: [
                'Selected Works',
                'Get In Touch',
                'About Me',
              ]
                  .map((e) => BottomNavigationBarItem(
                        icon: const Icon(Icons.edit_calendar),
                        label: e,
                      ))
                  .toList(),
              onTap: (int index) {
                setState(() => selectedIndex = index);
              },
              elevation: 5,
              currentIndex: selectedIndex,
            ),
          );
        });
  }
}
