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
    case "латте":
      this.drink == "латте";
      this.time = 5000;
      break;
    case "еспресо":
      this.drink == "еспресо";
      this.time = 3000;
      break;
    case "фраппе":
      this.drink == "фраппе";
      this.time = 6000;
      break;
    default:
      alert("Такого напою немає!");
  }
  Machine.prototype.run.apply(this);
};

let cofeeMachine = new CofeeMachine();
// cofeeMachine.run("латте");
// cofeeMachine.stop();
// cofeeMachine.run("еспресо");
// cofeeMachine.run("фраппе");

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
    case "суп":
      this.dish == "суп";
      this.time == 8000;
      break;
    case "тушіння":
      this.dish == "тушіння";
      this.time = 9000;
      break;
    case "випічка":
      this.dish == "випічка";
      this.time = 7000;
      break;
    default:
      alert("Такої страви немає!");
  }
  Machine.prototype.run.apply(this);
};

let multivariate = new Multivariate();
// multivariate.run("суп");
// multivariate.stop();
// multivariate.run("тушіння");
// multivariate.run("випічка");

let c = prompt("Яку машину будемо використовувати (кавамашину, мультиварку)?");
if (c == "кавамашину") {
  coffee();
} else if (c == "мультиварку") {
  cook();
} else if (c == null || c == "Нічого") {
  alert("До побачення, гарного дня!");
}
function coffee() {
  let choiseCoffee = prompt("Що будемо робити (еспресо, латте, фраппе)?");
  if (choiseCoffee == "еспресо") {
    cofeeMachine.run("еспресо");
  } else if (choiseCoffee == "латте") {
    cofeeMachine.run("латте");
  } else if (choiseCoffee == "фраппе") {
    cofeeMachine.run("фраппе");
  }
}

function cook() {
  let choiseCook = prompt("Що будемо робити (суп, тушіння, випічка)?");
  if (choiseCook == "суп") {
    multivariate.run("суп");
  } else if (choiseCook == "тушіння") {
    multivariate.run("тушіння");
  } else if (choiseCook == "випічка") {
    multivariate.run("випічка");
  }
}
