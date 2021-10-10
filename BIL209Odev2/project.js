const form = document.getElementById("person-form");
const firstNameElement = document.getElementById("firstName");
const lastNameElement = document.getElementById("lastName");
const emailElement = document.getElementById("mail");
const phoneElement = document.getElementById("phone");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-persons");

eventListener();

function eventListener(){

    form.addEventListener("submit",addPerson);
    document.addEventListener("DOMContentLoaded",function() {
        let persons = Storage.getPersonsFromStorage();
          UI.loadAllPersons(persons);
    })
    cardBody.addEventListener("click",deletePerson);
    clear.addEventListener("click",clearAllFilms);
    

}
function addPerson(e){
    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;

    if(firstName === "" || lastName === "" || email === "" || phone === ""){
        UI.displayMessages("Tum alanlari doldurun.","danger");
    }
    else{
        const newPerson = new Person(firstName,lastName,email,phone)
        UI.addPersonToUI(newPerson);
        Storage.addPersonToStorage(newPerson);
        UI.displayMessages("Basariyla eklendi.","success")
    }
    UI.clearPerson(firstNameElement,lastNameElement,emailElement,phoneElement);
    
    e.preventDefault();  
}

function deletePerson(e) {
    
    if(e.target.id === "delete-person"){
        UI.deletePersonToUI(e.target);
        Storage.deletePersonToStorage(e.target.parentElement.previousElementSibling.
            previousElementSibling.previousElementSibling.textContent);
    }
}

function clearAllFilms() {
    UI.clearAllPersonsFromUI();
    Storage.clearAllPersonsFromStorage();
}