import {v4 as uuidv4} from 'uuid';

let users = []

export const getUsers = (req,res) => {
    res.send(users);
}

export const createUsers = (req,res) => {
    const user = req.body;
    const userID = uuidv4();
    const newUser = { ...user, id: userID}

    users.push(newUser);
    res.send(users);
}

export const getUserById = (req,res) => {
   const {id} = req.params;
   const user = users.find((user) => user.id === id);

   res.send(user);
}

export const deleteUserById = (req,res) => {
    const id = req.params.id;
    users = users.filter((user) => user.id !== id); 
    res.send(users);
}

export const updateUserById = (req,res) => {
    const id = req.params.id;
    const oldUser = users.find((user) => user.id === id);
    const {firstName, lastName, age} = req.body;

    if(firstName) 
        oldUser.firstName = firstName;
    if(lastName)
        oldUser.lastName = lastName;
    if(age)
        oldUser.age = age;

    res.send(users);
}