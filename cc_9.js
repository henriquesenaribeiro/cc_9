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
