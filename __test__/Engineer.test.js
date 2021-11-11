const Engineer = require('../lib/Engineer');
 
test('Engineer is defined as a funtion', () => {
    expect(typeof Engineer).toEqual('function');
});

test('Engineer is returning an object', () => {
    let newEngineer = new Engineer('Engineer_name', 1, 'Engineer_email', 'Engineer_github');
    expect(typeof newEngineer).toEqual('object');
});

test('Checking log for correct values, Engineer_name', () => {
    const checkConsole = jest.spyOn(console, 'log');
    const newEngineer = new Engineer('Engineer_name', 1, 'Engineer_email', 'Engineer_github');
    console.log(newEngineer.getName());
    expect(checkConsole).toHaveBeenCalledWith(
      'Engineer_name'
    ); 
  });

test('Checking log for correct values, 1', () => {
    const checkConsole = jest.spyOn(console, 'log');
    const newEngineer = new Engineer('Engineer_name', 1, 'Engineer_email', 'Engineer_github');
    console.log(newEngineer.getId());
    expect(checkConsole).toHaveBeenCalledWith(
        1
    );
});

test('Checking log for correct values, Engineer_email', () => {
    const checkConsole = jest.spyOn(console, 'log');
    const newEngineer = new Engineer('Engineer_name', 1, 'Engineer_email', 'Engineer_github');
    console.log(newEngineer.getEmail());
    expect(checkConsole).toHaveBeenCalledWith(
      'Engineer_email'
    );
});

test('Checking log for correct values, Engineer_github', () => {
    const checkConsole = jest.spyOn(console, 'log');
    const newEngineer = new Engineer('Engineer_name', 1, 'Engineer_email', 'Engineer_github');
    console.log(newEngineer.getGithub());
    expect(checkConsole).toHaveBeenCalledWith(
      'Engineer_github'
    );
});