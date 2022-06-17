// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// StackedDialogGenerator
// **************************************************************************

import 'package:stacked_services/stacked_services.dart';

import '../ui/setup_dialog/fullscreen_dialog.dart';
import '../ui/setup_dialog/basic_dialog.dart';
import 'app_setup.locator.dart';

enum DialogType {
  appFullScreenDialog,
  basicDialog
}

void setupDialogUi() {
  var dialogService = locator<DialogService>();

  final builders = {
    DialogType.appFullScreenDialog: (context, DialogRequest request,
            void Function(DialogResponse) completer) =>
        FullScreenDialog(request: request, completer: completer),
    DialogType.basicDialog: (context, DialogRequest request,
        void Function(DialogResponse) completer) =>
        BasicDialog(request: request, completer: completer),
  };

  dialogService.registerCustomDialogBuilders(builders);
}
