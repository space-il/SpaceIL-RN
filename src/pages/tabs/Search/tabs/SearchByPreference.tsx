import React from 'react';
import FormInputsAndButton from '@components/common/forms/FormInputsAndButton';

const preferenceSearchParams = [
  {
    title: 'אזור',
    placeholder: 'אזור',
    name: 'area',
  },
  {
    title: 'קבוצת גיל',
    placeholder: 'קבוצת גיל',
    name: 'ageGroup',
  },
  {
    title: 'שפה',
    placeholder: 'שפה',
    name: 'language',
  },
];

const SearchByPreference = () => {
  return (
    <>
      <FormInputsAndButton forms={preferenceSearchParams} />
    </>
  );
};

export default SearchByPreference;
