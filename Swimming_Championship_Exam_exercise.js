function solve(arr) {
    let daysOfCship = Number(arr[0]);
    let needPoints = Number(arr[1]);
    let swimmersCount = Number(arr[2]);
    let roomPrice1Day1Swimmer = Number(arr[3]);
    let feePerSwimmer = Number(arr[4]);
    let pointsEarnedDay1 = Number(arr[5]);
    let pointsEarnedDay2 = Number(arr[6]);
    let pointsEarnedDay3 = Number(arr[7]);

   
    let hotelFee = roomPrice1Day1Swimmer * swimmersCount * daysOfCship;
    let participationFee = feePerSwimmer * swimmersCount;
    let expenses = hotelFee + participationFee;

    let points = pointsEarnedDay1;
    let finalMoney = 0;

    if (daysOfCship === 2) {
        let additonPoints2 = pointsEarnedDay2 + pointsEarnedDay1 * 0.05;
        points += additonPoints2;
    } else if (daysOfCship === 3) {
        let additonPoints2 = pointsEarnedDay2 + pointsEarnedDay1 * 0.05;
        let additonPoints3 = pointsEarnedDay3 + pointsEarnedDay2 * 0.05;
        points += additonPoints2 + additonPoints3;
    }

    if (points >= needPoints) {
        finalMoney = expenses - expenses * 0.25;
        console.log(`Money left to pay: ${finalMoney.toFixed(2)} BGN.\nThe championship was successful!`);
    } else {
        finalMoney = expenses - expenses * 0.10;
        console.log(`Money left to pay: ${finalMoney.toFixed(2)} BGN.\nThe championship was not successful.`);
    }
}


solve([
    "3",
    "400",
    "5",
    "70.6",
    "15.0",
    "100.6",
    "300.59",
    "250.9"
]);