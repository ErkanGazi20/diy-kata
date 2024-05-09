const getEmployerRole = (employeeName, employees) => {
    const employee = employees.find(emp => emp.name === employeeName);
    return employee ? employee.role :'Employee not found';
};

module.exports = getEmployerRole;
