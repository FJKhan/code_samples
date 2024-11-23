import React, {useContext} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import StepperHeader from '@components/StepperHeader';
import {OnboardingContext} from '@providers/OnboardingContextProvider';

import styles from '../ui/templates/OnboardingStep/styles';

const OnboardingStep = ({children}) => {
  const context = useContext(OnboardingContext);
  const {currentStep, noSteps} = context;
  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <StepperHeader
          noSteps={noSteps ?? 0}
          currentStep={currentStep + 1 ?? 0}
        />
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnboardingStep;
