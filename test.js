const name = 'BS';
let age = 25;
const hasHobby = true;

const summarUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + 
        userName + 
        ', Age is ' + 
        userAge + 
        ' and user got hobby : ' + 
        userHasHobby
    );
};

console.log(summarUser(name, age, hasHobby));