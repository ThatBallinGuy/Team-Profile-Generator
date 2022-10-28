const Intern = require("../lib/Intern");

describe("Intern", () =>{
    it("Can create new Intern", () =>{
        const intern = new Intern("Tristan",115,"Tristan@Email.com","UCF");

        expect(intern.name).toEqual("Tristan");
        expect(intern.id).toEqual(115);
        expect(intern.email).toEqual("Tristan@Email.com");
        expect(intern.school).toEqual("UCF");
    });
    it("Can get name using getName()", () =>{
        const intern = new Intern("Tristan",115,"Tristan@Email.com","UCF");
        expect(intern.getName()).toEqual("Tristan");
    });
    it("Can get ID using getId()", () =>{
        const intern = new Intern("Tristan",115,"Tristan@Email.com","UCF");
        expect(intern.getId()).toEqual(115);
    });
    it("Can get Email using getEmail()", () =>{
        const intern = new Intern("Tristan",115,"Tristan@Email.com","UCF");
        expect(intern.getEmail()).toEqual("Tristan@Email.com");
    });
    it("Can get School using getSchool()", () =>{
        const intern = new Intern("Tristan",115,"Tristan@Email.com","UCF");
        expect(intern.getSchool()).toEqual("UCF");
    });
    it("Can get Role using getRole()", () =>{
        const intern = new Intern("Tristan",115,"Tristan@Email.com","UCF");
        expect(intern.getRole()).toEqual("Intern");
    });

});