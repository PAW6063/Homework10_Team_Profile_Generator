function managerCard(member) {
  return `<div class="col-sm-12 col-md-5 col-lg-3 card text-dark bg-light mb-3">
  <div class="card-header">
      <h2>${member.getName()}</h2>
      <h3>${member.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${member.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${member.getOfficeNumber()}</li>
        </ul>
  </div>
</div>`;
}

function engineerCard(member) {
  return `<div class="col-sm-12 col-md-5 col-lg-3 card text-dark bg-light mb-3">
  <div class="card-header">
      <h2>${member.getName()}</h2>
      <h3>${member.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${member.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
          <li class="list-group-item">GitHub: ${member.getGithub()}</li>
        </ul>
  </div>
</div>`;
}

function internCard (member){
  return `<div class="col-sm-12 col-md-5 col-lg-3 card text-dark bg-light mb-3">
  <div class="card-header">
      <h2>${member.getName()}</h2>
      <h3>${member.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${member.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
          <li class="list-group-item">School: ${member.getSchool()}</li>
        </ul>
  </div>
</div>`;
}

function renderCardSection(team) {
  let cards = '';
  
  for(member of team){
    if(member.getRole() === 'Manager'){
      cards += managerCard(member);
    }
    if(member.getRole() === 'Engineer'){
      cards += engineerCard(member);
    }
    if(member.getRole() === 'Intern'){
      cards += internCard(member);
    }
  }

  return cards;
}

function generateHTML(team) {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="./styles.css" />
        <title>The JS Team</title>
      </head>
    
      <body>
      <div class="jumbotron jumbotron-fluid jumbotron">
          <div class="container">
              <h1 class="display-2 text-center jumbotron-header">The JS Team</h1>
          </div>
      </div>
  
      
      <div class="container">
          <div class="row justify-content-center">
              ${renderCardSection(team)}
          </div>
      </div>
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="./script.js"></script>
      </body>
    </html>`;
  }
  
  module.exports = generateHTML;
  