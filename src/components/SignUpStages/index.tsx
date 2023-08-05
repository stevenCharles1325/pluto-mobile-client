import React from 'react';
import AccountInformation from './AccountInformation';
import ContactInformation from './ContactInformation';
import PersonalInformation from './PersonalInformation';
import StepIndicator from 'react-native-step-indicator';
import {accentColor} from '../../styles/global';
import SignUpStagesProps from './interfaces/SignUpStagesProps';

const stages = [
  {
    label: 'Personal Information',
    Component: PersonalInformation,
  },
  {
    label: 'Contact Information',
    Component: ContactInformation,
  },
  {
    label: 'Account Information',
    Component: AccountInformation,
  },
];

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: accentColor,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: accentColor,
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: accentColor,
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: accentColor,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: accentColor,
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: 'black',
  labelSize: 13,
  currentStepLabelColor: accentColor,
};

export default function SignUpStages({position, onPress}: SignUpStagesProps) {
  const stage = React.useMemo(() => stages[position ?? 0], [position]);

  return (
    <>
      <StepIndicator
        customStyles={customStyles}
        stepCount={stages.length}
        currentPosition={position}
        onPress={onPress}
        labels={stages.map(({label}) => label)}
      />
      <stage.Component />
    </>
  );
}
