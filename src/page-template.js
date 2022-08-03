const fs = require("fs");

const generateBuild = data => {
    console.log(data);
    var body = "";
    data.forEach(member => {

    if (member.getRole() === "Manager") {
        var card = `
        <div class="row">
            <div class="col-sm-6">
                <div class="card" style="width: 24rem;">
                    <div class="card-body">
                        <h1>${member.getName()}<br>
                            ${member.getRole()}</h1>
                    </div>
                <div class="card-content">
                    <div>
                        <h3>${member.getId()}</h3>
                    </div>
                    <div>
                        <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
                        <p>${member.getOfficeNumber()}</p>
                    </div>
                </div>
                </div> 
            </div>
        </div>       
    `;

        body += card;

    } else if (member.getRole() === "Engineer") {
        var card = `
    <div class="row">
        <div class="col-sm-6">
            <div class="card" style="width: 24rem;">
                <div class="card-body">
                    <h1>${member.getName()}<br>
                        ${member.getRole()}</h1>
                </div>
            <div class="card-content">
                <div>
                    <h3>${member.getId()}</h3>
                </div>
                <div>
                    <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
                    <p>Github: <a target="_blank" href="${member.getGithub()}">${member.getGithub()}</a></p>
                </div>
            </div>
            </div> 
        </div>
    </div>
    `;

        body += card;

    } else {
        var card = `
    <div class="row">
        <div class="col-sm-6">
            <div class="card" style="width: 24rem;">
                <div class="card-body">
                    <h1>${member.getName()}<br>
                        ${member.getRole()}</h1>
                </div>
            <div class="card-content">
                <div>
                    <h3>${member.getId()}</h3>
                </div>
                <div>
                    <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
                    <p>${member.getSchool()}</p>
                </div>
            </div>
            </div> 
        </div>
    </div>
    `;

        body += card;
    }
});

    return body;

};

module.exports = templateData => {

    return `
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./src/style.css" />
    </head>
    
    <body>
        <div class="container">
            ${generateBuild(templateData)}
        </div>
    </body>
    </html>
    `;
};