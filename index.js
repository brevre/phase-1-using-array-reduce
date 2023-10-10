// Code your solution here
const batteryBatches = [4, 5, 3, 4, 6, 5, 3];

const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log(totalBatteries); // This will output the sum of all battery amounts
