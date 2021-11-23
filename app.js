console.log("app loaded");
loadDinner();




var DINNER = []

var choiceButton = document.querySelector("#choice-button");
console.log("choice button:", choiceButton);
var loginButton = document.querySelector("#barLogin-button");
var createButton = document.querySelector("#barCreate-button");

choiceButton.onclick = function ()
{
    var data = '';
    var weekday = document.querySelector('#day-choice');
    var timeday = document.querySelector('#time-choice');
    var meat = document.querySelector('#protein-choice');
    var dish = document.querySelector('#side-choice');
    var bev = document.querySelector('#beverage-choice');
    var dezert = document.querySelector('#dessert-choice');
    if (weekday.value != "")
    {
        data += 'day=' + encodeURIComponent(weekday.value) + '&';
        weekday.value = "";
    }
    if (timeday.value != "")
    {
        data += 'time=' + encodeURIComponent(timeday.value) + '&';
        timeday.value = "";
    }
    if (meat.value != "")
    {
        data += 'protein=' + encodeURIComponent(meat.value) + '&';
        meat.value = "";
    }
    if (dish.value != "")
    {
        data += 'side=' + encodeURIComponent(dish.value) + '&';
        dish.value = "";
    }
    if (bev.value != "")
    {
        data += 'beverage=' + encodeURIComponent(bev.value) + '&';
        bev.value = "";
    }
    if (dezert.value != "")
    {
        data += 'dessert=' + encodeURIComponent(dezert.value) + '&';
        dezert.value = "";
    }

    createDinnerOnServer(data)
}

createButton.onclick = createUserAccount;
function createUserAccount() 
{
    //create the divs that pop up
    var createDiv = document.createElement('div');
    var createPrompt = document.createElement('div');
    createDiv.id = "createBox";
    createPrompt.id = "createPrompt";
    document.querySelector("body").appendChild(createDiv);
    createDiv.appendChild(createPrompt);

    //create the texts and input in the popup
    var emailText = document.createElement('p');
    var emailInput = document.createElement('input');
    var passwordText = document.createElement('p');
    var passwordInput = document.createElement('input');
    var firstNameText = document.createElement('p');
    var firstNameInput = document.createElement('input');
    var lastNameText = document.createElement('p');
    var lastNameInput = document.createElement('input');
    var propmtHeader = document.createElement('p');
    emailText.id = "emailText";
    passwordText.id = "passwordText";
    emailInput.id = "emailInput";
    passwordInput.id = "passwordInput";
    firstNameText.id = "firstNameText";
    lastNameText.id = "lastNameText";
    firstNameInput.id = "firstNameInput";
    lastNameInput.id = "lastNameInput";
    propmtHeader.id = "promptHeader";
    propmtHeader.innerHTML = "Create a user account";
    emailText.innerHTML = "Please enter your email address:";
    passwordText.innerHTML = "Please enter a password:";
    firstNameText.innerHTML = "Please enter your first name:";
    lastNameText.innerHTML = "Please enter your last name:";
    createPrompt.appendChild(emailText);
    createPrompt.appendChild(emailInput);
    createPrompt.appendChild(passwordText);
    createPrompt.appendChild(passwordInput);
    createPrompt.appendChild(firstNameText);
    createPrompt.appendChild(firstNameInput);
    createPrompt.appendChild(lastNameText);
    createPrompt.appendChild(lastNameInput);
    createPrompt.appendChild(propmtHeader);


    //create the buttons for the popup
    var storeButton = document.createElement('button');
    storeButton.innerHTML = "Create login";
    storeButton.classList.add("AllButton");
    storeButton.id = "store-button";
    createPrompt.appendChild(storeButton);
    storeButton.onclick = function ()
    {
        var data = "";
        if (emailInput.value != '')
        {
            data += 'email=' + encodeURIComponent(emailInput.value) + '&';
        }
        if (passwordInput.value != '')
        {
            data += 'password=' + encodeURIComponent(passwordInput.value) + '&';
        }
        if (firstNameInput.value != '')
        {
            data += 'firstName=' + encodeURIComponent(firstNameInput.value) + '&';
        }
        if (lastNameInput.value != '')
        {
            data += 'lastName=' + encodeURIComponent(lastNameInput.value) + '&';
        }
        console.log("Create login button clicked");
        createUserOnServer(data);
        
        
    };  
    
    var closeButton = document.createElement('button');
    closeButton.innerHTML = "Close";
    closeButton.classList.add("AllButton");
    closeButton.id = "close-button";
    createPrompt.appendChild(closeButton)
    closeButton.onclick = function ()
    {
        loadDinner();
        createDiv.remove();
        
    }
    
}

