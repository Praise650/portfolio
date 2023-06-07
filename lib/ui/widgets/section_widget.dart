import 'package:flutter/material.dart';
import 'package:portfolio/ui/widgets/layout/responsive_widget.dart';

class SectionWidget extends StatelessWidget {
  const SectionWidget({Key? key, required this.title, this.sectionNumber, required this.body})
      : super(key: key);
  final String title;
  final int? sectionNumber;
  final Widget body;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Text(
                  "$sectionNumber.",
                  style: const TextStyle(
                    fontSize: 34,
                    color: Colors.white,
                    fontWeight: FontWeight.w700,
                  ),
                ),
                const SizedBox(width: 5),
                Text(
                  title.toUpperCase(),
                  style: const TextStyle(
                    fontSize: 34,
                    color: Colors.white,
                    fontWeight: FontWeight.w700,
                  ),
                ),
              ],
            ),
            Container(
              height: 30,
              width: ResponsiveWidget.isMobile(context) ? 50 : 100,
              decoration: const BoxDecoration(
                color: Colors.white,
                shape: BoxShape.rectangle,
              ),
            ),
          ],
        ),
        Container(child: body,),
      ],
    );
  }
}
