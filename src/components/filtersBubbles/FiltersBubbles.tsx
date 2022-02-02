import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../constants/Colors';
import React, { useState } from 'react';

interface BubbleProp {
  bubbleText: string;
  filterAction: () => void;
}

interface Props {
  data: BubbleProp[];
}

const Bubble = ({ bubbleText, filterAction }: BubbleProp) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const getColor = (isSelectedMode: boolean) =>
    isSelectedMode
      ? { backgroundColor: COLORS.BLUE }
      : { backgroundColor: COLORS.GRAY };

  const getTextColor = (isSelectedMode: boolean) =>
    isSelectedMode ? { color: COLORS.WHITE } : { color: COLORS.BLACK };

  const onPress = () => {
    setIsSelected(prev => !prev);
    filterAction();
  };

  return (
    <TouchableOpacity
      style={[styles.bubble, getColor(isSelected)]}
      onPress={onPress}>
      <Text style={getTextColor(isSelected)} numberOfLines={1}>
        {bubbleText}
      </Text>
    </TouchableOpacity>
  );
};

const FiltersBubbles = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      {data.map((bubble, index) => (
        <Bubble
          key={index}
          bubbleText={bubble.bubbleText}
          filterAction={bubble.filterAction}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'flex-end',
  },
  bubble: {
    height: 42,
    width: 150,
    borderRadius: 20,
    justifyContent: 'center',
    marginRight: 6,
    paddingHorizontal: 12,
  },
  bubbleText: {
    fontFamily: 'Abraham',
  },
});

export default FiltersBubbles;
