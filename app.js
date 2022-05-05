// findUserByUsername
// Write a function called findUserByUsername which accepts an array of objects, each with a key of username, and a string.
//  The function should return the first object with the key of username that matches the string passed to the function. 
// If the object is not found, return undefined.

function findUserByUsername(array, username) {
    return array.find(function (user) {
        return user.username === username;
    });
}



// removeUser
// Write a function called removeUser which accepts an array of objects, each with a key of username, and a string. 
// The function should remove the object from the array and return this object. 
// If the object is not found, return undefined.

function removeUser(array, username) {
    let index = array.findIndex(function (user) {
        return user.username === username;
    })
    if (index === -1) return;

    return array.splice(index, 1)[0];
}