import React, { Fragment, useContext, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import Dropdown from '@ui/forms/Dropdown';
import SelectableCheckbox from '@ui/forms/SelectableCheckbox';
import ButtonGroup from '@ui/molecules/ButtonGroup';
import OnboardingStep from '@ui/templates/OnboardingStep';
import SelectableListGroup from '@ui/templates/SelectableListGroup';

import countryRegionData from 'country-region-data';
import {
	GenderIdentityOptions,
	SexualIdentityOptions
} from '@data/gender_sexual_identities';
import RaceEthinicityOptions from '@data/race_ethnicity';

import globals from '@lib/globals';
import functions from '@lib/functions';

import { OnboardingContext } from '@providers/OnboardingContextProvider';

import styles from './styles';

const Demographics = () => {
	const context = useContext(OnboardingContext);
	const { currentStep, handleNext, handlePrevious } = context;
	const countries = functions.getCountryOptions(countryRegionData);
	const [regionOptions, setRegionOptions] = useState(null);
	const [stepData, setStepData] = useState({
		country: '',
		region: '',
		age: null,
		genderIdentity: '',
		sexualIdentity: '',
		raceEthnicity: []
	});
	const ageOptions = Array(82)
		.fill()
		.map((_, idx) => {
			const val = 18 + idx;
			return { label: `${val}`, value: val };
		});

	useEffect(() => {
		const regions = functions.getCountryRegionOptions(
			countryRegionData,
			stepData.country
		);
		setRegionOptions(regions);
	}, [stepData.country]);

	const renderEthnicityOptions = (row, isItemSelected, toggleSelect) => {
		return (
			<SelectableCheckbox
				handleTap={() => toggleSelect(row)}
				label={row.item.label}
				selected={isItemSelected}
			/>
		);
	};

	return (
		<OnboardingStep>
			<Fragment>
				<View style={styles.contentContainer}>
					<ScrollView style={styles.screenInnerContainer}>
						<View style={styles.sectionContainer}>
							<Text style={styles.header}>{globals.STRING.demographics}</Text>
							<Text style={styles.bodyText}>
								{globals.STRING.requiredFieldsHelperText}
							</Text>
							<Dropdown
								label={globals.STRING.ageDropdownPrompt}
								handleChange={(val) => setStepData({ ...stepData, age: val })}
								listOptions={ageOptions}
								required
							/>
							<Dropdown
								label={globals.STRING.countryDropdownPrompt}
								handleChange={(val) =>
									setStepData({ ...stepData, country: val })
								}
								listOptions={countries}
								required
							/>
							<Dropdown
								label={globals.STRING.stateProvinceDropdownPrompt}
								handleChange={(val) =>
									setStepData({ ...stepData, region: val })
								}
								listOptions={
									stepData.country && regionOptions ? regionOptions : []
								}
								required
							/>
						</View>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionHeader}>
								{globals.STRING.sogIdentity}
							</Text>
							<Text style={styles.bodyText}>
								{globals.STRING.genderIdentityGeneralPrompt}
							</Text>
							<Dropdown
								label={globals.STRING.genderIdentityDropdownPrompt}
								handleChange={(val) =>
									setStepData({ ...stepData, genderIdentity: val })
								}
								listOptions={GenderIdentityOptions}
							/>
							<Text
								style={[styles.bodyText, { marginTop: globals.INTEGER.ten }]}>
								{globals.STRING.sexualIdentityGeneralPrompt}
							</Text>
							<Dropdown
								label={globals.STRING.sexualIdentityDropdownPrompt}
								handleChange={(val) =>
									setStepData({ ...stepData, sexualIdentity: val })
								}
								listOptions={SexualIdentityOptions}
							/>
						</View>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionHeader}>
								{globals.STRING.raceEthnicity}
							</Text>
							<Text style={styles.disclosureText}>
								{globals.STRING.researchDisclosure}
							</Text>
							<SelectableListGroup
								items={RaceEthinicityOptions}
								onSelectionChange={(selectedItem) => {
									setStepData({ ...stepData, raceEthnicity: selectedItem });
								}}
								renderRowItem={renderEthnicityOptions}
								extraData={stepData}
							/>
						</View>
					</ScrollView>
					<ButtonGroup
						forwardTitle={globals.STRING.navigationNext}
						backwardTitle={globals.STRING.navigationPrevious}
						onForwardPress={() => handleNext(currentStep, stepData)}
						onBackwardPress={() => handlePrevious(currentStep)}
					/>
				</View>
			</Fragment>
		</OnboardingStep>
	);
};

export default Demographics;
