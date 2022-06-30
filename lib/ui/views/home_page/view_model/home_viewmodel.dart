import 'package:portfolio/app/res/images.dart';
import 'package:stacked/stacked.dart';

class HomeViewModel extends BaseViewModel {
  List<CompletedModel> completedProjectList = [
    CompletedModel(
      projectName: 'Faith Breed',
      roleTaken: 'Mobile Developer',
      projectShortDesc:
      'Fiath Breed ia an application for tracking souls reached out'
          'to during general evangelism to aid feasible follow-up',
      images: [
        AppImages.img2,
        AppImages.img1,
        AppImages.img1,
        AppImages.img1,
        AppImages.img1
      ],
    ),
    CompletedModel(
      projectName: 'Ellen',
      roleTaken: 'Mobile Developer',
      projectShortDesc:
      'A crypto-currency application which serves as a wallet for crypto coin transactions'
          ' and also to keep track of happenings in the crypto world ',
      images: [
        AppImages.img4,
        AppImages.img2,
        AppImages.img1,
        AppImages.img1,
        AppImages.img1
      ],
    ),
    CompletedModel(
      projectName: 'SchoolCom Admin',
      roleTaken: 'Mobile Developer',
      projectShortDesc:
      'SchoolCom Admin is an application for tracking souls reached out'
          'to during general evangelism to aid feasible follow-up',
      images: [AppImages.img3, AppImages.img1, AppImages.img4, AppImages.img1],
    ),
  ];
}

class CompletedModel {
  final String projectName;
  final String roleTaken;
  final String projectShortDesc;
  final List<String> images;

  CompletedModel({
    required this.projectName,
    required this.roleTaken,
    required this.projectShortDesc,
    required this.images,
  });
}
