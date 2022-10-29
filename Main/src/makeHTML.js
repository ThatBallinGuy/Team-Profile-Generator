const generateTeam = data => {
    var html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <script src="https://kit.fontawesome.com/4cf7371fb7.js" crossorigin="anonymous"></script>
    <title>Team Profile</title>
</head>
<body>
    <header class="bg-info center">
        <h1 class="text-center text-light">My Team</h1>
    </header>
    <main class="d-flex flex-wrap justify-content-around">`;
    
    // create the manager html
    const generateManager = manager => {
        html+= `<div class="card d-flex bg-secondary" style="width: 20rem;">
            <div class="card-header bg-light">
            ${manager.name} <br/><i class="fa-solid fa-mug-hot"></i> Manager 
            </div>
            <div class="p-4">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item m-1">ID: ${manager.id}</li>
                    <li class="list-group-item m-1">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item m-1">Office Number: ${manager.officeNumber}</li>
                  </ul>
            </div>
          </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        html+= `<div class="card d-flex bg-secondary" style="width: 20rem;">
            <div class="card-header bg-light">
            ${engineer.name} <br/><i class="fa-solid fa-glasses"></i> Engineer 
            </div>
            <div class="p-4">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item m-1">ID: ${engineer.id}</li>
                    <li class="list-group-item m-1">Email: <a href="mailto:${engineer.email}"></a>${engineer.email}</li>
                    <li class="list-group-item m-1">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                  </ul>
            </div>
          </div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        html+= `<div class="card d-flex bg-secondary" style="width: 20rem;">
        <div class="card-header bg-light">
        ${intern.name} <br/><i class="fa-solid fa-user-graduate"></i> Intern 
        </div>
        <div class="p-4">
            <ul class="list-group list-group-flush">
                <li class="list-group-item m-1">ID: ${intern.id}</li>
                <li class="list-group-item m-1">Email: <a href="mailto:${intern.email}"></a>${intern.email}</li>
                <li class="list-group-item m-1">School: ${intern.school}</li>
              </ul>
        </div>
      </div>
        `;
    };

    // use the team array to generate pieces of html based on the employee role
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].getRole());
        const element = data[i];
        switch (element.getRole()) {
            case "Manager":
                generateManager(element)
                break;
        
            case "Engineer":
                generateEngineer(element)
                break;
        
            case "Intern":
                generateIntern(element)
                break;
        
            default:
                break;
        }
        
    }
    html+=`</main>

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"></script>

    </body>
    </html>
    `;

    return html;
}

module.exports = generateTeam;