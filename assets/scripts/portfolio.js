// create document.onload?? to make sure jquery isn't executed until page is load

$(document).ready(init);

function init(){
// Once loaded, iterates over the array and creates a card for each project  
// TODO: include data-index attribute for index in the projects array for the corresponding project
    projectList.forEach((project, index) =>{

    let projectCard = $(`
    <div class="card myProject">
        <img src="${project.media}" class="card-img-top" alt="${project.title}">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.desc}<br />
          <a href="#" data-id="${index}" class="btn btn-primary click-modal" data-toggle="modal" data-target="#projectDisp">Read More</a>
        </div>
    </div>
    `);
    $("#cards-row").append(projectCard);
  })

// pass corresponding data into that modal based on the index position
$(".click-modal").click(event => {
    let projIdx = $(event.target).data("id");
    $("#disp-title").text(projectList[projIdx].title);
    $("#disp-desc").text(projectList[projIdx].desc);
    $("#depl-link").text(projectList[projIdx].deplUrl);
    $("#repo-link").text(projectList[projIdx].repoUrl);
    $("#disp-story").text(projectList[projIdx].userStory);
    $("#disp-award").text(projectList[projIdx].award)
  });
};

