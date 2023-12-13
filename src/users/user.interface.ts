//define the structure of the data

export interface User {
    username : string,
    email : string,
    password : string
}

export interface UnitUser extends User {
    id : string
}

export interface Users {
    [key : string] : UnitUser
}

// This code defines three TypeScript interfaces:

// The User interface represents a basic user object with three properties:
// username, which is a string representing the username of the user.
// email, which is a string representing the email address of the user.
// password, which is a string representing the password of the user.

// The UnitUser interface extends the User interface and adds an id property:
// id, which is a string representing the unique identifier of the user.

// The Users interface represents a collection of user objects with dynamic keys:
// [key: string] indicates that the keys of the Users object can be any string.
// The values of the Users object are of type UnitUser, which means each user object in the collection should conform to the UnitUser interface.
// In simpler terms, these interfaces define the structure and types of user objects. The User interface defines the basic properties of a user,
// while the UnitUser interface adds an id property to represent a user with a unique identifier. 
//The Users interface represents a collection of user objects, where the keys are strings and the values are UnitUser objects