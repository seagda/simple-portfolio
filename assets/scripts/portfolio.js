// create document.onload?? to make sure jquery isn't executed until page is load

$(document).ready(init);

function init(){
// Once loaded, iterates over the array and creates a card for each project object 
    projectList.forEach((project, index) =>{
        
    let projectCard = $(`
    
    <div class="card myProject">
      <img src="${project.media}" class="card-img-top" alt="${project.title}">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.desc}<br />
          <a href="#" data-index="${index}" class="btn btn-primary" data-toggle="modal" data-target="#projectDisp">Read More</a>
        </div>
    </div>
    `);
    $("#cards-row").append(projectCard);
  })
};





// TODO: include data-index attribute for index in the projects array of the corresponding object for that peroject
// TODO: pass corresponding data into that modal based on the index position

