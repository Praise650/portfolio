import 'package:flutter/material.dart';

class GeneralInput extends StatefulWidget {
  TextEditingController? controller = TextEditingController();
  final String? hintText;
  final String? labelText;
  final String? errorText;
  final String Function(String?)? onChanged;

  GeneralInput({
    Key? key,
    this.controller,
    required this.hintText,
    this.labelText,
    this.errorText, this.onChanged,
  }) : super(key: key);

  @override
  State<GeneralInput> createState() => _GeneralInputState();
}

class _GeneralInputState extends State<GeneralInput> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: TextFormField(
        controller: widget.controller,
        decoration: InputDecoration(
          hintText: widget.hintText,
          errorText: widget.errorText,
          labelText: widget.labelText,
        ),
        onChanged: widget.onChanged,
        //     (String value) {
        //   setState(() => widget.controller?.text = value);
        // },
        validator: (value) {
          if(value!.isEmpty){
            return 'This field cannot be empty';
          }
          return null;
        },
      ),
    );
  }
}