loginButton.onclick = onLogin;
function onLogin()
{
    var passwordDiv = document.createElement('div');
    var passwordPrompt = document.createElement('div');
    var propmtHeader = document.createElement('p');
    passwordDiv.id = "passwordBox";
    passwordPrompt.id = "passwordPrompt"
    document.querySelector("body").appendChild(passwordDiv);
    passwordDiv.appendChild(passwordPrompt);

    //create the texts and input in the popup
    var emailText = document.createElement('p');
    var emailInput = document.createElement('input');
    var passwordText = document.createElement('p');
    var passwordInput = document.createElement('input');
    propmtHeader.id = "promptHeader";
    emailText.id = "emailText";
    passwordText.id = "passwordText";
    emailInput.id = "emailInput";
    passwordInput.id = "passwordInput";
    emailText.innerHTML = "Please enter your email address:";
    passwordText.innerHTML = "Please enter a password:";
    propmtHeader.innerHTML = "Enter login info";
    passwordPrompt.appendChild(emailText);
    passwordPrompt.appendChild(emailInput);
    passwordPrompt.appendChild(passwordText);
    passwordPrompt.appendChild(passwordInput);
    passwordPrompt.appendChild(propmtHeader);

    //create the buttons for the popup
    var logButton = document.createElement('button');
    logButton.innerHTML = "Login";
    logButton.classList.add("AllButton");
    logButton.id = "login-button";
    passwordPrompt.appendChild(logButton);
    logButton.onclick = function ()
    {
        var data = "";
        data += 'email=' + encodeURIComponent(emailInput.value) + '&';
        data += 'password=' + encodeURIComponent(passwordInput.value);
        console.log("login button clicked");
        createUserSession(data);
        
    };

    var closeButton = document.createElement('button');
    closeButton.innerHTML = "Close";
    closeButton.classList.add("AllButton");
    closeButton.id = "close-button1";
    passwordPrompt.appendChild(closeButton)
    closeButton.onclick = function ()
    {
        passwordDiv.remove();
    }

    var profileButton = document.createElement('button');
    profileButton.innerHTML = "Create Profile";
    profileButton.classList.add("AllButton");
    profileButton.id = "profile-button";
    passwordPrompt.appendChild(profileButton);
    profileButton.onclick = function ()
    {
        console.log("Create profile button clicked");
        passwordDiv.remove();
        createUserAccount();
        
    };
}


function deleteMealOnServer(mealID)
{
    
    fetch('https://bretts-meal-planner.herokuapp.com/dinners/' + mealID, {
        // fetch options here
        method: "DELETE", // request method
        credentials: "include"
    }).then(function (response){
    loadDinner(); 
    });

}

function editMenuOnServer(data, menuID)
{
    fetch('hhttps://bretts-meal-planner.herokuapp.com/dinners/' + menuID, {
        // fetch options here
        method: "PUT",
        credentials: "include",//putt method
        credentials: "include",
        body: data, //request body with data
        headers: { "Content-Type": "application/x-www-form-urlencoded"//request header(s) (to describe body)
    }}).then(function (){
    loadDinner();
    });
}

function createUserOnServer(data)
{
    fetch('https://bretts-meal-planner.herokuapp.com/users', {
        method: "POST",
        credentials: "include",
        body: data,
        headers: { "Content-Type": "application/x-www-form-urlencoded"
    }}).then(function (response){
        var createLoginDiv1 = document.querySelector("#createPrompt");
        var createLoginDiv2 = document.querySelector("#createBox")
        

        if (response.status == 401)
        {
            var invalidID = document.createElement("div");
            invalidID.innerHTML = "Email already exists. Please try again.";
            invalidID.id = "invalidID";
            document.querySelector("#emailInput").value = "";
            document.querySelector("#passwordInput").value = "";
            document.querySelector("#firstNameInput").value = "";
            document.querySelector("#lastNameInput").value = "";
            createLoginDiv1.appendChild(invalidID);
        }

        if (response.status == 201)
        {
            createLoginDiv2.remove();
            loadDinner();
        }

       


    });
}

function createDinnerOnServer(data)
{
    //data += "" - do it on multiplelines
    fetch('https://bretts-meal-planner.herokuapp.com/dinners', {
        // fetch options here
        method: "POST",//post method
        credentials: "include",
        body: data, //request body with data
        headers: { "Content-Type": "application/x-www-form-urlencoded"//request header(s) (to describe body)
    }}).then(function (response){
    loadDinner(); 
    });
}

