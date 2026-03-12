const skierSettings = [
  {
    index: 1,
    weight: "10-13",
    height: "-148",
    bootsSize: [
      {
        index: 1,
        name: "<230",
        DIN: 0.75,
      },
      {
        index: 2,
        name: "231-250",
        DIN: 0.75,
      },
      { index: 3, name: "251-270", DIN: 0.75 },
    ],
  },
  {
    index: 2,
    weight: "14-17",
    height: "-148",
    bootsSize: [
      {
        index: 1,
        name: "<230",
        DIN: 1,
      },
      {
        index: 2,
        name: "231-250",
        DIN: 0.75,
      },
      { index: 3, name: "251-270", DIN: 0.75 },
      { index: 4, name: "271-290", DIN: 0.75 },
    ],
  },
  {
    index: 3,
    weight: "18-21",
    height: "-148",
    bootsSize: [
      {
        index: 1,
        name: "<230",
        DIN: 1,
      },
      {
        index: 2,
        name: "231-250",
        DIN: 0.75,
      },
      { index: 3, name: "251-270", DIN: 0.75 },
      { index: 4, name: "271-290", DIN: 0.75 },
    ],
  },
  {
    index: 4,
    weight: "22-25",
    height: "149-157",
    bootsSize: [
      {
        index: 1,
        name: "<230",
        DIN: 1,
      },
      {
        index: 2,
        name: "231-250",
        DIN: 0.75,
      },
      { index: 3, name: "251-270", DIN: 0.75 },
      { index: 4, name: "271-290", DIN: 0.75 },
    ],
  },
];

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
    return 0;
  }

  // Find the skier setting based on height
  const skierSettingHeight = skierSettings.find(
    (setting) => setting.height === data.height,
  );

  if (!skierSettingHeight) {
    return 0;
  }

  //  Get the index of the skier settings based on weight and height
  const skierSettingWeightIndex = skierSettings.indexOf(skierSettingWeight);
  const skierSettingHeightIndex = skierSettings.indexOf(skierSettingHeight);

  // If the weight and height settings do not match, use the lower index to determine the setting
  if (skierSettingWeightIndex !== skierSettingHeightIndex) {
    console.log("Weight and height settings do not match");
    console.log(
      "setting:",
      skierSettings[Math.min(skierSettingWeightIndex, skierSettingHeightIndex)],
    );
    setting =
      skierSettings[Math.min(skierSettingWeightIndex, skierSettingHeightIndex)];
  } else {
    console.log("Weight and height settings match");
    console.log("setting:", skierSettings[skierSettingWeightIndex]);
    setting = skierSettings[skierSettingWeightIndex];
  }

  console.log("setting:", setting);

  // Find the boot setting based on the boots length
  const bootSetting = setting.bootsSize.find(
    (boot) => boot.name === data.bootsLength,
  );

  if (!bootSetting) {
    return 0;
  }

  // Return the DIN value from the boot setting
  return bootSetting.DIN;
}
