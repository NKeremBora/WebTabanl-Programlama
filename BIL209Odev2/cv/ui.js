// function addPerson(newPerson){
//     const personList = document.getElementById("persons");

//         personList.innerHTML += `
              
//         <tr>
//             <td>${newPerson.firstName}</td>
//             <td>${newPerson.lastName}</td>
//             <td>${newPerson.email}</td>
//             <td>${newPerson.phone}</td>
//             <td><a href="#" id = "delete-person" class = "btn btn-danger">Kisiyi Sil</a></td>
//        </tr> 
//         `;
// }


class UI{


    static addPersonToUI(newPerson){
        const personList = document.getElementById("persons");

        personList.innerHTML += `
              
        <tr>
            <td>${newPerson.firstName}</td>
            <td>${newPerson.lastName}</td>
            <td>${newPerson.email}</td>
            <td>${newPerson.phone}</td>
            <td><a href="#" id = "delete-person" class = "btn btn-danger">Kisiyi Sil</a></td>
       </tr> 
        `;
        
    }

    static clearPerson(firstName,lastName,email,phone){
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        phone.value ="";
    }

    static displayMessages(message,type){
        const cardBody = document.querySelector(".card-body");

        const alert = document.createElement("div");
        alert.className = `alert alert-${type}`;
        alert.textContent = message;

        cardBody.appendChild(alert);

        setTimeout(function(){
            alert.remove();
        },1000);
    }

    static loadAllPersons(persons){
        const personList = document.getElementById("persons");
        persons.forEach(person => {
             personList.innerHTML += `
             <tr>
                 <td>${person.firstName}</td>
                 <td>${person.lastName}</td>
               <td>${person.email}</td>
                <td>${person.phone}</td>
                <td><a href="#" id = "delete-person" class = "btn btn-danger">Kisiyi Sil</a></td>
            </tr> 
            `;
        });
    }

    static deletePersonToUI(element){

        element.parentElement.parentElement.remove();
    }

    static clearAllPersonsFromUI(){
        const persons = document.getElementById("persons");

        while(persons.firstElementChild !== null){
            persons.firstElementChild.remove();
        }
    }
}