function createUserSession(data)
{
    fetch('https://bretts-meal-planner.herokuapp.com/sessions', {
        // fetch options here
        method: "POST",//putt method
        credentials: "include",
        body: data, //request body with data
        headers: { "Content-Type": "application/x-www-form-urlencoded"//request header(s) (to describe body)
    }}).then(function (response){
        var passDiv = document.querySelector("#passwordPrompt");
        var loginDiv = document.querySelector("#passwordBox")
        

        if (response.status == 401)
        {
            var invalidLogin = document.createElement("div");
            invalidLogin.innerHTML = "Incorrect Email or Password. Please try again.";
            invalidLogin.id = "invalidLogin";
            document.querySelector("#emailInput").value = "";
            document.querySelector("#passwordInput").value = "";
            passDiv.appendChild(invalidLogin);
        }

        if (response.status == 201)
        {
            loginDiv.remove();
            loadDinner();
        }

        
    });
}

function loadDinner()
{
    fetch("https://bretts-meal-planner.herokuapp.com/dinners", {credentials: "include"}).then(function (response)
    {
        if (response.status == 401)
        {
            onLogin();
            return  
        }
        else
        {
            response.json().then(function (dataFromServer) //getting json data
            {
                DINNER = dataFromServer;
                var dinnerChoice = document.querySelector('#dinner-choice');
                var sundayChoice = document.querySelector('#sunday');
                var mondayChoice = document.querySelector('#monday');
                var tuesdayChoice = document.querySelector('#tuesday');
                var wednesdayChoice = document.querySelector('#wednesday');
                var thursdayChoice = document.querySelector('#thursday');
                var fridayChoice = document.querySelector('#friday');
                var saturdayChoice = document.querySelector('#saturday');
                var todayChoice = document.querySelector('#Today');
                //dinnerChoice.appendChild(eachDinner)
                
                dinnerChoice.innerHTML = ""; //clears the list each time an element is added or deleted
                sundayChoice.innerHTML = "<p>Sunday</p>";            //removeChildNodes(dinnerChoice);
                mondayChoice.innerHTML = "<p>Monday</p>";
                tuesdayChoice.innerHTML = "<p>Tuesday</p>";
                wednesdayChoice.innerHTML = "<p>Wednesday</p>";
                thursdayChoice.innerHTML = "<p>Thursday</p>";
                fridayChoice.innerHTML = "<p>Friday</p>";
                saturdayChoice.innerHTML = "<p>Saturday</p>";
                todayChoice.innerHTML = "<p>Today</p>";
                
                DINNER.forEach(function (menuItem)
                {
                    var eachDinner = document.createElement("li");
                    var dayDiv = document.createElement("div");
                    dayDiv.innerHTML = menuItem.day;
                    dayDiv.classList.add('week-day')
                    dayDiv.id = "dayDiv"
                    eachDinner.appendChild(dayDiv);
                    var proteinDiv = document.createElement("div");
                    proteinDiv.innerHTML = menuItem.protein;
                    proteinDiv.classList.add('meat')
                    if (menuItem.protein == "Beef" || menuItem.protein == "beef")
                    {
                        eachDinner.style.backgroundColor = "rgb(255, 28, 40, .7)";
                    }
                    if (menuItem.protein == "Chicken" || menuItem.protein == "chicken")
                    {
                        eachDinner.style.backgroundColor = "rgb(247, 211, 5, .7)";
                        
                    }
                    if (menuItem.protein == "Seafood" || menuItem.protein == "seafood")
                    {
                        eachDinner.style.backgroundColor = "rgb(245, 113, 172, .7)";
                    }
                    eachDinner.appendChild(proteinDiv);
                    var timeDiv = document.createElement("div");
                    timeDiv.innerHTML = menuItem.time;
                    timeDiv.classList.add('meal-time')
                    eachDinner.appendChild(timeDiv);
                    var sideDiv = document.createElement("div");
                    sideDiv.innerHTML = menuItem.side;
                    sideDiv.classList.add('side-dish')
                    eachDinner.appendChild(sideDiv);
                    var beverageDiv = document.createElement("div");
                    beverageDiv.innerHTML = menuItem.beverage;
                    beverageDiv.classList.add('drink')
                    eachDinner.appendChild(beverageDiv);
                    var dessertDiv = document.createElement("div");
                    dessertDiv.innerHTML = menuItem.dessert;
                    dessertDiv.classList.add('dessert')
                    eachDinner.appendChild(dessertDiv);

                    var deleteButton = document.createElement("button");
                    deleteButton.innerHTML = "Delete";
                    deleteButton.classList.add("AllButton")
                    deleteButton.id = "delete-button"
                    deleteButton.onclick = function ()
                    {
                        console.log("delete button clicked");
                        if (confirm("Are you sure you want to delete " + menuItem.day + "'s " + menuItem.protein + "?"))
                        {
                            console.log(menuItem.id)
                            deleteMealOnServer(menuItem.id);
                        }
                    };

                    var editButton = document.createElement("button");
                    editButton.innerHTML = "Edit";
                    editButton.classList.add("AllButton")
                    editButton.id = "edit-button"
                    editButton.onclick = function()
                    {
                        
                        console.log("Edit button clicked")
                        //if (confirm("Are you sure you want to edit "+ menuItem.day + "'s " + menuItem.protein + "?"))
                        //{
                            dayInput = document.querySelector("#day-choice");
                            dayInput.value = menuItem.day;
                            timeInput = document.querySelector("#time-choice");
                            timeInput.value = menuItem.time;
                            proteinInput = document.querySelector("#protein-choice");
                            proteinInput.value = menuItem.protein;
                            sideInput = document.querySelector("#side-choice");
                            sideInput.value = menuItem.side;
                            bevInput = document.querySelector("#beverage-choice");
                            bevInput.value = menuItem.beverage;
                            desInput = document.querySelector("#dessert-choice");
                            desInput.value = menuItem.dessert;
                            
                            var saveButton = document.createElement("button");
                            saveButton.innerHTML = "Save";
                            saveButton.id = "save-button";
                            saveButton.classList.add("AllButton");
                            saveButton.style.gridColumn = "2 / 2";
                            saveButton.style.gridRow = "8 / 8";
                            saveButton.onclick = function()
                            {
                                if (confirm("Are you sure you want to edit "+ menuItem.day + "'s " + menuItem.protein + "?"))
                                {
                                        var data = '';
                                        var weekday = document.querySelector('#day-choice');
                                        var timeday = document.querySelector('#time-choice');
                                        var meat = document.querySelector('#protein-choice');
                                        var dish = document.querySelector('#side-choice');
                                        var bev = document.querySelector('#beverage-choice');
                                        var dezert = document.querySelector('#dessert-choice');
                                        data += 'day=' + encodeURIComponent(weekday.value) + '&';
                                        weekday.value = "";
                                        data += 'time=' + encodeURIComponent(timeday.value) + '&';
                                        timeday.value = "";
                                        data += 'protein=' + encodeURIComponent(meat.value) + '&';
                                        meat.value = "";
                                        data += 'side=' + encodeURIComponent(dish.value) + '&';
                                        dish.value = "";
                                        data += 'beverage=' + encodeURIComponent(bev.value) + '&';
                                        bev.value = "";
                                        data += 'dessert=' + encodeURIComponent(dezert.value) + '&';
                                        dezert.value = "";
                                        editMenuOnServer(data, menuItem.id)
                                        saveButton.remove()
                                }
                            }
                            save = document.querySelector("#c1");
                            save.appendChild(saveButton);
                            choiceButton.style.display = "none"
                        //}
                    };
                    eachDinner.appendChild(deleteButton);
                    eachDinner.appendChild(editButton);
                    eachDinner.style.display = "none";
                    dinnerChoice.appendChild(eachDinner);
                    addToDaysOfWeek(menuItem.day, menuItem.time, eachDinner, menuItem.protein);
                    choiceButton.style.display = "inline"
                
            })
            
        });
        
    }});
}

