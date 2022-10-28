const Manager = require("../lib/Manager");

describe("Manager", () =>{
    it("Can create new Manager", () =>{
        const manager = new Manager("Tristan",115,"Tristan@Email.com","231");

        expect(manager.name).toEqual("Tristan");
        expect(manager.id).toEqual(115);
        expect(manager.email).toEqual("Tristan@Email.com");
        expect(manager.officeNumber).toEqual("231");
    });
    it("Can get name using getName()", () =>{
        const manager = new Manager("Tristan",115,"Tristan@Email.com","231");
        expect(manager.getName()).toEqual("Tristan");
    });
    it("Can get ID using getId()", () =>{
        const manager = new Manager("Tristan",115,"Tristan@Email.com","231");
        expect(manager.getId()).toEqual(115);
    });
    it("Can get Email using getEmail()", () =>{
        const manager = new Manager("Tristan",115,"Tristan@Email.com","231");
        expect(manager.getEmail()).toEqual("Tristan@Email.com");
    });
    it("Can get OfficeNumber using getOfficeNumber()", () =>{
        const manager = new Manager("Tristan",115,"Tristan@Email.com","231");
        expect(manager.getOfficeNumber()).toEqual("231");
    });
    it("Can get Role using getRole()", () =>{
        const manager = new Manager("Tristan",115,"Tristan@Email.com","231");
        expect(manager.getRole()).toEqual("Manager");
    });

});