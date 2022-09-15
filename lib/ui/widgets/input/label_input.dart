import 'package:flutter/material.dart';
import 'package:portfolio/ui/styles/texts.dart';
import 'package:portfolio/ui/widgets/input/general_input.dart';

class LabeledInput extends StatefulWidget {
  final String hintText;
  final String labelText;
  TextEditingController controller;

  LabeledInput(
      {Key? key,
      required this.controller,
      required this.hintText,
      required this.labelText})
      : super(key: key);

  @override
  State<LabeledInput> createState() => _LabeledInputState();
}

class _LabeledInputState extends State<LabeledInput> {
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          widget.labelText,
          style: kHeadline4TextStyle,
        ),
        const SizedBox(height: 15),
        GeneralInput(
          hintText: widget.hintText,
        ),
        const SizedBox(height: 15),
      ],
    );
  }
}
