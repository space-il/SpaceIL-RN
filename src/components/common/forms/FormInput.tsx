import React from 'react';
import { Text, StyleSheet, TextInput, TextStyle } from 'react-native';
import { Control, Controller } from 'react-hook-form';

interface Props {
  name: string;
  control: Control;
  placeholder: string;
  title?: string;
  isRTL?: boolean;
  rules?: Record<string, any>;
  customTitleStyle?: TextStyle;
  customInputStyle?: TextStyle;
  customErrorStyle?: TextStyle;
}

export const FormInput = (props: Props) => {
  const { name, placeholder, control, rules = {}, isRTL = true, title } = props;
  const { customTitleStyle, customInputStyle, customErrorStyle } = props;
  const rtlStyle: TextStyle = isRTL ? { textAlign: isRTL ? 'right' : 'left' } : {};

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <>
          {title && (
            <Text style={[rtlStyle, customTitleStyle]}>
              {title}
              {rules?.required && <Text style={styles.requiredStar}> *</Text>}
            </Text>
          )}
          <TextInput
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder={placeholder}
            style={[styles.input, rtlStyle, { borderColor: error ? 'red' : 'lightgray' }, customInputStyle]}
          />
          {error && (
            <Text style={[styles.errorText, rtlStyle, customErrorStyle]}>{rules?.required || 'שדה זה הינו חובה'}</Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 15,
  },
  errorText: {
    color: 'red',
    marginVertical: 5,
  },
  requiredStar: {
    color: 'red',
  },
});
