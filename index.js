// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
  };
  console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

  const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
  };
    console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
    console.log(selectingDrivers);

    const createFareMultiplier = (multiplier) => {
        return (value) => {
          return multiplier * value;
        };
      }
        console.log(createFareMultiplier(4)(5));

        const fareDoubler = createFareMultiplier(2);
        console.log(fareDoubler(5));

        const fareTripler = createFareMultiplier(3);
        console.log(fareTripler(5));

        const selectDifferentDrivers = (drivers, whichDrivers) => {
            return whichDrivers(drivers);
          };

            console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers));
            console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers));

            