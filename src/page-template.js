const fs = require("fs");

const generateBuild = data => {
    console.log(data);
    var body = "";
    data.forEach(member => {

    // for (var i = 0; i < data.length; i++)
    if (member.getRole() === "Manager") {
        var card = `
        <div class="row mb-4">
            <div class="card">
                <div class="col">
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
    `;

        body += card;

    } else if (member.getRole() === "Engineer") {
        var card = `
        <div class="row mb-4">
            <div class="card">
                <div class="col">
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
    `;

        body += card;

    } else {
        var card = `
        <div class="row mb-4">
            <div class="card">
                <div class="col">
                    <h1>${data[i].getName()}<br>
                        ${data[i].getRole()}</h1>
                </div>
            <div class="card-content">
                <div>
                    <h3>${data[i].getId()}</h3>
                </div>
                <div>
                    <h3>${data[i].getSchool()}</h3>
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
    // console.log(templateData);
    // const { name } = templateData;
    // console.log(name);

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