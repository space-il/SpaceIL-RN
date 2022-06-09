import React from 'react';
import FormInputsAndButton from '@components/common/forms/FormInputsAndButton';

const flexibleSearchParams = [
  {
    title: 'עיר',
    placeholder: 'עיר',
    name: 'city',
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
  {
    title: 'שם המוסד',
    placeholder: 'שם המוסד',
    name: 'schoolName',
  },
];

const FlexibleSearch = () => {
  return (
    <>
      <FormInputsAndButton forms={flexibleSearchParams} />
    </>
  );
};

export default FlexibleSearch;
