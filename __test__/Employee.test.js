const Employee = require('../lib/Employee');
 
test('Employee is defined as a funtion', () => {
    expect(typeof Employee).toEqual('function');
});

test('Employee is returning an object', () => {
    let newEmployee = new Employee('test_name', 1, 'test_email');
    expect(typeof newEmployee).toEqual('object');
});

test('Checking log for correct values, test_name', () => {
    const checkConsole = jest.spyOn(console, 'log');
    const newEmployee = new Employee('test_name', 1, 'test_email');
    console.log(newEmployee.getName());
    expect(checkConsole).toHaveBeenCalledWith(
      'test_name'
    ); 
  });

test('Checking log for correct values, 1', () => {
    const checkConsole = jest.spyOn(console, 'log');
    const newEmployee = new Employee('test_name', 1, 'test_email');
    console.log(newEmployee.getId());
    expect(checkConsole).toHaveBeenCalledWith(
        1
    );
});

test('Checking log for correct values, test_email', () => {
    const checkConsole = jest.spyOn(console, 'log');
    const newEmployee = new Employee('test_name', 1, 'test_email');
    console.log(newEmployee.getEmail());
    expect(checkConsole).toHaveBeenCalledWith(
      'test_email'
    );
});