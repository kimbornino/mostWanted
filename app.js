/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    // TODO: search by name
    //searchByName(people);
    mainMenu(searchByName(),people);
    break;
    case 'no':
    searchByTraits(people);
    break;

    default:
    alert("Input not valid. Please try again.");
    app(people); // restart app
    break;
  }
}

function searchByTraits(people) {
  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation'.");
  let filteredPeople;

  switch(userSearchChoice) {
    case "height":
      filteredPeople = searchByHeight(people);
      break;
    case "weight":
      filteredPeople = searchByWeight(people);
      break;
    case "eye color":
      filteredPeople = searchByEyeColor(people);
      break;
    case "gender":
      filteredPeople = searchByGender(people);
      break;
    case "age":
      filteredPeople = searchByAge(people);
      break;
    case "occupation":
      filteredPeople = searchByOccupation(people);
      break;
    // so on and so forth
    default:
      alert("You entered an invalid search type! Please try again.");
      searchByTraits(people);
      break;
  }

  // let foundPerson = filteredPeople[0];

  for(i = 0; i < filteredPeople.length; i++)
    if(filteredPeople == 0){
      alert("no persons found");
      app();
    }
    else if(filteredPeople.length > 1){
      searchByTraits(filteredPeople);
    }
    else{
      mainMenu(filteredPeople[0]);
    }
}

function searchByWeight(people) {
  let userInputWeight = prompt("How much does the person weigh?");

  let newArray = people.filter(function (el) {
    if(el.weight == userInputWeight) {
      return true;
    }
    // return true if el.height matches userInputWeight
  });

  return newArray;
}

function searchByHeight(people) {
  let userInputHeight = prompt("How tall, in inches, is the person?");

  let newArray = people.filter(function (el) {
    if(el.height == userInputHeight) {
      return true;
    }
    // return true if el.height matches userInputHeight
  });

  return newArray;
}

function searchByEyeColor(people) {
  let userInputEyeColor = prompt("What color are the person's eyes?");

  let newArray = people.filter(function (el) {
    if(el.eyeColor == userInputEyeColor) {
      return true;
    }
    // return true if el.height matches userInputEyeColor
  });

  return newArray;
}

function searchByGender(people) {
  let userInputGender = prompt("What gender is the person?");

  let newArray = people.filter(function (el) {
    if(el.gender == userInputGender) {
      return true;
    }
    // return true if el.height matches userInputGender
  });

  return newArray;
}

function searchByOccupation(people) {
  let userInputOccupation = prompt("What is the persons occupation?");

  let newArray = people.filter(function (el) {
    if(el.occupation == userInputOccupation) {
      return true;
    }
    // return true if el.height matches userInputOccupation
  });

  return newArray;
}

function searchByAge(people) {
  let userInputAge = prompt("How old is the person?");
  let newArray = people.filter(function (el) {
    let age = getAge(el.dob);
    if(age == userInputAge) {
      return true;
    }
  });
  return newArray;
  }
  
  function getAge(dateString) {
    let dates = dateString.split("/");
    let d = new Date();
  
    let userMonth = dates[0];
    let userDay = dates[1];
    let userYear = dates[2];
  
    let curMonth= d.getMonth()+1;
    let curDay = d.getDate();
    let curYear = d.getFullYear();
  
    let age = curYear - userYear;
  
    if((curMonth < userMonth) || ( (curMonth == userMonth) && curDay < userDay)){
        age--;
    }
    return age;
  }

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }
  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    displayPerson(person);
    break;
    case "family":
    // TODO: get person's family
    getFamily(person);
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
    }
  }

function searchByName(people){

  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);


    for (var i = 0; i < data.length; i ++) {
      if (data[i].firstName === firstName && data[i].lastName === lastName){
        return data[i];

      }
    }
  }

  // TODO: find the person using the name they entered

  function getParents(person, data) {
    for (let i=0;i< person.parents.length; i++) {
      familyArray.push(person.parents[i]);
    }
  }
    
  function getSiblings(person) {
    for(let i = 0; i > data.length; i ++) {
      if(person.parents === data[i].parents){
       return data[i];
      }
    }     
  }
    
    function getSpouse(person, data) {
      if(person.currentSpouse !== []){
        // let spouse = person.currentSpouse;
        for(let i = 0; i > data.length; i++){
          if(person.currentSpouse == data[i].id){
            return data[i];
          }
        }
      }
    }

    function getChildren(person) {
      if(person.id === data[i].parents){
        familyArray += data[i];
        }    
    }
    
    function getFamily(person){
      let familyArray = [];
      familyArray = familyArray.concat(getSpouse(person, data));
      familyArray = familyArray.concat(getSiblings(person, data));
      familyArray = familyArray.concat(getParents(person, data));
      return familyArray; 
    
    }
 

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "gender: " + person.gender + "\n";
  personInfo += "dob: " + person.dob + "\n";
  personInfo += "height: " + person.height + "\n";
  personInfo += "weight: " + person.weight + "\n";
  personInfo += "eye color: " + person.eyeColor + "\n";
  personInfo += "occupation: " + person.occupation + "\n";
  personInfo += "parents: " + person.parents + "\n";
  personInfo += "current spouse: " + person.currentSpouse + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
  app();
}


// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
