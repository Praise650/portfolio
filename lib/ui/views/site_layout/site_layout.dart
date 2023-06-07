import 'package:flutter/material.dart';
import 'package:portfolio/app/app_setup.locator.dart';
import 'package:portfolio/ui/layouts/base_scaffold.dart';
import 'package:stacked/stacked.dart';

import '../../widgets/sections/footer.dart';
import '../base_view_model.dart';
import '../device_layouts/desktop_view/desktop_view.dart';
import '../device_layouts/mobile_view/mobile_view.dart';
import '../device_layouts/tablet_view/tablet_view.dart';
import '../../widgets/layout/responsive_widget.dart';
import '../../widgets/sections/sidebar.dart';

class SiteLayout extends StatefulWidget {
  const SiteLayout({Key? key}) : super(key: key);

  @override
  State<SiteLayout> createState() => _SiteLayoutState();
}

class _SiteLayoutState extends State<SiteLayout> with SingleTickerProviderStateMixin{
  ScrollController scrollController = ScrollController();
  String message = '';

  _scrollListener() {
    if (scrollController.offset >= scrollController.position.maxScrollExtent &&
        !scrollController.position.outOfRange) {
      setState(() {
        message = "reach the bottom";
      });
    }
    if (scrollController.offset <= scrollController.position.minScrollExtent &&
        !scrollController.position.outOfRange) {
      setState(() {
        message = "reach the top";
      });
    }
  }

  // _moveUp() {
  //   scrollController.animateTo(scrollController.offset - itemSize,
  //       curve: Curves.linear, duration: Duration(milliseconds: 500));
  // }

  // _moveDown() {
  //   scrollController.animateTo(scrollController.offset + itemSize,
  //       curve: Curves.linear, duration: Duration(milliseconds: 500));
  // }
  late TabController controller;

  @override
  void initState() {
    scrollController = ScrollController();
    scrollController.addListener(_scrollListener);

      controller = TabController(length: 3, vsync: this);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final mobile = ResponsiveWidget.isMobile(context);
    return ViewModelBuilder<BaseViewViewModel>.reactive(
      viewModelBuilder: () => locator<BaseViewViewModel>(),
      disposeViewModel: false,
      // viewModel: HomeViewModel(),
      // reuseExisting: true,
      // onModelReady: (model) => model.listenToRealTimePosts(),
      builder: (context, model, _) {
        return BaseScaffold(
          body: Row(
            children: [
              mobile
                  ? const SizedBox.shrink()
                  : Expanded(
                      flex: 2,
                      child: Sidebar(
                        controller: controller,
                      ),
                    ),
              const Expanded(
                flex: 5,
                child: ResponsiveWidget(
                  mobile: MobileView(),
                  tablet: TabletView(),
                  desktop: DesktopView(),
                ),
              ),
            ],
          ),
          bottomNavigationBar: mobile ? const Footer() : null,
        );
      },
    );
  }
}
