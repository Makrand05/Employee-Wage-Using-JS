class EmployeePayrollData{
    //property 
    id;
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
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
        {
            this._name=name;
        }
        else 
        throw "Name is correct"
    }
}
let empData=new EmployeePayrollData(1,"Ram",60000);
console.log(empData);
try{
    empData.name="ahon1";
    console.log(empData);
}catch(e)
{
    console.log(e);
}
let newEmpData=new EmployeePayrollData(2,"Raajuu",30000,"M",new Date(2022, 01, 01))
console.log(newEmpData);


