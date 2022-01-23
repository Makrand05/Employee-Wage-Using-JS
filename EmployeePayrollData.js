class EmployeePayrollData{
    id;
   // name;
    salary;
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    get name(){
        return this._name;
    }
    set name(name){
        
            this._name=name;
    }
}
let empData=new EmployeePayrollData(1,"Ram",60000);
console.log(empData);



