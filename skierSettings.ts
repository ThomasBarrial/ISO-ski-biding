const skierSettings = [
  {
    index: 0,
    weight: "10-13",
    height: "none",
    bootsSize: [
      {
        index: 0,
        name: "<230",
        DIN: 0.75,
      },
      {
        index: 1,
        name: "231-250",
        DIN: 0.75,
      },
      { index: 2, name: "251-270", DIN: 0.75 },
    ],
  },
  {
    index: 1,
    weight: "14-17",
    height: "none",
    bootsSize: [
      {
        index: 0,
        name: "<230",
        DIN: 1,
      },
      {
        index: 1,
        name: "231-250",
        DIN: 0.75,
      },
      { index: 2, name: "251-270", DIN: 0.75 },
      { index: 3, name: "271-290", DIN: 0.75 },
    ],
  },
  {
    index: 2,
    weight: "18-21",
    height: "none",
    bootsSize: [
      {
        index: 0,
        name: "<230",
        DIN: 1.5,
      },
      {
        index: 1,
        name: "231-250",
        DIN: 1.25,
      },
      { index: 2, name: "251-270", DIN: 1.25 },
      { index: 3, name: "271-290", DIN: 1 },
    ],
  },
  {
    index: 3,
    weight: "22-25",
    height: "none",
    bootsSize: [
      {
        index: 0,
        name: "<230",
        DIN: 2,
      },
      {
        index: 1,
        name: "231-250",
        DIN: 1.75,
      },
      { index: 2, name: "251-270", DIN: 1.5 },
      { index: 3, name: "271-290", DIN: 1.5 },
      { index: 4, name: "291-310", DIN: 1.25 },
    ],
  },
  {
    index: 4,
    weight: "26-30",
    height: "none",
    bootsSize: [
      {
        index: 0,
        name: "<230",
        DIN: 2.5,
      },
      {
        index: 1,
        name: "231-250",
        DIN: 2.25,
      },
      { index: 2, name: "251-270", DIN: 2 },
      { index: 3, name: "271-290", DIN: 1.75 },
      { index: 4, name: "291-310", DIN: 1.5 },
      { index: 5, name: "311-330", DIN: 1.5 },
    ],
  },
  {
    index: 5,
    weight: "31-35",
    height: "none",
    bootsSize: [
      {
        index: 0,
        name: "<230",
        DIN: 3,
      },
      {
        index: 1,
        name: "231-250",
        DIN: 2.75,
      },
      { index: 2, name: "251-270", DIN: 2.5 },
      { index: 3, name: "271-290", DIN: 2.25 },
      { index: 4, name: "291-310", DIN: 2 },
      { index: 5, name: "311-330", DIN: 1.75 },
      { index: 6, name: "331-350", DIN: 1.75 },
    ],
  },
  {
    index: 6,
    weight: "36-41",
    height: "none",
    bootsSize: [
      {
        index: 0,
        name: "231-250",
        DIN: 3.5,
      },
      { index: 1, name: "251-270", DIN: 3 },
      { index: 2, name: "271-290", DIN: 2.75 },
      { index: 3, name: "291-310", DIN: 2.5 },
      { index: 4, name: "311-330", DIN: 2.25 },
      { index: 5, name: "331-350", DIN: 2 },
    ],
  },
  {
    index: 7,
    weight: "42-48",
    height: "-148",
    bootsSize: [
      { index: 0, name: "251-270", DIN: 3.5 },
      { index: 1, name: "271-290", DIN: 3 },
      { index: 2, name: "291-310", DIN: 3 },
      { index: 3, name: "311-330", DIN: 2.75 },
      { index: 4, name: "331-350", DIN: 2.5 },
    ],
  },
  {
    index: 8,
    weight: "49-57",
    height: "149-157",
    bootsSize: [
      { index: 0, name: "251-270", DIN: 4.5 },
      { index: 1, name: "271-290", DIN: 4 },
      { index: 2, name: "291-310", DIN: 3.5 },
      { index: 3, name: "311-330", DIN: 3.5 },
      { index: 4, name: "331-350", DIN: 3 },
    ],
  },
  {
    index: 9,
    weight: "58-66",
    height: "158-166",
    bootsSize: [
      { index: 0, name: "251-270", DIN: 5.5 },
      { index: 1, name: "271-290", DIN: 5 },
      { index: 2, name: "291-310", DIN: 4.5 },
      { index: 3, name: "311-330", DIN: 4 },
      { index: 4, name: "331-350", DIN: 3.5 },
      { index: 5, name: "+351", DIN: 3 },
    ],
  },
  {
    index: 10,
    weight: "67-78",
    height: "167-178",
    bootsSize: [
      { index: 0, name: "251-270", DIN: 6.5 },
      { index: 1, name: "271-290", DIN: 6 },
      { index: 2, name: "291-310", DIN: 5.5 },
      { index: 3, name: "311-330", DIN: 5 },
      { index: 4, name: "331-350", DIN: 4.5 },
      { index: 5, name: "+351", DIN: 4 },
    ],
  },
  {
    index: 11,
    weight: "79-94",
    height: "179-194",
    bootsSize: [
      { index: 0, name: "251-270", DIN: 7.5 },
      { index: 1, name: "271-290", DIN: 7 },
      { index: 2, name: "291-310", DIN: 6.5 },
      { index: 3, name: "311-330", DIN: 6 },
      { index: 4, name: "331-350", DIN: 5.5 },
      { index: 5, name: "+351", DIN: 5 },
    ],
  },
  {
    index: 12,
    weight: "+95",
    height: "+195",
    bootsSize: [
      { index: 0, name: "251-270", DIN: 8.5 },
      { index: 1, name: "271-290", DIN: 8 },
      { index: 2, name: "291-310", DIN: 7.5 },
      { index: 3, name: "311-330", DIN: 7 },
      { index: 4, name: "331-350", DIN: 6.5 },
      { index: 5, name: "+351", DIN: 6 },
    ],
  },
  {
    index: 13,
    weight: "none",
    height: "none",
    bootsSize: [
      { index: 0, name: "271-291", DIN: 10 },
      { index: 1, name: "291-310", DIN: 9.5 },
      { index: 2, name: "311-330", DIN: 8.5 },
      { index: 3, name: "331-350", DIN: 8 },
      { index: 4, name: "+351", DIN: 7.5 },
    ],
  },
  {
    index: 14,
    weight: "none",
    height: "none",
    bootsSize: [
      { index: 0, name: "271-291", DIN: 11.5 },
      { index: 1, name: "291-310", DIN: 11 },
      { index: 2, name: "311-330", DIN: 10 },
      { index: 3, name: "331-350", DIN: 9.5 },
      { index: 4, name: "+351", DIN: 9 },
    ],
  },
  {
    index: 15,
    weight: "none",
    height: "none",
    bootsSize: [
      { index: 2, name: "311-330", DIN: 12 },
      { index: 3, name: "331-350", DIN: 11 },
      { index: 4, name: "+351", DIN: 10.5 },
    ],
  },
];

export const skierSettingsLevelAge = [
  {
    index: 1,
    skiLevel: "Beginner",
    age: [
      { index: 1, value: "<=10", DINAjustment: +1 },
      { index: 2, value: "11-49", DINAjustment: 0 },
      { index: 3, value: ">=50", DINAjustment: +1 },
    ],
  },
  {
    index: 2,
    skiLevel: "Intermediate",
    age: [
      { index: 1, value: "<=10", DINAjustment: 0 },
      { index: 2, value: "11-49", DINAjustment: -1 },
      { index: 3, value: ">=50", DINAjustment: 0 },
    ],
  },
  {
    index: 3,
    skiLevel: "Advanced",
    age: [
      { index: 1, value: "<=10", DINAjustment: -1 },
      { index: 2, value: "11-49", DINAjustment: -2 },
      { index: 3, value: ">=50", DINAjustment: -1 },
    ],
  },
];

export default skierSettings;
