const employee = {
    name: 'John Doe',
    position: 'Software Engineer',
    'home-address': '123 Main St',
    salary: 50000,
    1: 'desk1',
};

// dot notation
console.log(employee['name']);
console.log(employee[1]);
console.log(employee["home-address"]);
const salary = employee.salary;

const money = employee['salary'];
const key ='position';
console.log(employee[key]);
