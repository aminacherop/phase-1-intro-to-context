// Your code here
function createEmployeeRecord (employee){
    return {
        firstName : employee[0],
        familyName :employee[1],
        title :employee[2],
        payPerHour :employee[3],
        timeInEvents :[],
        timeOutEvents : []
 }
}
const employee = createEmployeeRecord([`Gray`,`Doe`,`software E ngineer`, 10000])
console.log(employee.firstName);

function createEmployeeRecords(employee){
    return employee.map(createEmployeeRecord);
}
const employees =[
    [`Gray`,`Doe`,`software E ngineer`, 10000]
];
const employeeRecords = createEmployeeRecords(employees)
console.log(employeeRecords);

function createTimeInEvent (employeeRecord , dateStamp){
    let [date,hour] = dateStamp.split(" ")
    employeeRecord.timeInEvents.push({
        type : "TimeIn",
        hour : parseInt(hour , 10),
        date : date

    });
    return employeeRecord;
    
}
let employed = {
    firstName : `gray`,
        familyName :`doe`,
        title :`softwareengineer`,
        payPerHour :10000,
        timeInEvents :[],
        timeOutEvents : []

}
createTimeInEvent(employee,"2023-04-18 0830")
console.log(employed)

function createTimeOutEvent (employeeRecord , dateStamp){
    let [date,hour] = dateStamp.split(" ")
    employeeRecord.timeOutEvents.push({
        type : "TimeOut",
        hour : parseInt(hour , 10),
        date : date

    });
    return employeeRecord;
    
}
let setOut = {
    firstName : `gray`,
        familyName :`doe`,
        title :`softwareengineer`,
        payPerHour :10000,
        TimeInEvents :[],
        timeOutEvents : []
}
createTimeInEvent(setOut,"2023-04-18 1730")
console.log(setOut)

function hoursWorkedOnDate (employeeRecord , date){
let timeIn = employeeRecord.timeInEvents.find(event => event.date === date);
let timeOut =employeeRecord.timeOutEvents.find(event => event.date === date);
if (timeIn && timeOut){
    return (timeOut.hour - timeIn.hour) /100
} 
return 0;
}
let employe = {
    firstName : `gray`,
        familyName :`doe`,
        title :`softwareengineer`,
        payPerHour :10000,
        timeInEvents :[{type: "TimeIn", hour: 900, date: "2024-03-16" }],
        timeOutEvents : [{type: "TimeOut", hour: 1700, date: "2024-03-16"}]


}
console.log(hoursWorkedOnDate(employe , "2024-03-16"))

function wagesEarnedOnDate (employeeRecord , date){
    let hoursWorked = hoursWorkedOnDate(employeeRecord, date)
    return hoursWorked * employeeRecord.payPerHour;
}
let employ = {
    firstName : `gray`,
        familyName :`doe`,
        title :`softwareengineer`,
        payPerHour :10000,
        timeInEvents :[{type: "TimeIn", hour: 900, date: "2024-03-16" }],
        timeOutEvents : [{type: "TimeOut", hour: 1700, date: "2024-03-16"}]

}
console.log(wagesEarnedOnDate(employ, "2024-03-16"));

function allWagesFor (employeeRecord ){
    return employeeRecord.timeInEvents.reduce((total,event) =>{
        return total + wagesEarnedOnDate(employeeRecord,event.date);
    }, 0)

}
let employee1 = {
    firstName: "Jon",
    familyName: "Snow",
    title: "Lord Commander",
    payPerHour: 27, 
    timeInEvents: [
        { type: "TimeIn", hour: 900, date: "2024-03-14" },
        { type: "TimeIn", hour: 1000, date: "2024-03-15" },
        { type: "TimeIn", hour: 1100, date: "2024-03-16" }
    ],
    timeOutEvents: [
        { type: "TimeOut", hour: 1700, date: "2024-03-14" },
        { type: "TimeOut", hour: 1800, date: "2024-03-15" },
        { type: "TimeOut", hour: 1900, date: "2024-03-16" }
    ]
};
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, employee) => {
        return total + allWagesFor(employee);
    }, 0);
}
console.log(calculatePayroll(employees))



