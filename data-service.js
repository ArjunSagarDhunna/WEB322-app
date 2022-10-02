const file = require('fs');  
var departments = [];
var employees = [];


exports.initialize = () =>{
    return new Promise ((resolve, reject) =>{
        file.readFile('./data/departments.json', (err,data)=> {
            if (err) {
                reject ('Error occured!!');
            }
            else {
                departments = JSON.parse(data);
            }
        });
        file.readFile('./data/employees.json', (err,data) =>{
            if (err) {
                reject ('Error occured!!');
            }
            else {
                employees = JSON.parse(data);
            }
        })       
        resolve();
    })
};
exports.getManagers = () => {
    return new Promise ((resolve, reject) => {
        var managers = employees.filter(employee => employee.isManager == true);
        if (managers.length == 0) {
            reject('no result');
        }
        resolve(managers);
    })
};
exports.getDepartments = () => {
    return new Promise((resolve,reject) => {
        if (departments.length == 0) {
            reject ('no result');
        }
        else {
            resolve (departments);
        }
    })
};
exports.getAllEmployees = () =>{
    return new Promise ((resolve,reject) => {
        if (employees.length == 0) {
            reject('Error occured!!');
        }
        else {
            resolve(employees);
        }
    })
};


