import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '@constants/Colors';
import CalenderPicker from '@components/common/forms/CalenderPicker';
import { Button } from '@components/common/buttons/Button';
import { FormInput } from '@components/common/forms/FormInput';
import { useForm } from 'react-hook-form';
import { UpdateDateLabels } from '@constants/labels/UpdateDateLabels';


interface props {
  modalState: boolean;
  onChangeState: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateDate = (pops: props) => {
  const { modalState, onChangeState } = pops;
  const { control, handleSubmit } = useForm<any>({
    defaultValues: {}
  });
  const onHandleSubmit = async (): Promise<void> => {};
  const [date, setDate] = React.useState(new Date());

  return (
    <Modal
      visible={modalState}
      collapsable={true}
      onRequestClose={() => {
        return onChangeState(!modalState);
      }}>
      <TouchableOpacity
        onPress={() => {
          return onChangeState(!modalState);
        }}>
        <Text style={styles.modalHeaderCloseText}>X</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.Title}>{UpdateDateLabels.title}</Text>
        <View>
          <Text style={styles.text}>{UpdateDateLabels.lectureDateLabel}</Text>
          <CalenderPicker date={date} setDate={setDate} />
        </View>
        <View>
          <FormInput
            name={'LectureHour'}
            placeholder={''}
            control={control}
            customInputStyle={styles.input}
            customTitleStyle={styles.text}
            title={UpdateDateLabels.lectureHoursLabel}
          />
        </View>
        <View>
          <FormInput
            name={'LectureComments'}
            placeholder={''}
            control={control}
            customInputStyle={{ ...styles.input, height: 160 }}
            customTitleStyle={styles.text}
            multiline={true}
            title={UpdateDateLabels.commentsLabel}
          />
        </View>
        <Button onPress={handleSubmit(onHandleSubmit)} btnLabel={UpdateDateLabels.saveButtonLabel} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    padding: 10,
  },
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    textAlign: 'right',
    borderColor: COLORS.LIGHT_GREY,
  },
  Title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 10,
  },
  text: {
    fontSize: 17,
    textAlign: 'right',
    paddingHorizontal: 10,
  },
  modalHeaderCloseText: {
    fontSize: 25,
    paddingStart: 25,
    paddingTop: 35,
  },
});

export default UpdateDate;
