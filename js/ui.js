//ui class
class UI {
    constructor() {
      this.profile = document.querySelector("#profile");
    }
  
    showProfile(user) { //method 1

      this.clearAlert();//call her method

      this.profile.innerHTML = `
          <div class="card card-body mb-3">
          <div class="row">
              <div class="col-md-3">
                  <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                  <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
              </div>
              <div class="col-md-9">
                  <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
                  <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
                  <span class="badge bg-success">Followers: ${user.followers}</span>
                  <span class="badge bg-info">Following: ${user.following}</span>
                  <br><br>
                  <ul class="list-group">
                      <li class="list-group-item">Company: ${user.company}</li>
                      <li class="list-group-item">Website/Blog: ${user.blog}</li>
                      <li class="list-group-item">Location: ${user.location}</li>
                      <li class="list-group-item">Member Since: ${user.created_at}</li>
                  </ul>
              </div>
          </div>
      </div>`;
    }
    clearProfile(){ //method 2
      this.profile.innerHTML = "";

    }
    showAlert(message, className){ //method 3
      this.clearAlert();//call her method
      this.clearProfile();//call her method
      let div = document.createElement("div");
      div.className = className;
      div.appendChild(document.createTextNode(message));
      let container = document.querySelector(".searchContainer");
      let search = document.querySelector(".search");
      container.insertBefore(div, search);
    }
    clearAlert() { 
      let currAlert = document.querySelector(".alert");
      if (currAlert) {
        currAlert.remove(); //remove prv alert
      
    }
   
  }
}