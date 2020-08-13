let htmlTemplate = `
    <h1 class="cat-name"></h1>
		<input type="text" readonly class="cat-stat tiredness"><span class="cat-stat-label cat-stat-tiredness">Tiredness</span><br />
		<input type="text" readonly class="cat-stat hunger"><span class="cat-stat-label cat-stat-hunger">Hunger</span><br />
		<input type="text" readonly class="cat-stat loneliness"><span class="cat-stat-label cat-stat-loneliness">Loneliness</span><br />
    <input type="text" readonly class="cat-stat happiness"><span class="cat-stat-label cat-stat-happiness">Happiness</span><br />
    <button class="cat-action cat-tickle">Tickle! (TIR -5, HAP-5)</button>
    <button class="cat-action cat-feed">Feed! (HUN -5, TIR +5)</button>
    <button class="cat-action cat-pet">Pet! (LON -5, HUN +5)</button>
    <button class="cat-action cat-obey">Obey! (HAP +5, LON +5)</button>
    <textarea class="cat-status" readonly></textarea>

    `;

/* new line characters for textarea */
const nl = String.fromCharCode(13, 10);
class Cat {
  status() {
    console.log(this._name + " is very happy");
  }

  constructor(name, color, tiredness, hunger, loneliness, happiness) {
    this._name = name;
    this._color = color;
    this._tiredness = tiredness;
    this._hunger = hunger;
    this._loneliness = loneliness;
    this._happiness = happiness;
    this._UI = this.createUI();
    this.assignActions();
    this.update();
  }

  createUI() {
    console.log("create UI");
    let appHolder = document.getElementById("cat-app");
    let catHolder = document.createElement("div");
    catHolder.classList.add("cat");
    catHolder.innerHTML = htmlTemplate;
    catHolder.getElementsByClassName("cat-name")[0].innerHTML = this._name;
    let catDOM = appHolder.appendChild(catHolder);
    return catDOM;
  }

  tickle() {
    console.log("Tickled " + this._name);
    this._tiredness -= 5;
    this._happiness -= 5;
    this.update();
  }

  feed() {
    console.log("Fed " + this._name);
    if (Math.random() * 100 < 30 && this._hunger === 0) {
      alert(`Woah! You fed to much! ${this._name} puked on your couch.`);
      this._tiredness = 80;
      this._hunger = 0;
      this._loneliness = 100;
      this._happiness = 0;
    } else {
      this._hunger -= 5;
      this._tiredness += 5;
    }
    this.update();
  }

  pet() {
    console.log("Petted  " + this._name);
    if (Math.random() * 100 < 5) {
      alert(`Woah! You petted to much! ${this._name} went crazy.`);
      this._tiredness = 0;
      this._hunger = 90;
      this._loneliness = 0;
      this._happiness = 0;
    } else {
      this._loneliness -= 5;
      this._hunger += 5;
    }
    this.update();
  }
  obey() {
    console.log("Obeyed to " + this._name);
    if (Math.random() * 100 < 20 && this.__happiness === 100) {
      alert(`You obeyed to much! ${this._name} gained world domination.`);
      this._tiredness = 80;
      this._hunger = 0;
      this._loneliness = 100;
      this._happiness = 0;
    } else {
      this._happiness += 5;
      this._loneliness += 5;
    }
    this.update();
  }

  assignAction(className, action) {
    this._UI
      .getElementsByClassName(className)[0]
      .addEventListener("click", action, false);
  }
  assignActions() {
    /* this allows to transfer this into the eventlistener scope */
    var scope = this;
    this.assignAction("cat-tickle", function () {
      scope.tickle();
    });
    this.assignAction("cat-feed", function () {
      scope.feed();
    });
    this.assignAction("cat-pet", function () {
      scope.pet();
    });
    this.assignAction("cat-obey", function () {
      scope.obey();
    });
  }

  updateStat(className, value) {
    this._UI.getElementsByClassName(className)[0].value = value;
  }
  updateStatus() {
    let status = this._name + " is ";

    switch (true) {
      case this._tiredness < 5:
        status += "like on caffeine";
        break;
      case this._tiredness < 20:
        status += "pretty woke";
        break;
      case this._tiredness < 50:
        status += "a little tired";
        break;
      case this._tiredness < 85:
        status += "extremely tired";
        break;
      default:
        status += "alomst asleep";
    }
    status += ", " + nl;
    switch (true) {
      case this._hunger < 5:
        status += "crammed with food";
        break;
      case this._hunger < 20:
        status += "a bit hungry";
        break;
      case this._hunger < 50:
        status += "hungry as usual";
        break;
      case this._hunger < 80:
        status += "really hungry";
        break;
      default:
        status += "is getting aggressively hungry";
    }
    status += ", " + nl;
    switch (true) {
      case this._loneliness < 5:
        status += "doesn't give a fuck about company";
        break;
      case this._loneliness < 20:
        status += "slightly lonely";
        break;
      case this._loneliness < 50:
        status += "lonely as usual";
        break;
      case this._loneliness < 80:
        status += "lonely (lonely, lonely, lonely)";
        break;
      default:
        status += "is the last cat in the world";
    }

    status += " and ";
    switch (true) {
      case this._happiness < 5:
        status += "so sad.";
        break;
      case this._happiness < 20:
        status += "rather depressed.";
        break;
      case this._happiness < 50:
        status += "a little depressed.";
        break;
      case this._happiness < 80:
        status += "pretty happy.";
        break;
      default:
        status += "riding rainbows.";
    }
    this._UI.getElementsByClassName("cat-status")[0].value = status;
  }

  update() {
    this._tiredness = Math.min(Math.max(this._tiredness, 0), 100);
    this._hunger = Math.min(Math.max(this._hunger, 0), 100);
    this._loneliness = Math.min(Math.max(this._loneliness, 0), 100);
    this._happiness = Math.min(Math.max(this._happiness, 0), 100);
    this.updateStat("tiredness", this._tiredness);
    this.updateStat("hunger", this._hunger);
    this.updateStat("loneliness", this._loneliness);
    this.updateStat("happiness", this._happiness);
    this.updateStatus();
  }
}

let initializeCats = () => {
  const Hugh = new Cat("Hugh", "white", 50, 50, 50, 50);
  const Twig = new Cat("Twig", "white", 10, 70, 70, 30);
};
//document.addEventListener("DOMContentLoaded", initializeCats);
initializeCats();
