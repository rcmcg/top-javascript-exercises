const findTheOldest = function(people) {
    let oldestPerson = people[0];
    for (const person of people.slice(1, people.length)) {
        let personAge = calculateAge(person);
        let oldestPersonAge = calculateAge(oldestPerson)
        if (personAge > oldestPersonAge) {
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

const calculateAge = function(person) {
    if (Object.hasOwn(person, 'yearOfDeath')) {
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        return new Date().getFullYear() - person.yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
