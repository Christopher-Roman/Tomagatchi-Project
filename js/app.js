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
/*************************************************************************************
This is the class that builds the Tamogatchi. The methods within it run based on the 
the age of the pet. When the class instantiates a new Tomagatchi, it will receive base
stats of age, hunger, sleepiness, and boredom.
*************************************************************************************/
class Venom {
	constructor() {
		this.name = '';
		this.age = 1;
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1
	}
	morph() {
		if(this.age >= 2){
			$petAliveImage.remove()
			$('.petImage').append($morphImage)
		}
	}
	layEgg() {
		if(this.age === 10) {
			$('body').append($('<h2>Your Pet Just Laid an Egg!'))
		}
	}
}

/*************************************************************************************
This is the game object. Within the game object there are several methods that increase
stats based on specific intervals. The game object houses the current pet, a timer that 
all of the methods run off of and a time span that displays how long the Tomagatchi has
been alive.
*************************************************************************************/

const game = {
	currentPet: null,
	timer: null,
	timeOn: false,
	timeSpan: 1,
	generatePet() {
		const pet = new Venom();
		this.currentPet = pet;
		this.timer = setInterval(function (){
			game.boredIncrease();
			$('.boreds').text(game.currentPet.boredom)
			game.sleepinessIncrease();
			$('.sleeps').text(game.currentPet.sleepiness)
			game.hungerIncrease();
			$('.hungers').text(game.currentPet.hunger)
			game.ageIncrease();
			$('.age').text(game.currentPet.age)
			console.log(game.currentPet);
			$('.time').text(game.timeSpan);
			game.tSpan()
			game.dies()	
			pet.morph()	
		}, 100)
	},
	// Dies method will stop the timer if any of the currentPet's stats reach 10.
	dies() {
		if(this.currentPet.hunger === 10 || this.currentPet.sleepiness === 10 || this.currentPet.boredom === 10){
			this.stopTimer()
			this.deadPetImage()
			this.deadFadeOut()
			console.log('activated');
		};
	},
	// boredIncrease method will increase the currentPet's current boredom by 1 every 
	// 10 seconds
	boredIncrease() {
		if(this.timeSpan % 10 === 0) {
			this.currentPet.boredom += 1;
		}
	},
	// hungerIncrease method will increase the currentPet's current hunger by 1 every 
	// 20 seconds
	hungerIncrease() {
		if(this.timeSpan % 20 === 0) {
			this.currentPet.hunger += 1;
		}
	},
	// sleepinessIncrease method will increase the currentPets current sleepiness by 1 
	// every 25 seconds.
	sleepinessIncrease() {
		if(this.timeSpan % 25 === 0) {
			this.currentPet.sleepiness += 1;
		}
	},
	// ageIncrease method will increase the currentPet's age by 1 every 50 seconds
	ageIncrease() {
		if(this.timeSpan % 50 === 0){
			this.currentPet.age += 1;
		}
	},
	// This method feeds into the dies method to stop the intervals
	stopTimer() {
			clearInterval(this.timer);
	},
	// the tSpan method increases the timeSpan by 1 second every second
	tSpan() {
		this.timeSpan += 1;
	},
	// feedCurrentPet method will reduce the currentPet's hunger by 2 every time it is
	// called. It is attached to a button that will call it whenever it is clicked.
	feedCurrentPet() {
		this.currentPet.hunger -= 2;
		this.feedFadeOut()
	},
	// sleep method will reduce the currentPet's sleepiness to zero whenever it is called
	// still need to animate this.
	sleep() {
		this.currentPet.sleepiness = 0;
	},
	// playWithCurrentPet will reduce the currentPet's boredom by 1 every time it is
	// called. It is attached to a button that will call it whenever it is clicked.
	playWithCurrentPet() {
		// this.petPlays()
		this.currentPet.boredom -= 1;
	},
	deadPetImage() {
		$('.morphImage').hide()
		$('.petImage').append($petDeadImage)
	},
	deadFadeOut() {
		$petDeadImage.velocity("fadeOut", { 
			duration: 1000
		})
	}
}
// This event listener calls the feedCurrentPet method to reduce the currentPet's
// hunger
$('.feed').on('click',(e) => {
	(game.feedCurrentPet())
	$('.hungers').text(game.currentPet.hunger)
	console.log('click worked');
});

// This event listener calls the sleep method to reduce the currentPet's sleepiness
// to 0
$('.rest').on('click',(e) => {
	(game.sleep())
	$('.sleeps').text(game.currentPet.sleepiness)
	console.log('click worked');
});

// This event listener calls the playWithCurrentPet method to reduce the currentPet's
// boredom
$('.play').on('click',(e) => {
	(game.playWithCurrentPet())
	$('.boreds').text(game.currentPet.boredom)
	console.log('click worked');
});

// This event listener calls the generatePet method to instantiate a pet and start
// the interval.
$('.start').on('click',(e) => {
	if(game.currentPet === null){
		(game.generatePet())
		$('.petImage').append($petAliveImage)
	}
	console.log('click worked');
});
const $petAliveImage = $('<img src="https://www.fightersgeneration.com/characters/venom-crawl.gif">')
$petAliveImage.attr('class', 'aliveImage')
const $petDeadImage = $('<img src="https://www.fightersgeneration.com/characters/venomhit.gif">')
$petDeadImage.attr('class', 'deadImage')
const $petEatImage = $('<img src="https://www.fightersgeneration.com/characters/venom-sp.gif">')
$petEatImage.attr('class', 'eatImage')
const $petPlayImage = $('<img src="css/img/venom34.PNG">')
$petPlayImage.attr('class', 'playImage')
const $morphImage = $('<img src="https://www.fightersgeneration.com/characters/venomwalk.gif">')
$morphImage.attr('class', 'morphImage')





