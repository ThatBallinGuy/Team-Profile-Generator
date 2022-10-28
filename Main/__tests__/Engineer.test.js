const Engineer = require("../lib/Engineer");

describe("Engineer", () =>{
    it("Can create new Engineer", () =>{
        const engineer = new Engineer("Tristan",115,"Tristan@Email.com","github.com/tristan");

        expect(engineer.name).toEqual("Tristan");
        expect(engineer.id).toEqual(115);
        expect(engineer.email).toEqual("Tristan@Email.com");
        expect(engineer.github).toEqual("github.com/tristan");
    });
    it("Can get name using getName()", () =>{
        const engineer = new Engineer("Tristan",115,"Tristan@Email.com","github.com/tristan");
        expect(engineer.getName()).toEqual("Tristan");
    });
    it("Can get ID using getId()", () =>{
        const engineer = new Engineer("Tristan",115,"Tristan@Email.com","github.com/tristan");
        expect(engineer.getId()).toEqual(115);
    });
    it("Can get Email using getEmail()", () =>{
        const engineer = new Engineer("Tristan",115,"Tristan@Email.com","github.com/tristan");
        expect(engineer.getEmail()).toEqual("Tristan@Email.com");
    });
    it("Can get github using getGithub()", () =>{
        const engineer = new Engineer("Tristan",115,"Tristan@Email.com","github.com/tristan");
        expect(engineer.getGithub()).toEqual("github.com/tristan");
    });
    it("Can get Role using getRole()", () =>{
        const engineer = new Engineer("Tristan",115,"Tristan@Email.com","github.com/tristan");
        expect(engineer.getRole()).toEqual("Engineer");
    });

});