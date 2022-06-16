import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '@constants/Colors';
import { Button } from '@components/common/buttons/Button';
import { useForm } from 'react-hook-form';
import { FormInput } from '@components/common/forms/FormInput';
import { ReturnLectureLabels } from '@constants/labels/ReturnLectureLabels';

interface props {
  modalState: boolean;
  onChangeState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReturnLecture = (pops: props) => {
  const { modalState, onChangeState } = pops;
  const { control, handleSubmit } = useForm<any>();
  const onHandleSubmit = async (): Promise<void> => {};
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
        <Text style={styles.Title}> {ReturnLectureLabels.title}</Text>
        <View>
          <FormInput
            control={control}
            title={ReturnLectureLabels.reasonLabel}
            placeholder={''}
            customTitleStyle={styles.text}
            customInputStyle={styles.input}
            name={'CloseLecture'}
            multiline={true}
          />
        </View>
        <Button
          onPress={handleSubmit(onHandleSubmit)}
          btnLabel={ReturnLectureLabels.saveButtonLabel}
          customBtnContainerStyle={styles.button}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  input: {
    height: 520,
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
    padding: 15,
  },
  text: {
    fontSize: 17,
    textAlign: 'right',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: COLORS.BLUE,
    borderWidth: 1,
    margin: 12,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    padding: 25,
    color: COLORS.WHITE,
    paddingTop: 40,
    textAlign: 'center',
  },
  modalHeaderCloseText: {
    fontSize: 25,
    paddingStart: 25,
    paddingTop: 35,
  },
});

export default ReturnLecture;
