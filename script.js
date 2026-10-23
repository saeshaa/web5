
var userProfile = {
    name: "Saida",
    birthYear: 2008,
    isDeveloper: true,
    hobbies: ["Coding", "Reading", "Gaming"]
};


var currentYear = 2026;
var age = currentYear - userProfile.birthYear;


document.getElementById("usernameInput").value = userProfile.name;
document.getElementById("birthYearInput").value = userProfile.birthYear;

document.getElementById("displayName").innerText = userProfile.name;
document.getElementById("displayBirthYear").innerText = userProfile.birthYear;
document.getElementById("displayAge").innerText = age;


console.log("User Profile Object:", userProfile);
console.log("Calculated Age:", age);



var hobbiesList = document.getElementById("hobbiesList");

function renderHobbies() {
    hobbiesList.innerHTML = ""; // Clear current list
    for (var i = 0; i < userProfile.hobbies.length; i++) {
        var li = document.createElement("li");
        li.innerText = userProfile.hobbies[i];
        hobbiesList.appendChild(li);
    }
}


renderHobbies();



var profileForm = document.getElementById("profileForm");

profileForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page from refreshing

    
    var enteredName = document.getElementById("usernameInput").value;
    var enteredYear = Number(document.getElementById("birthYearInput").value);

    
    userProfile.name = enteredName;
    userProfile.birthYear = enteredYear;

    
    var newAge = 2026 - userProfile.birthYear;

    
    document.getElementById("displayName").innerText = userProfile.name;
    document.getElementById("displayBirthYear").innerText = userProfile.birthYear;
    document.getElementById("displayAge").innerText = newAge;

    alert("Profile updated successfully!");
});



var addItemBtn = document.getElementById("addItemBtn");

addItemBtn.addEventListener("click", function() {
    var newItemText = document.getElementById("newItemInput").value;

    if (newItemText !== "") {
        userProfile.hobbies.push(newItemText); // Add to array
        renderHobbies(); // Refresh list display
        document.getElementById("newItemInput").value = ""; // Clear input
    } else {
        alert("Please type a hobby first!");
    }
});



var removeItemBtn = document.getElementById("removeItemBtn");

removeItemBtn.addEventListener("click", function() {
    if (userProfile.hobbies.length > 0) {
        userProfile.hobbies.pop(); // Remove last item from array
        renderHobbies(); // Refresh list display
    } else {
        alert("The list is already empty!");
    }
});