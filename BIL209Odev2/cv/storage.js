class Storage{

    static addPersonToStorage(newPerson){
        let persons = this.getPersonsFromStorage();

        persons.push(newPerson);
        localStorage.setItem("persons",JSON.stringify(persons));
        
    }

    static getPersonsFromStorage(){
        let persons;

        if(localStorage.getItem("persons") === null){
            persons = [];
        }
        else{
            persons = JSON.parse(localStorage.getItem("persons"));
        }

        return persons;
    }

    static deletePersonToStorage(personLastName){
        let persons = this.getPersonsFromStorage();

        persons.forEach((person,index) =>{
            if(person.lastName === personLastName){
               persons.splice(index,1);
            }
        });

        localStorage.setItem("persons",JSON.stringify(persons));

    }

    static clearAllPersonsFromStorage(){
        localStorage.removeItem("persons");
    }

}