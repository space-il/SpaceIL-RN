import { TabScreensNames } from '@pages/tabs/Main/types';

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
  screenToNavigate: TabScreensNames;
}
