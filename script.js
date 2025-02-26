var button = document.getElementById("button");
var overlay = document.querySelector(".overlay");
var box = document.querySelector(".box");

button.addEventListener("click", function () {
    overlay.style.display = "block";
    box.style.display = "block";
});

var cancelcard = document.getElementById("cancel-card");

cancelcard.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.style.display = "none";
    box.style.display = "none";
});

// Select form inputs
// Select form inputs
var cardcontainer = document.getElementById("card-container");
var addcard = document.getElementById("add-card");
var nameinput = document.getElementById("name-input");
var locationinput = document.getElementById("location-input");
var detailsinput = document.getElementById("details-input");
var statusinput = document.getElementById("status");

// Object mapping company names to their images
var companyImages = {
    "Microsoft": "/img/microsoft.png",
    "Airbnb": "/img/airbnb.png",
    "Lilly": "/img/lilly.png",
    "Tailus": "/img/tailus.png",
    "Coty": "/img/coty.png"
};

// Auto-update image when selecting a company
nameinput.addEventListener("change", function () {
    var selectedCompany = nameinput.value;
    document.getElementById("image-preview").src = companyImages[selectedCompany] || "";
});

// Add card function
addcard.addEventListener("click", function (event) {
    event.preventDefault();

    if (!nameinput.value || !locationinput.value || !detailsinput.value || !statusinput.value) {
        alert("Please fill all fields before adding a card.");
        return;
    }

    var div = document.createElement("div");
    div.setAttribute("class", "cardbox");

    var imageurl = companyImages[nameinput.value];

    div.innerHTML = `
        <img src="${imageurl}" alt="Company Logo" class="card-image">
        <center>
            <h2>${nameinput.value}</h2>
            <h4>Location: ${locationinput.value}</h4>
            <p>${detailsinput.value}</p>
            <h5>Status: ${statusinput.value}</h5>
            <button onclick="dlt(event)">Delete</button>
        </center>`;

    cardcontainer.appendChild(div);

    overlay.style.display = "none";
    box.style.display = "none";

    document.querySelector("form").reset();
    document.getElementById("image-preview").src = ""; // Reset preview image
});

// Delete function
function dlt(event) {
    event.target.closest(".cardbox").remove();
}




