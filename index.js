// Write your solution in this
const employee = {
    name: "joe",
    streetAddress: "123 North"
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee}
    newEmployee[key] = value;
    return newEmployee
}function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const deletEmployee = {...employee};
    delete deletEmployee[key]
    return deletEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key] 
    return employee
}