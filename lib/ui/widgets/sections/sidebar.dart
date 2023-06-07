import 'package:flutter/material.dart';
import 'package:stacked/stacked.dart';

import '../../styles/color.dart';
import '../../views/base_view_model.dart';

class Sidebar extends ViewModelWidget<BaseViewViewModel> {
  const Sidebar({Key? key,this.controller}) : super(key: key);

  final TabController? controller;

  @override
  Widget build(BuildContext context,viewModel) {
    return Row(
        children: [
          Column(
            children: [
              Expanded(
                child: RotatedBox(
                  quarterTurns: 3,
                  child: TabBar(
                    indicator: const UnderlineTabIndicator(
                        borderSide: BorderSide.none),
                    tabs:
                        viewModel.actions.map((e) => Tab(text: e)).toList(),
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
          VerticalDivider(color: AppColor.primarySwatch.shade50),
        ],
      );
  }
}
