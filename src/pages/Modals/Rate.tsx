import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { Reating } from '@components/Reating/Reating';
import { COLORS } from '@constants/Colors';
import { Button } from '@components/common/buttons/Button';
import { useForm } from 'react-hook-form';
import { FormInput } from '@components/common/forms/FormInput';
import { RatePageLabels } from '@constants/labels/RatePageLabels';

const Rate = () => {
  const [modalState, onChangeState] = React.useState(true);
  const { control, handleSubmit } = useForm<any>();
  const onHandleSubmit = async (): Promise<void> => {};
  const [rating, setRating] = useState(0);

  const FormType = {
    lectureNumber: 'lectureNumber',
    NumberOfParticipants: 'NumberOfParticipants',
    TellUsMore: 'TellUsMore',
  };
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
        <Text style={styles.Title}> {RatePageLabels.title}</Text>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.text}>{RatePageLabels.rateLbael}</Text>
          <Reating rating={rating} setRating={setRating} />
        </View>
        <View>
          <FormInput
            customInputStyle={styles.input}
            control={control}
            title={RatePageLabels.lectureNumberLabel}
            name={FormType.lectureNumber}
            placeholder={''}
            customTitleStyle={styles.text}
            onlyNumbers={true}
          />
        </View>

        <View>
          <FormInput
            customInputStyle={styles.input}
            control={control}
            title={RatePageLabels.ParticipantsNumberLabel}
            name={FormType.NumberOfParticipants}
            placeholder={''}
            customTitleStyle={styles.text}
            onlyNumbers={true}
          />
        </View>

        <View>
          <FormInput
            customInputStyle={{ ...styles.input, height: 160 }}
            control={control}
            title={RatePageLabels.tellUsMoreLabel}
            name={FormType.TellUsMore}
            placeholder={''}
            customTitleStyle={styles.text}
            numberOfLines={8}
            multiline={true}
          />
        </View>
        <Button onPress={handleSubmit(onHandleSubmit)} btnLabel={RatePageLabels.saveButtonLabel} />
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
    paddingEnd: 5,
  },
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    textAlign: 'right',
    borderColor: COLORS.LIGHT_GREY,
    textAlignVertical: 'top',
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
  button: {
    backgroundColor: COLORS.BLUE,
    borderWidth: 1,
    // borderColor: Colors.gray,
    margin: 12,
  },
  buttonContainer: {
    padding: 25,
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  modalHeaderCloseText: {
    fontSize: 25,
    paddingStart: 25,
    paddingTop: 35,
  },
  modalHeader: {
    flexDirection: 'row',
    borderWidth: 1,
  },
  /* The header takes up all the vertical space not used by the close button. */
  modalHeaderContent: {
    flexGrow: 1,
  },
});

export default Rate;
