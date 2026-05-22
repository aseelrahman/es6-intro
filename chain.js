const employee = {
    name: 'John Doe',
    position: 'Software Engineer',
    'home-address': '123 Main St',
    salary: 50000,
    1: 'desk1',
    family: {
        father:'Richard Doe',
        mother: {
            name: 'Jane Doe',
            age: 55
        }
    },
};

const value = employee.name;
// optional chain
console.log(employee.family?.mother?.age);
