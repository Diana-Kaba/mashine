function Machine() {
  this.state = "Вимкнено.";
  this.time = 2000;
  this.timer = null;
  this.interval = null;
}

Machine.prototype.run = function () {
  this.state = "Ввимкнено!";
  document.write("Починаю роботу...");
  document.write("Час приготування - " + this.time + "сек. ");
  this.interval = setInterval(
    function () {
      document.write(" | ");
    }.bind(this),
    1000
  );
  this.timer = setTimeout(this.onReady.bind(this), this.time);
  document.write(this.state);
};

Machine.prototype.onReady = function () {
  clearInterval(this.interval);
  clearTimeout(this.timer);
  document.write("Готово! ");
  self.state = "Вимкнено.";
  document.write(self.state);
};

Machine.prototype.stop = function () {
  clearInterval(this.interval);
  clearTimeout(this.timer);
  document.write("Примусове вимкнення!");
  this.state = "Вимкнено.";
  document.write(this.state);
};

// let machine = new Machine();
// machine.run();
//machine.stop(); // Примусове вимкнення

function CofeeMachine() {
  this.drink = "вода";
  Machine.apply(this);
}

CofeeMachine.prototype = Object.create(Machine.prototype);
CofeeMachine.prototype.constructor = CofeeMachine;

CofeeMachine.prototype.run = function (drink) {
  if (drink != undefined) this.drink = drink;
  document.write("Приготування: " + this.drink + ". ");
  // if (this.drink == "латте") {
  //   this.time = 5000;
  // }
  // if (this.drink == "espresso") {
  //   this.time = 3000;
  // }
  switch (drink) {
    case 1:
      if (this.drink == "латте") {
        this.time = 5000;
      }
    case 2:
      if (this.drink == "еспресо") {
        this.time = 3000;
      }
    case 3:
      if (this.drink == "фраппе") {
        this.time = 6000;
      }
    default:
      alert("Такого напою немає!");
  }
  Machine.prototype.run.apply(this);
};

let cofeeMachine = new CofeeMachine();
cofeeMachine.run("латте");
cofeeMachine.stop();
cofeeMachine.run("еспресо");
cofeeMachine.run("фраппе");

function Multivariate() {
  this.dish = "суп";
  Machine.apply(this);
}

Multivariate.prototype = Object.create(Machine.prototype);
Multivariate.prototype.constructor = Multivariate;

Multivariate.prototype.run = function (dish) {
  if (this.dish != undefined) this.dish = dish;
  document.write("Приготування: " + this.dish + ". ");
  switch (dish) {
    case 1:
      if (this.dish == "суп") {
        this.time = 8000;
      }
    case 2:
      if (this.dish == "тушіння") {
        this.time = 9000;
      }
    case 3:
      if (this.dish == "випічка") {
        this.time = 7000;
      }
    default:
      alert("Такої страви немає!");
  }
  Machine.prototype.run.apply(this);
};

let multivariate = new Multivariate();
multivariate.run("суп");
multivariate.stop();
multivariate.run("тушіння");
multivariate.run("випічка");
