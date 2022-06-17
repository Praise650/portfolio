import 'package:stacked/stacked_annotations.dart';
import 'package:stacked_services/stacked_services.dart';

import '../ui/setup_dialog/fullscreen_dialog.dart';
@StackedApp(
  // routes: [MaterialRoute(page: VerifyOTP)],
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