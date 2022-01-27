// const person: {
//     name: string; 
//     age: number;
//     hobbies: string[];
//     role: [number,string];
// } = {
// // const person = {    
//     name: 'Katene',
//     age: 21,
//     hobbies: ['Music', 'Cooking'],
//     role: [2, 'author']
// };

enum Role {ADMIN = 'ADMIN', READ_ONLY = 'READ ONLY' , AUTHOR= 'AUTHOR'} ;

const person = {    
    name: 'Katene',
    age: 21,
    hobbies: ['Music', 'Cooking'],
    role: Role.ADMIN
};

let favouriteActivities: any[];


console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}

if (person.role === Role.ADMIN){
    console.log("You are a ", Role.ADMIN)
}