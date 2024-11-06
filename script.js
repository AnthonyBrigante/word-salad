let userName = prompt('what is your name?');
let userAge = prompt('How old are you?')
let userEvent = prompt('Name a past event')
let userSynonym = prompt('Pick a synonym for hard')
let userPerson = prompt('Pick a historical figure that has something to dp with your event')
console.log(userName)
console.log(userAge)
console.log(userEvent)
console.log(userSynonym)
console.log(userPerson)

let myStory = `Hello, ${userName}, How are you doing today? How does it feel to be ${userAge} years old? OH MY GOD, is that a time machine? HOP IN! what do you want to do?...
Great idea lets go reverse ${userEvent} this is going to be pretty ${userSynonym}. Hey look its ${userPerson}`
console.log(myStory)

document.getElementById('story').innerHTML = myStory;