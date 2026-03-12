import skierSettings, { skierSettingsLevelAge } from "../../../skierSettings";

export function getSkierSettings(data: {
  weight: string;
  height: string;
  age: string;
  bootsLength: string;
  skiLevel: string;
}) {
  let setting;
  // Find the skier setting based on weight
  const skierSettingWeight = skierSettings.find(
    (setting) => setting.weight === data.weight,
  );

  if (!skierSettingWeight) {
    return "???";
  }

  // Find the skier setting based on height
  const skierSettingHeight = skierSettings.find(
    (setting) => setting.height === data.height,
  );

  if (!skierSettingHeight) {
    return "???";
  }

  //  Get the index of the skier settings based on weight and height
  const skierSettingWeightIndex = skierSettings.indexOf(skierSettingWeight);
  const skierSettingHeightIndex = skierSettings.indexOf(skierSettingHeight);

  // If the weight and height settings do not match, use the lower index to determine the setting
  if (skierSettingWeightIndex !== skierSettingHeightIndex) {
    setting =
      skierSettings[Math.min(skierSettingWeightIndex, skierSettingHeightIndex)];
  } else {
    setting = skierSettings[skierSettingWeightIndex];
  }

  //   console.log(setting, "Initial setting based on weight and height");

  // Find the age adjustment based on the ski level and age
  const skiLevelSetting = skierSettingsLevelAge.find(
    (level) => level.skiLevel === data.skiLevel,
  );

  console.log(skiLevelSetting, "Ski level setting based on ski level");

  if (!skiLevelSetting) {
    return "???";
  }

  const ageSetting = skiLevelSetting.age.find((age) => age.value === data.age);

  if (!ageSetting) {
    return "???";
  }

  if (ageSetting.DINAjustment === +1) {
    setting = skierSettings[setting.index - 1];
    // console.log("Adjusted setting for age +1:", setting);
  } else if (ageSetting.DINAjustment === -1) {
    setting = skierSettings[setting.index + 1];
    // console.log("Adjusted setting for age -1:", setting);
  } else if (ageSetting.DINAjustment === -2) {
    setting = skierSettings[setting.index + 2];
    console.log("Adjusted setting for age -2:", setting);
  } else {
    setting = skierSettings[setting.index];
    // console.log("No age adjustment needed");
  }
  console.log(setting, "Final setting after age adjustment");

  // Find the boot setting based on the boots length
  const bootSetting = setting.bootsSize.find(
    (boot) => boot.name === data.bootsLength,
  );

  if (!bootSetting) {
    return "???";
  }

  // Return the DIN value from the boot setting with age adjustment
  return bootSetting.DIN;
}
