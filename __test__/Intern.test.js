const Intern = require('../lib/Intern');
 
test('Intern is defined as a funtion', () => {
    expect(typeof Intern).toEqual('function');
});

test('Intern is returning an object', () => {
    let newIntern = new Intern('Intern_name', 1, 'Intern_email', 'Intern_github');
    expect(typeof newIntern).toEqual('object');
});

test('Checking log for correct values, Intern_name', () => {
    const checkConsole = jest.spyOn(console, 'log');
    const newIntern = new Intern('Intern_name', 1, 'Intern_email', 'Intern_github');
    console.log(newIntern.getName());
    expect(checkConsole).toHaveBeenCalledWith(
      'Intern_name'
    ); 
  });

test('Checking log for correct values, 1', () => {
    const checkConsole = jest.spyOn(console, 'log');
    const newIntern = new Intern('Intern_name', 1, 'Intern_email', 'Intern_github');
    console.log(newIntern.getId());
    expect(checkConsole).toHaveBeenCalledWith(
        1
    );
});

test('Checking log for correct values, Intern_email', () => {
    const checkConsole = jest.spyOn(console, 'log');
    const newIntern = new Intern('Intern_name', 1, 'Intern_email', 'Intern_github');
    console.log(newIntern.getEmail());
    expect(checkConsole).toHaveBeenCalledWith(
      'Intern_email'
    );
});

test('Checking log for correct values, Intern_school', () => {
    const checkConsole = jest.spyOn(console, 'log');
    const newIntern = new Intern('Intern_name', 1, 'Intern_email', 'Intern_school');
    console.log(newIntern.getSchool());
    expect(checkConsole).toHaveBeenCalledWith(
      'Intern_school'
    );
});