// define the Breakfast class
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  // create a new Breakfast with the correct parameters
  const myBreakfast = new Breakfast("eggs", "juice");
  myBreakfast.className = "breakfast";
  
  // define the Lunch class
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  // create a new Lunch with the correct parameters
  const myLunch = new Lunch("side salad", "broccoli cheddar soup","iced tea");
  myLunch.className = "lunch";
  
  // define the Dinner class
  class Dinner {
    constructor(salad, soup , entree) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
    }
  }
  
  // create a new Dinner with the correct parameters
  const myDinner = new Dinner("balsamic salad","consomme","filet mignon");
  myDinner.className = "dinner";
  