class EmployeePayrollData {
  //property
  salary;
  
  startDate;
  //constructor
  constructor(id, name, salary, gender, startDate) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.gender = gender;
    this.startDate = startDate;
  }
  //getter setter
  set gender(gender){
    let regex = RegExp("^[MF]{1}$");
    if(regex.test(gender))
    this._gender=gender;
    else throw "Incurret Gender Input";
  }
  get gender(){return this._gender}

  set id(id) {
    if (id > 1) {
      this._id = id;
    } 
    else throw "Incurret Employee ID";
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(name)) {
      this._name = name;
    } else throw "Name is correct";
  }
}
try{
let empData = new EmployeePayrollData(-1, "Ram", 60000);
console.log(empData);
  empData.name = "ahon1";
  console.log(empData);
} catch (e) {
  console.log(e);
}
try{
let newEmpData = new EmployeePayrollData(  2,  "Raajuu",  30000,
  "P",
  new Date(2022, 01, 01)
);
console.log(newEmpData);
}
catch (e){
console.log(e);}
