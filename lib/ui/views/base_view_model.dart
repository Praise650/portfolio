import 'package:portfolio/core/models/completed_model.dart';
import 'package:stacked/stacked.dart';

import '../../../core/data/completed_projects.dart';


class BaseViewViewModel extends BaseViewModel {
  List<String> actions = ['Selected Works', 'Get In Touch', 'About Me'];
  int selectedIndex = 0;

  List<CompletedModel> completedProject = completedProjectList;

  updateIndex(int index) {
    selectedIndex = index;
    notifyListeners();
  }
}
