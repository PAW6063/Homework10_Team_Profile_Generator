const managerQ = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter manager name: ',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter manager id: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter manager email: ',
    },
    {
        type: 'input',
        name: 'extra',
        message: 'Enter office number: '
    }
];
const engineerQ = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter engineer name: ',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter engineer id: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter engineer email: ',
    },
    {
        type: 'input',
        name: 'extra',
        message: 'Enter github: '
    }
];
const internQ = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter intern name: ',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter intern id: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter intern email: ',
    },
    {
        type: 'input',
        name: 'extra',
        message: 'Enter school: '
    }
];

const menuQ = [
    {
        type: 'list',
        name: 'menuList',
        message: 'Choose to add to your team or if it is complete: ',
        choices: ['Engineer', 'Intern', 'Complete'],
        default: 'Complete'
    }
];

module.exports = { managerQ, engineerQ, internQ, menuQ };