class Pet {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.happiness = 100;
      this.hunger = 0;
      this.purity = 100;
      this.isActive = true;
      this.isDead = false;
    }

    feedPet(){
        if ( this.hunger < 100 && this.happiness > 0 && this.purity > 0 && this.isActive ) {
        this.hunger -= 5
        this.happiness +=2
        this.purity -=10
        this.isActive = true
        } else if (!this.isActive) {
            console.log("Your pet is not active")
        } else console.log("Your pet is dead :(")
    }

    putToSleep() {
        if ( this.hunger < 100 && this.happiness > 0 && this.purity > 0 && this.isActive ) {
        this.isActive = false
        this.hunger += 20
        this.happiness +=10
        this.health +=1
        } else if (!this.isActive) {
            console.log("Your pet is not active")
        } else console.log("Your pet is dead :(")
    }

    wakeUp() {
        if ( this.hunger < 100 && this.happiness > 0 && this.purity > 0) {
        this.isActive = true
        this.happiness -=30
        } else console.log("Your pet is dead :(")
    }

    washPet() {
        if ( this.hunger < 100 && this.happiness > 0 && this.purity > 0 && this.isActive ) {
        this.happiness -=10
        this.purity = 100
        this.health -=10
        } else if (!this.isActive) {
            console.log("Your pet is not active")
        } else console.log("Your pet is dead :(")
    }

    infoOfPet() {
        console.log('Your ' +this.name+ ' is Active? ' + this.isActive + '\nHealth: '+this.health+ '\n')
    }
  
  };
  
  let pet = new Pet("Zhu4ka");