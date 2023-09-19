const users = [
 {name: "Yelyzaveta", email:"klymenko_liz@icloud.com", age: 33},
 {name: "Karolina", email:"karolina_liz@icloud.com", age: 2},
 {name: "Vladislav", email:"vladislav_liz@icloud.com", age: 9},
];
 for (const keyValuePair of Object.entries(users)) {
     console.log(keyValuePair)
};

for (const {name,email,age} of users) {
    console.log(name);
    console.log(email);
    console.log(age);
}
    
