import 'package:flutter/material.dart';
import 'package:stacked_services/stacked_services.dart';

import 'app/app_setup.dialog.dart';
import 'app/app_setup.locator.dart';
import 'ui/views/site_layout/site_layout.dart';

void main() {
  setupLocator();
  setupDialogUi();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Praise Afuwape',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const SiteLayout(),
      navigatorKey: StackedService.navigatorKey,
      // onGenerateRoute: Stacker,
    );
  }
}