function removeChildNodes(parent)
{
    while (parent.firstChild)
    {
        parent.removeChild(parent.firstChild);
    }

}

function addToDaysOfWeek(day, time, dinner, protein)
{
    var upperLower = ["Monday", "monday", "Tuesday", "tuesday", "Wednesday", "wednesday", "Thursday", "thursday", "Friday", "friday", "Saturday", "saturday", "Sunday", "sunday", "Today", "Today"];
    
    
    for (var i = 0; i < upperLower.length; i += 2)
    {
        if (day == upperLower[i] || day == upperLower[i + 1])
        {
            var dayChoice = document.querySelector("#" + upperLower[i + 1]);
            var mainCourseDiv = document.createElement("div");
            mainCourseDiv.innerHTML = time;
            dayChoice.appendChild(mainCourseDiv);
            if (protein == "Seafood" || protein == "seafood")
            {
                mainCourseDiv.style.background = "rgb(245, 113, 172, .4)";
            }
            if (protein == "Beef" || protein == "beef")
            {
                mainCourseDiv.style.background = "rgb(255, 28, 40, .5)";
            }
            if (protein == "Chicken" || protein == "chicken")
            {
                mainCourseDiv.style.background = "rgb(247, 211, 5, .5)";
            
            }
            mainCourseDiv.onclick = function()
            {
                dinner.style.display = "";
                mainCourseDiv.style.display = "none";
            }
            mainCourseDiv.classList.add('dayDinnerChoice');
        }
    }
    
}