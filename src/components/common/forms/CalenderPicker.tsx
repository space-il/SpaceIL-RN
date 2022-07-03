import { Image, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '@constants/Colors';
import DatePicker from 'react-native-date-picker';
import React from 'react';

type props = {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
};

const CalenderPicker = (props: props) => {
  const { date, setDate } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <TouchableOpacity onPress={() => setOpen(true)}>
      <View
        style={{
          borderWidth: 1,
          flexDirection: 'row-reverse',
          height: 45,
          margin: 10,
          borderColor: COLORS.LIGHT_GREY,
        }}>
        <Text
          style={{
            borderWidth: 0,
            height: 40,
            width: 340,
            textAlign: 'right',
            alignSelf: 'flex-end',
            paddingEnd: 10,
            paddingTop: 7,
            fontSize: 20,
          }}>
          {date.toDateString()}
        </Text>
        <Image
          source={require('../../../assets/png/calendar-icon.png')}
          style={{
            width: 25,
            height: 25,
            alignSelf: 'center',
            paddingLeft: 10,
          }}
        />
        <DatePicker
          modal={true}
          date={date}
          open={open}
          onConfirm={newdate => {
            setOpen(false);
            setDate(newdate);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CalenderPicker;
