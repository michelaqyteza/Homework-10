const Manager = require("../lib/manager")
const Intern = require("../lib/intern")
const Engineer = require("../lib/engineer")
const fs = require("fs");



class generateHtml {
    constructor(name, id, email, totalCards){
        this.name = name;
        this.id = id;
        this.email = email;
        this.totalCards = totalCards;
    }
}

function generateHtml(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team profile generator</title>
</head>
<body>
<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
    <h6 class="card-role">Manager</h6>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.id}</li>
      <li class="list-group-item">Email: ${data.email}</li>
      <li class="list-group-item">Office Number${data.officeNumber}</li>
    </ul>
</div>

</body>
</html>
`
}

module.exports = {
    generateHtml
}