// Task 1 - Created Employee Class
// Define an Employee class with properties for name, id, department, and salary.
// Includes methods to get employee details and calculate the annual salary.
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    // Method to return formatted employee details
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    // Method to calculate the employee's annual salary
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Test Task 1
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); // Employee details
console.log(`Annual Salary: $${emp1.calculateAnnualSalary()}`); // Annual salary
console.log("Task 1 Completed\n");

// Task 2 - Created Manager Class with Inheritance
// Define a Manager class that extends Employee.
// Adds a teamSize property and overrides getDetails method.
// Includes a method to calculate the manager's bonus.
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }

    // Override getDetails to include team size
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    // Method to calculate the manager's bonus (10% of annual salary)
    calculateBonus() {
        return this.calculateAnnualSalary() * 0.1;
    }
}

// Test Task 2
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); // Manager details
console.log(`Bonus: $${mgr1.calculateBonus()}`); // Bonus calculation
console.log("Task 2 Completed\n");

// Task 3 - Created Company Class
// Define a Company class to store and manage employees.
// Includes methods to add employees and list all employees.
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    // Method to add an employee to the company
    addEmployee(employee) {
        this.employees.push(employee);
        console.log(`Added employee: ${employee.getDetails()}`);
    }

    // Method to list all employees in the company
    listEmployees() {
        console.log("Listing all employees:");
        this.employees.forEach(emp => console.log(emp.getDetails()));
    }
}

// Test Task 3
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees(); // List all employees
console.log("Task 3 Completed\n");

// Task 4 - Payroll System
// Method to calculate the total payroll of all employees (including managers)
Company.prototype.calculateTotalPayroll = function () {
    const totalPayroll = this.employees.reduce((total, emp) => total + emp.calculateAnnualSalary(), 0);
    console.log(`Total Payroll: $${totalPayroll}`);
    return totalPayroll;
};

// Test Task 4
company.calculateTotalPayroll();
console.log("Task 4 Completed\n");
