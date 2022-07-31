const fs = require("fs");

const generateBuild = (data) => {
    console.log(data);
    var body = "";
    for (var i = 0; i < data.length; i++) {
        var card = `
        <div class="card">
            <div class="card-header">
                <h1>${data[i].getName()}<br>
                    ${data[i].getRole()}</h1>
            </div>
            <div class="card-content">
                <div>
                    <h3>
                        <a href="${data[i].getEmail()}">E-mail: ${data[i].getEmail()}</a>
                        </h3>
                </div>
                <div>
                    <h3>
                        <a href="${data[i].getGithub()}">Github: ${data[i].getGithub()}</a>
                    </h3>
                </div>
                <div>
                    <h3>${data[i].getId()}</h3>
                </div>
        `;
        body += card;
    };

return body;
}

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
        <link rel="stylsheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css" />
        <link rel="stylesheet" href="./src/style.css" />
    </head>
    
    <body>
        <header>
            <div>
            ${generateBuild(templateData)}
            </div>
        </header>
    </body>
    </html>
    `;
};