import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:portfolio/ui/styles/dimens.dart';
import 'package:portfolio/ui/styles/texts.dart';
import 'package:stacked_services/stacked_services.dart';

import '../../app/app_setup.locator.dart';
import '../views/completed_project_details_desc_view.dart';
import '../views/home_page/view_model/home_viewmodel.dart';

class CompletedProjectWidget extends StatelessWidget {
  final CompletedModel? model;
  final String projectName;
  final String roleTaken;
  final String projectShortDesc;
  final List<String> images;
  bool isHovering = false;

  CompletedProjectWidget(
      {Key? key,
      required this.projectName,
      required this.roleTaken,
      required this.projectShortDesc,
      required this.images,
      this.model})
      : super(key: key);
  final service = locator<NavigationService>();

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          CarouselSlider(
            items: images.map((e) => Image.asset(e)).toList(),
            options: CarouselOptions(
              height: 300,
              aspectRatio: 1,
              enlargeCenterPage: true,
              enlargeStrategy: CenterPageEnlargeStrategy.scale,
              viewportFraction: 0.30,
            ),
          ),
          const SizedBox(height: 30),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                projectName,
                style: kHeadline3TextStyle,
              ),
              Text(
                roleTaken,
                style: kBody1TextStyle,
              ),
              const SizedBox(height: 10),
              Text(
                projectShortDesc,
                style: kBody1TextStyle,
              ),
            ],
          ),
          TextButton.icon(
            onPressed: () {
              service.navigateToView(
                CompletedProjectDetailsDescView(model: model!),
                // fullscreenDialog: true,
              );
            },
            icon: Text('More About This Project'.toUpperCase()),
            label: const Icon(
              Icons.arrow_forward_sharp,
              size: Dimens.iconSize,
            ),
            onHover: (onHover) {
              isHovering = onHover;
            },
          ),
        ],
      ),
    );
  }
}
