// I am going to need to create a class for the tomagatchi
	//the class that contains the following:
		//name
		//age
		//hunger 
		//sleepiness
		//boredom
	// It will need a method that will morph it into something after it reaches a certain age
		// what ability do I want it to have?
	// It will also need to build a method that allows it to have a baby once it reaches a certain age
		// I can have it lay an egg and make the egg hatch after a certain amount of time
	// A death method that kills the tomigatchi if any of the stats reach 10

//I will need to make a baby class that inherits from the original class
	// I can add a method to the baby class that gives it a random ability once it hatches that the parent
	// doesn't have
		// What should they be able to do differently?

// The game object will need several methods
	// A method that starts the game
	// I will need to make an interval method
		// A method that increases the age every few minutes
		// A method that has the sleepiness increase every few minutes
		// A hunger method that has the hunger icnrease every few minutes
		// A boredom method that inceases the bordom every few minutes
	// A method that ends the game if the tomigatchi

// I will need to create buttons that decrease the various stats based on what they are
	// A button to feed the pet that will decrease hunger
		// This will need a click listener
	// A button to play with the pet that will decrease boredom
		// This will need a click listener
	// A button put the pet to bed that will decrease sleepiness
		// This will need a click listener

class Venom {
	constructor() {
		this.name = 'Venom';
		this.age = 1;
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1
	}
	morph() {
		if(this.age === 5){
			$('body').append($('<h1>Your Pet is Evolving!</h1>')).css('text-color', 'white')
		}
	}
	layEgg() {
		if(this.age === 10) {
			$('body').append($('<h2>Your Pet Just Laid an Egg!'))
		}
	}
	die() {
		if(this.hunger === 10 || this.sleepiness === 10 || this.boredom === 10){
			$('.city').remove()
			$('body').css('background', 'black')
			const $itDied = $('<h1>Your Pet Freakin Died bro... it is dead...</h1>')
			$('body').append($itDied)
		}
	}
}

const game = {
	currentPet: null,
	generatePet() {
		const pet = new Venom()
		this.currentPet = pet;
		console.log(this.currentPet);
	}
	// boredIncrease() {

	// }
}

game.generatePet()





