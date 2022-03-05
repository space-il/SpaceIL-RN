import React, { useState } from 'react';
import ActionSheet from 'react-native-actions-sheet';
import { SheetManager } from 'react-native-actions-sheet/dist';
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, FlatList, View } from 'react-native';
import { LecturePanelItem, LectureSheet } from '../../types';
import { COLORS } from '@constants/Colors';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { TabNavParamList, TabScreensNames } from '@pages/Main';

interface Props {
  lectureId: string;
  headerTitle: string;
  panelItems: LecturePanelItem[];
}

export const LecturePanelSheet = ({ lectureId, headerTitle, panelItems }: Props) => {
  const lecturePanelSheetId = `${LectureSheet.PANEL}-${lectureId}`;
  const [selectedItem, setSelectedItem] = useState<string>();
  const { navigate } = useNavigation<NativeStackNavigationProp<TabNavParamList>>();

  const handleLectureItemPick = async (itemId: string, screenToNavigate: TabScreensNames) => {
    setSelectedItem(itemId);
    const isPanelSheetHidden = await SheetManager.hide(lecturePanelSheetId);
    if (isPanelSheetHidden) {
      setSelectedItem(undefined);
      isPanelSheetHidden && navigate(screenToNavigate);
    }
  };

  const renderItem = ({ item: { id, screenToNavigate, text } }: { item: LecturePanelItem }) => {
    const isItemSelected = id === selectedItem;
    return (
      <View style={styles.itemContainer}>
        <Text
          style={[styles.panelItemText, { backgroundColor: isItemSelected ? '#E6F5FB' : 'white' }]}
          onPress={() => handleLectureItemPick(id, screenToNavigate)}>
          {text}
        </Text>
      </View>
    );
  };

  return (
    <ActionSheet id={lecturePanelSheetId} bounceOnOpen gestureEnabled indicatorStyle={{ backgroundColor: '#D4D4D4' }}>
      <View style={styles.sheetContainer}>
        <Text style={styles.headerTitle}>{headerTitle}</Text>
        <FlatList data={panelItems} renderItem={renderItem} />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  sheetContainer: {
    marginBottom: 20,
  },
  itemContainer: {
    borderTopWidth: 1,
    borderTopColor: '#DCDFE3',
  },
  headerTitle: {
    paddingVertical: 15,
    paddingRight: 23,
    textAlign: 'right',
    fontSize: 24,
  },
  panelItemText: {
    paddingVertical: 18,
    paddingRight: 23,
    textAlign: 'right',
    color: COLORS.BLUE,
    fontSize: 20,
  },
});
