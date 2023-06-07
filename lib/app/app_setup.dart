import 'package:stacked/stacked_annotations.dart';
import 'package:stacked_services/stacked_services.dart';

import '../ui/setup_dialog/fullscreen_dialog.dart';
import '../ui/views/site_layout/site_layout.dart';

@StackedApp(
  routes: [
    MaterialRoute(page: SiteLayout,initial: true),
  ],
  dialogs: [
    StackedDialog(classType: FullScreenDialog)
  ],
  dependencies: [
    LazySingleton(classType: BottomSheetService),
    LazySingleton(classType: NavigationService),
    LazySingleton(classType: DialogService)
  ],
)

class AppSetup{}