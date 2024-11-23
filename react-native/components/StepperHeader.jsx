import React, {Fragment} from 'react';
import {View} from 'react-native';

import Logo from '@assets/images/common/logo-small.svg';

import styles from './styles';

const StepperHeader = ({noSteps, currentStep}) => {
  const generateSteps = (noSteps, currentStep) => {
    let stepItems = []
    for (let index = 1; index <= noSteps; index++) {
      const stepStyle =
        index > currentStep
          ? [styles.step, styles.incompleteStep]
          : [styles.step, styles.completedStep];
     stepItems.push( <View index={index} style={stepStyle} key={index} />)
    }
    return stepItems
  };

  const steps = generateSteps(noSteps, currentStep)
  return (
    <Fragment>
      <View style={styles.stepperContainer}>
        {steps}
        <Logo />
      </View>
    </Fragment>
  );
};

export default StepperHeader;
