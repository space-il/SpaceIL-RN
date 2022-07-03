export enum LectureSheet {
  PANEL = 'lecture_panel_sheet',
  NAVIGATION = 'lecture_navigation_sheet',
  CONTACT = 'lecture_contact_sheet',
}

export interface LectureItemIface {
  id: string;
  title: string;
}

interface ActionSheetItem {
  text: string;
  type?: string;
  icon?: string;
}

export interface LecturePanelItem extends ActionSheetItem {
  id: string;
  screenToNavigate: MyLectureScreensNames;
}

export enum MyLectureScreensNames {
  MY_LECTURE = 'MyLectures',
  LECTURE = 'Lecture',
}
