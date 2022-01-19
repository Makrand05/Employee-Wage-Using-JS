const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

let empDailyWageArray = new Array();
let empDailyWageMap=new Map();
let empDailyWorkingHrs=new Map();

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
while (
  totalEmpHrs <= MAX_HRS_IN_MONTH &&
  totalWorkingDays < NUM_OF_WORKING_DAYS
) {
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  empHrs = getWorkingHours(empCheck);
  empDailyWageArray.push(calculateDailyWage(empHrs));
  totalEmpHrs += empHrs;

  empDailyWageMap.set(totalWorkingDays,calculateDailyWage(empHrs));
  empDailyWorkingHrs.set(totalWorkingDays,getWorkingHours(empCheck));
}
let empWage = calculateDailyWage(totalEmpHrs);
console.log(
  "UC6 -Total Days:" +
    totalWorkingDays +
    " Total Hours:" +
    totalEmpHrs +
    " Employee Wage:" +
    empWage
);
// Store in Daliy wage 
console.log(empDailyWageArray);


//US map 7b - Show the Day along with Daily Wage using Array map helper function
let counter = 0;
function mapDayWithDaulyWage(dailyWage) {
  counter++;
  return counter + " = " + dailyWage;
}
let mapDayWithArray = empDailyWageArray.map(mapDayWithDaulyWage);
console.log(" 7B " + mapDayWithArray);

//UC 7 c Show Days when Full time wage of 160 were earned using filter function
let fullTimeWage = function (dailyWage) {
  return dailyWage.toString().includes("160");
};

let fullTimeDayWaheArray = empDailyWageArray.filter(fullTimeWage);
console.log("7C -  Emplyess having Full time " + fullTimeDayWaheArray);

//UC 7 d Find the first occurrence when Full Time Wage was earned using find function

let findFirstDayWage = mapDayWithArray.find(fullTimeWage);
console.log("7d -  Emplyess having Full time First " + findFirstDayWage);

// UC 7 E Check if Every Element of Full Time Wage is truly holding Full time wage

console.log("7E - " + fullTimeDayWaheArray.every(fullTimeWage));

//UC 7 F - Check if there is any Part Time Wage
let partTimeWage = function (dailyWage) {
  return dailyWage.toString().includes("80");
};
console.log("7F", mapDayWithArray.some(partTimeWage));

// UC 7 G Find the number of days the Employee Worked

function totalDaysWorked(numOFDays, dailyWage) {
  if (dailyWage > 0) return numOFDays + 1;
  return numOFDays;
}

console.log("7G - ", empDailyWageArray.reduce(totalDaysWorked, 0));
// UC 8 

console.log("Wolking hours : "+printMap(empDailyWorkingHrs));
// UC 8
console.log("Daily emp Wage : "+printMap(empDailyWageMap))

function printMap(map){

    for(let [key, value] of map){
        console.log(key+" = "+value);
    }
}


// using reduse 
function findTotal(totoal,wage){
    return totoal+wage;
}
console.log("total Wage "+Array.from(empDailyWageMap.values()).reduce(findTotal,0));
// Using map
let totalWageMap=0;
function calculateUsingReduce(totalWage){
    totalWageMap+=totalWage;
}