const sample = [
  {
    dataSkier: {
      weight: "22-25",
      height: "-148",
      age: "<10 - >=50",
      bootsLength: "231-250",
      skiLevel: "Beginner",
    },
    expectedValue: 1.25,
  },
  {
    dataSkier: {
      weight: "58-66",
      height: "158-166",
      age: "10-49",
      bootsLength: "291-310",
      skiLevel: "Intermediate",
    },
    expectedValue: 5.5,
  },
  {
    dataSkier: {
      weight: "79-94",
      height: "179-194",
      age: "10-49",
      bootsLength: "331-350",
      skiLevel: "Advanced",
    },
    expectedValue: 8,
  },
  {
    dataSkier: {
      weight: "42-48",
      height: "149-157",
      age: "10-49",
      bootsLength: "251-270",
      skiLevel: "Beginner",
    },
    expectedValue: 3.5,
  },
  {
    dataSkier: {
      weight: "49-57",
      height: "158-166",
      age: "10-49",
      bootsLength: "291-310",
      skiLevel: "Advanced",
    },
    expectedValue: 5.5,
  },
  {
    dataSkier: {
      weight: "36-41",
      height: "149-157",
      age: "10-49",
      bootsLength: "251-270",
      skiLevel: "Intermediate",
    },
    expectedValue: 3.5,
  },
  {
    dataSkier: {
      weight: "+95",
      height: "+195",
      age: "10-49",
      bootsLength: "331-350",
      skiLevel: "Beginner",
    },
    expectedValue: 6.5,
  },
  {
    dataSkier: {
      weight: "79-94",
      height: "167-178",
      age: "10-49",
      bootsLength: "291-310",
      skiLevel: "Intermediate",
    },
    expectedValue: 6.5,
  },
  {
    dataSkier: {
      weight: "79-94",
      height: "158-166",
      age: "10-49",
      bootsLength: "311-330",
      skiLevel: "Beginner",
    },
    expectedValue: 4,
  },
  {
    dataSkier: {
      weight: "49-57",
      height: "158-166",
      age: "<10 - >=50",
      bootsLength: "291-310",
      skiLevel: "Intermediate",
    },
    expectedValue: 3.5,
  },
];

export default sample;
