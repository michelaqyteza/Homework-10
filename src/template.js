function generateHtml(managers, engineers, interns) {
    totalEngineers = engineers.length;
    totalInterns = interns.length;
    totalCards = totalEngineers + totalInterns + 1;
    //let manager = generateHtml(manager[0].manager, manager[0].managerId, manager[0].manageEmail, totalCards);

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link rel="stylesheet" href="style.css">
    <title>Team profile generator</title>
</head>
<body>
<div class= "container w-100">
    <div class= "row">
    <div class="col header text-white rounded-top"><h1> TEAM PROFILE GENERATOR </h1></div>
    </div>
    <div class="row">
      <div class="col-4">
        ${createManager(managers)}
      </div>
      <div class="col-4">
      ${createEngineers(engineers)}
      </div>
      <div class="col-4">
      ${createInterns(interns)}
    </div>`
}
//card for Manager
const createManager = (managers) => {
    let card = "";
    managers.forEach(newManager => {
        card = `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title"> ${newManager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-users"></i> Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${newManager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${newManager.getEmail()}">${newManager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${newManager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`
    })
    return card
}
//card for engineer
const createEngineers = (engineers) => {
    let card = "";
    engineers.forEach(newEngineer => {
        card += `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${newEngineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-cogs"></i> Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${newEngineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${newEngineer.getEmail()}"> ${newEngineer.getName()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${newEngineer.getGithub()}" target="_blank">${newEngineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>\n`
    })
    return card;
}
//card for intern
const createInterns = (interns) => {
    let card = "";
    interns.forEach(newIntern => {
        card += `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title"> ${newIntern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-school"></i> Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${newIntern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${newIntern.getEmail()}">${newIntern.getEmail()}</a></li>
                <li class="list-group-item">School: ${newIntern.getSchool()}</li>
            </ul>
        </div>
    </div>\n`
    })
    return card
}

module.exports = {
    generateHtml
};