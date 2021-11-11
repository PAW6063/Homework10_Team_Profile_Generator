const Manager = require('../lib/Manager');
 
test('Manager is defined as a funtion', () => {
    expect(typeof Manager).toEqual('function');
});

test('Manager is returning an object', () => {
    let newManager = new Manager('Manager_name', 1, 'Manager_email', 7);
    expect(typeof newManager).toEqual('object');
});

test('Checking log for correct values, Manager_name', () => {
    const checkConsole = jest.spyOn(console, 'log');
    const newManager = new Manager('Manager_name', 1, 'Manager_email', 7);
    console.log(newManager.getName());
    expect(checkConsole).toHaveBeenCalledWith(
      'Manager_name'
    ); 
  });

test('Checking log for correct values, 1', () => {
    const checkConsole = jest.spyOn(console, 'log');
    const newManager = new Manager('Manager_name', 1, 'Manager_email', 7);
    console.log(newManager.getId());
    expect(checkConsole).toHaveBeenCalledWith(
        1
    );
});

test('Checking log for correct values, Manager_email', () => {
    const checkConsole = jest.spyOn(console, 'log');
    const newManager = new Manager('Manager_name', 1, 'Manager_email', 7);
    console.log(newManager.getEmail());
    expect(checkConsole).toHaveBeenCalledWith(
      'Manager_email'
    );
});

test('Checking log for correct values, 7', () => {
    const checkConsole = jest.spyOn(console, 'log');
    const newManager = new Manager('Manager_name', 1, 'Manager_email', 7);
    console.log(newManager.getOfficeNumber());
    expect(checkConsole).toHaveBeenCalledWith(
      7
    );
});