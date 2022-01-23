const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

let empDailyHrsArray=new Array();

function getWorkingHours(empCheck) {
  switch (empCheck) {
    case IS_PART_TIME:
      return PART_TIME_HOURS;
    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
    default:
      return 0;
  }
}

function calculateDailyWage(empHours) {
  return empHrs * WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (   totalEmpHrs <= MAX_HRS_IN_MONTH &&   totalWorkingDays < NUM_OF_WORKING_DAYS ) {
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  empHrs = getWorkingHours(empCheck);

  totalEmpHrs += empHrs;


  empDailyHrsArray.push({
      day: totalWorkingDays,
      dailyHours : empHrs,
      dailyWage: calculateDailyWage(empHrs)

  });  
}
console.log(empDailyHrsArray);

// UC 11 A Calc total Wage and total hours worked

let totalWage=empDailyHrsArray.reduce((totalWage,DailyWageAndHrsObj)=>{
  return totalWage+=DailyWageAndHrsObj.dailyWage;
},0)
console.log(" UC 11 A Total Wage "+totalWage);

let totalHours=empDailyHrsArray.reduce((totalHours,DailyWageAndHrsObj)=>{
  return totalHours+=DailyWageAndHrsObj.dailyHours;
},0)
console.log("Total Hours "+totalHours);

//UC 11 B Show the full workings days using foreach
console.log("UC 11 B - FUll working day ------- ")
empDailyHrsArray.filter(dailyObj=>dailyObj.dailyHours==FULL_TIME_HOURS)
.forEach(day=>(day.day).toString());

//UC 11 c Part Time woring days
console.log("UC 11 C Part Time woring day : ");
let partTiemDays=empDailyHrsArray.filter(EmplyeeObj=>EmplyeeObj.dailyHours==PART_TIME_HOURS)
.map(EmplyeeObj=>(EmplyeeObj.day).toString());
console.log(partTiemDays);


// UC 11 d. No working days only using Map function
console.log("UC 11 D No Working day : ");
let nonWorkingDays=empDailyHrsArray.filter(EmplyeeObj=>EmplyeeObj.dailyHours==0)
.map(EmplyeeObj=>(EmplyeeObj.day).toString());
console.log(nonWorkingDays);