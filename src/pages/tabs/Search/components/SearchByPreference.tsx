import React from 'react';
import { preferenceSearchParams } from '@pages/tabs/Search/components/config';
import { FormInputsAndButton } from '@pages/tabs/Search/components/FormInputsAndButton';
import { useForm } from 'react-hook-form';

export const SearchByPreference = () => {
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    console.log('Search by Preference submitted');
  };

  return (
    <>
      <FormInputsAndButton forms={preferenceSearchParams} onSubmit={handleSubmit(onSubmit)} />
    </>
  );
};
