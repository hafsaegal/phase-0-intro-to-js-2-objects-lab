// Write your solution in this file!

const employee= {name:"Hafsa", streetAdress:"Parklands"};

function updateEmployeeWithKeyAndValue (employee, key, value){
      const newEmployee={...employee};

      newEmployee[key]=value
      return newEmployee;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//   const newEmployee = { ...employee };

//   newEmployee["sam"] = "12 Broadway";
//   return newEmployee;
    employee[key]=value;
    return employee
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAdress", "12 Broadway");
console.log(employee)





// const updatedEmployee={"name":"sam","streetAdress":"12 Broadway"}

// const newEmployee= destructivelyUpdateEmployeeWithKeyAndValue(employee,"Sam","12 Broadway");

// newEmployee()