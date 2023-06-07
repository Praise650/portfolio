import 'package:flutter/material.dart';
import 'package:stacked/stacked.dart';

import '../../views/base_view_model.dart';

class Footer extends ViewModelWidget<BaseViewViewModel> {
  const Footer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context,viewModel) {
    return BottomNavigationBar(
      items: viewModel.actions
          .map((e) => BottomNavigationBarItem(
          icon: const Icon(Icons.edit_calendar), label: e))
          .toList(),
      onTap: (int index) => viewModel.updateIndex(index),
      elevation: 5,
      currentIndex: viewModel.selectedIndex,
    );
  }
}
