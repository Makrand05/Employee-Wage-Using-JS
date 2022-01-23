class EmployeePayrollData{
    //property 
    id;
    name;
    salary;
    gender;
    startDate;
    //constructor
    constructor(id,name,salary,gender,startDate){
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.gender=gender;
        this.startDate=startDate;
    }
    //getter setter 
    get name(){
        return this._name;
    }
    set name(name){
        
            this._name=name;
    }
}
let empData=new EmployeePayrollData(1,"Ram",60000);
console.log(empData);
empData.name="Jhon";
console.log(empData);
let newEmpData=new EmployeePayrollData(2,"Raajuu",30000,"M",new Date(2022, 01, 01))
console.log(newEmpData);


