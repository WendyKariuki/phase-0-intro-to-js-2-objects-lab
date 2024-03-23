let employee = {
    name: "Mandy",
    streetAddress: "Palm Beach 112"
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
        return employee;
    }

// function deleteFromEmployeeByKey(employee, key){
//     const newEmployee = [...employee];
//     if (key in newEmployee) {
//         delete newEmployee[key];
//     }
//     // delete newEmployee[key];
//     return newEmployee;
// }

function deleteFromEmployeeByKey(employee, key) {
        if (typeof employee !== 'object' || employee === null) {
        console.error('Invalid employee object provided.');
        return null;
    }
   const newEmployee = { ...employee };
    
    if (key in newEmployee) {
        delete newEmployee[key];
    }
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    if (typeof employee !== 'object' || employee === null) {
        console.error('Invalid employee object provided.');
        return null;
    }
    if (key in employee) {
        delete employee[key];
    } else {
        console.error(`Key '${key}' does not exist in the employee object.`);
    }
       return employee;
}
