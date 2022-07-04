import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  text: { [key: string]: string };
}

const RenderJsonKeyValueData = ({ text }: Props) => {
  const colonCharacter = ': ';
  const renderData = (jsonData: { [key: string]: string }) => {
    return Object.keys(jsonData).map(key => {
      return (
        <Text key={key} style={style.text}>
          <Text style={style.bold}>{key}</Text>
          <Text>{colonCharacter}</Text>
          <Text>{jsonData[key]}</Text>
        </Text>
      );
    });
  };

  return <View style={style.container}>{renderData(text)}</View>;
};

const style = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  text: {
    textAlign: 'right',
    lineHeight: 22,
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default RenderJsonKeyValueData;
