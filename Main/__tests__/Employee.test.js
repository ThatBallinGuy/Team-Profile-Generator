const Employee = require("../lib/Employee");

describe("Employee", () =>{
    it("Can create new Employee", () =>{
        const employee = new Employee("Tristan",115,"Tristan@Email.com");

        expect(employee.name).toEqual("Tristan");
        expect(employee.id).toEqual(115);
        expect(employee.email).toEqual("Tristan@Email.com");
    });
    it("Can get name using getName()", () =>{
        const employee = new Employee("Tristan",115,"Tristan@Email.com");
        expect(employee.getName()).toEqual("Tristan");
    });
    it("Can get ID using getId()", () =>{
        const employee = new Employee("Tristan",115,"Tristan@Email.com");
        expect(employee.getId()).toEqual(115);
    });
    it("Can get Email using getEmail()", () =>{
        const employee = new Employee("Tristan",115,"Tristan@Email.com");
        expect(employee.getEmail()).toEqual("Tristan@Email.com");
    });
    it("Can get Role using getRole()", () =>{
        const employee = new Employee("Tristan",115,"Tristan@Email.com");
        expect(employee.getRole()).toEqual("Employee");
    });

});