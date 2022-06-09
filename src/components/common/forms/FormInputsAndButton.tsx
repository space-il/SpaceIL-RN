import React from 'react';
import { StyleSheet, TextStyle, View } from 'react-native';
import { Button } from '@components/common/buttons/Button';
import { useForm } from 'react-hook-form';
import { COLORS } from '@constants/Colors';
import { FormInput } from '@components/common/forms/FormInput';

export interface InputForm {
  name: string;
  title: string;
  placeholder: string;
  customInputStyle?: TextStyle;
  customTitleStyle?: TextStyle;
  customButtonStyle?: TextStyle;
}

interface Props {
  forms: InputForm[];
}

const FormInputsAndButton = ({ forms }: Props) => {
  const { control, handleSubmit } = useForm();

  const renderForms = () => {
    return forms.map((form, index) => (
      <FormInput
        key={index}
        name={form.name}
        control={control}
        placeholder={form.placeholder}
        title={form.title}
        customTitleStyle={style.title}
        customInputStyle={style.inputStyle}
      />
    ));
  };
  const onPress = () => {
    console.log('search button is pressed');
  };
  return (
    <View style={style.container}>
      {renderForms()}
      <Button btnLabel={'חיפוש'} onPress={handleSubmit(onPress)} customBtnContainerStyle={style.buttonContainer} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    marginHorizontal: 24,
    paddingTop: 16,
  },
  inputStyle: {
    marginBottom: 24,
    marginTop: 6,
    height: 48,
    width: 327,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    textAlign: 'right',
    color: COLORS.INPUT_GREY,
  },
  buttonContainer: {
    marginTop: 8,
    alignSelf: 'center',
    height: 44,
    width: 279,
  },
});

export default FormInputsAndButton;
