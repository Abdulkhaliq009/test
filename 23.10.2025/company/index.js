// Step 1: Create the company object
let company = {
  name: "TechCorp",           // Name of the company
  location: "New York",       // Location of the company
  employees: [                // Array of employee objects
    {
      firstName: "Sam",
      lastName: "Smith",
      department: "Engineering"
    },
    {
      firstName: "Alice",
      lastName: "Johnson",
      department: "Design"
    }
  ]
};

// Step 2: Access the name of the company
console.log("Company Name:", company.name); // Output: TechCorp

// Step 3: Access lastName and department of the first employee
console.log("First Employee Last Name:", company.employees[0].lastName); // Output: Smith
console.log("First Employee Department:", company.employees[0].department); // Output: Engineering

// Step 4: Add a new employee to the employees array
let newEmployee = {
  firstName: "John",
  lastName: "Doe",
  department: "Marketing"
};
company.employees.push(newEmployee); // Adds John to the employees array

// Step 5: Output a list of all employees with full name and department
console.log("All Employees:");
company.employees.forEach(employee => {
  console.log(`${employee.firstName} ${employee.lastName} - ${employee.department}`);
});
