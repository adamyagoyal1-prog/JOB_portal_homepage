let titleInput = document.querySelector("#title");
let companyInput = document.querySelector("#company");
let locationInput = document.querySelector("#location");
let descInput = document.querySelector("#description");

let btn = document.querySelector("#submitBtn");
let jobList = document.querySelector("#jobList");

btn.addEventListener("click", addJob);

function addJob() {

    let title = titleInput.value;
    let company = companyInput.value;
    let location = locationInput.value;
    let description = descInput.value;

    if(title=="" || company=="" || location=="" || description==""){
        alert("Please fill all fields");
        return;
    }

    // Create Job Card
    let card = document.createElement("div");
    card.classList.add("job-card");

    let h3 = document.createElement("h3");
    h3.innerText = title;

    let p1 = document.createElement("p");
    p1.innerText = "Company: " + company;

    let p2 = document.createElement("p");
    p2.innerText = "Location: " + location;

    let p3 = document.createElement("p");
    p3.innerText = description;

    // Edit Button
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    editBtn.addEventListener("click", function(){

        let newTitle = prompt("Edit Job Title", h3.innerText);
        let newCompany = prompt("Edit Company", company);
        let newLocation = prompt("Edit Location", location);
        let newDesc = prompt("Edit Description", description);

        if(newTitle && newCompany && newLocation && newDesc){
            h3.innerText = newTitle;
            p1.innerText = "Company: " + newCompany;
            p2.innerText = "Location: " + newLocation;
            p3.innerText = newDesc;
        }
    });

    // Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function(){
        card.remove();
    });

    // Append Elements
    card.appendChild(h3);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(editBtn);
    card.appendChild(deleteBtn);

    jobList.appendChild(card);

    // Clear Form
    titleInput.value = "";
    companyInput.value = "";
    locationInput.value = "";
    descInput.value = "";
}
