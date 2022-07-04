import React from 'react';
import { flexibleSearchParams } from '@pages/tabs/Search/components/config';
import { FormInputsAndButton } from '@pages/tabs/Search/components/FormInputsAndButton';
import { useForm } from 'react-hook-form';

export const FlexibleSearch = () => {
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    console.log('Flexible Search submitted');
  };
  return (
    <>
      <FormInputsAndButton forms={flexibleSearchParams} onSubmit={handleSubmit(onSubmit)} />
    </>
  );
};
