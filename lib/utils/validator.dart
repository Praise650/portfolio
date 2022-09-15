import 'package:flutter/cupertino.dart';

class Validator extends ChangeNotifier {
  final String? value;
  final String? error;

  Validator(this.value, this.error,);

  static verifyField(String value,[String? param,String? paramTwo]){
    if(value.isEmpty){
      param = Validator(value, null) as String?;
    }
    param = Validator(null, 'This field cannot be empty') as String?;
  }
}