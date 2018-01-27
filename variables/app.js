"use strict"

// Task 1: Working with variables

let admin, name

name = "John Doe"

admin = name

alert(admin)

// Task 2: Giving the right Name

let ourPlanetName = "Earth",
	currentVisitorName = "Visitor Name"


// Task 3: Uppercase const

const BIRTHDAY = "18.04.2005"

const AGE = someCode(BIRTHDAY) 

function someCode(date){} // Just to not through errors

// an extra from my side heheheh

let results = document.getElementsByTagName('textarea')[0]
results.value = `
		New Try: 
		admin value is: ${admin} 
		planet name is: ${ourPlanetName}
		my birthday is : ${BIRTHDAY}

`