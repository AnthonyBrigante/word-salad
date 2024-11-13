let userName = prompt('what is your name?');
let userAge = prompt('How old are you?')
let userEvent = prompt('Name a past event')
let userSynonym = prompt('Pick a synonym for hard')
let userPerson = prompt('Pick a historical figure that has something to dp with your event')
let useradjective = prompt('enter and adjective')
let userdino = prompt('prehistoric animal')
let useryear = prompt('current year')
let useritem = prompt('name an item')
let userseconditem = prompt('name a second item')
let userhistoricfigure = prompt('name a historic figure')
console.log(userName)
console.log(userAge)
console.log(userEvent)
console.log(userSynonym)
console.log(userPerson)
console.log(useradjective)
console.log(userdino)
console.log(useryear)
console.log(useritem)
console.log(userseconditem)
console.log(userhistoricfigure)

let myStory = `Hello, ${userName}, How are you doing today? How does it feel to be ${userAge} years old? OH MY GOD, is that a time machine? HOP IN! what do you want to do?...
Great idea lets go reverse ${userEvent} this is going to be pretty ${userSynonym}. Hey look its ${userPerson} thats so weird they look so ${useradjective} oh no I think something is wrong
 with time why is there a ${userdino} over there I think your mixing time you have to undo what you've done YOU MIGHT DESTROY THE WORLD AS WE KNOW IT quick we must go back to the future to 
 the year ${useryear} uh oh why isn't he time machine working wait the flux capacitor is missing we have to find it, Hey that guy has it chase him quick throw this ${useritem} oh my god
 you hit that poor old lady you suck at throwing hey the thief slipped on a ${userseconditem} what a loser ok go pick up the flux capacitor. Alright good now that we have it we can go back
 to the future. Yes!! we're back in the year ${useryear} that was a crazy adventure thankfully we made it out unharmed, wait a second why is your neighbor ${userhistoricfigure} ` 
console.log(myStory)

document.getElementById('story').innerHTML = myStory;