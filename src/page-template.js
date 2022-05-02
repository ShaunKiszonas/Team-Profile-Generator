const generatePage = (team) => {
    var html = '';

    for (let i = 0; i < team.length; i++) {
        var position = team[i].getRole();
        var label;
        var value;

        switch (position) {
            case 'Manager':
                label = 'Office Number';
                value = team[i].officeNumber;
                break;
            case 'Engineer':
                label = 'Github';
                value = `<a href="https://github.com/${team[i].github}">${team[i].github}</a>`;
                break;
            case 'Intern':
                label = 'School';
                value = team[i].school;
                break;
        }

        html += `<div class="employee">
        <div class="employee-heading">
            <h2 class="employee-name">${team[i].name}</h2>
            <img class="employee-icon" src="" alt="">
            <h2 class="employee-position">${position}</h2>
        </div>
        <div class="employee-info">
            <ul>
                <li>ID: ${team[i].id}</li>
                <li>Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                <li>${label}: ${value}</li>
            </ul>
        </div>
    </div>`;
    }

    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <h1 class="header">My Team</h1>
    <section class="team">
        ${html}
    </section>
</body>

</html>`
}

module.exports = generatePage;