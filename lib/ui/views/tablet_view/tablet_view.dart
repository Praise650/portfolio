import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class TabletView extends StatefulWidget{
  const TabletView({Key? key}) : super(key: key);

  @override
  State<TabletView> createState()=> _TabletViewState();
}
class _TabletViewState extends State<TabletView>{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: Colors.green,
        child: SingleChildScrollView(
          child: Column(
            children: List.generate(400, (index) => Text('Afuwape Praise ${index-1}')),
          ),
        ),
      ),
    );
  }
}