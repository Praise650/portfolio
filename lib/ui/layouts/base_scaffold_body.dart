import 'package:flutter/material.dart';

import '../styles/dimens.dart';

class BaseScaffoldBody extends StatelessWidget {
  final Widget child;

  const BaseScaffoldBody({Key? key, required this.child}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: Dimens.screenPadding,
      child: LayoutBuilder(builder: (context, constraint) {
        return ConstrainedBox(
          constraints: BoxConstraints(minHeight: constraint.maxHeight),
          child: SingleChildScrollView(
            child: IntrinsicHeight(
              child: child,
            ),
          ),
        );
      }),
    );
  }
}