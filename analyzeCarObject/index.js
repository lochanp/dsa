function analyzeCarObject(cars) {
  const totalMilege = cars.reduce((sum, car) => sum + car.mileage, 0);

  const averageMilege = totalMilege / cars.length;

  let highestMileageCar = cars[0].mileage; // Initialize with the first car
  let lowestMilegeCar = cars[0].mileage;
  for (let i = 1; i < cars.length; i++) {
    if (cars[i].mileage > highestMileageCar) {
      highestMileageCar = cars[i].mileage;
    }
    if (cars[i].mileage < lowestMilegeCar) {
      lowestMilegeCar = cars[i].mileage;
    }
  }
  return {
    averageMilege: parseFloat(averageMilege.toFixed(2)),
    highestMileageCar,
    totalMilege,
    lowestMilegeCar
  };
}

console.log(
  analyzeCarObject([
    { make: 'Toyota', model: 'corolla', year: 2020, mileage: 2400 },
    { make: 'Honda', model: 'city', year: 2019, mileage: 6400 },
    { make: 'Ford', model: 'mustang', year: 2021, mileage: 7000 }
  ])
);
