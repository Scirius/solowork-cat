let htmlTemplate = `
    <h1 class="cat-name"></h1>
		<input type="text" class="cat-stat tiredness"><span class="cat-stat-label cat-stat-tiredness">Tiredness</span><br />
		<input type="text" class="cat-stat hunger"><span class="cat-stat-label cat-stat-hunger">Hunger</span><br />
		<input type="text" class="cat-stat loneliness"><span class="cat-stat-label cat-stat-loneliness">Loneliness</span><br />
    <input type="text" class="cat-stat happiness"><span class="cat-stat-label cat-stat-happiness">Happiness</span><br />
    <button class="cat-action cat-tickle">Tickle! (TIR -5, HAP-5)</button>
    <button class="cat-action cat-feed">Feed! (HUN -5, TIR +5)</button>
    <button class="cat-action cat-pet">Pet! (LON -5, HUN +5)</button>
    <button class="cat-action cat-obey">Obey! (HAP +5, LON +5)</button>
    <textarea class="cat-status"></textarea>

    `;

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
    this._hunger -= 5;
    this._tiredness += 5;
    this.update();
  }
  pet() {
    console.log("Petted  " + this._name);
    this._loneliness -= 5;
    this._hunger += 5;
    this.update();
  }
  obey() {
    console.log("Obeyed to " + this._name);
    this._happiness += 5;
    this._loneliness += 5;
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

  update() {
    this._tiredness = Math.min(Math.max(this._tiredness, 0), 100);
    this._hunger = Math.min(Math.max(this._hunger, 0), 100);
    this._loneliness = Math.min(Math.max(this._loneliness, 0), 100);
    this._happiness = Math.min(Math.max(this._happiness, 0), 100);
    this.updateStat("tiredness", this._tiredness);
    this.updateStat("hunger", this._hunger);
    this.updateStat("loneliness", this._loneliness);
    this.updateStatus();
  }

  updateStatus() {}
}

let initializeCats = () => {
  const Hugh = new Cat("Hugh", "white", 50, 50, 50, 50);
  const Twig = new Cat("Twig", "white", 10, 70, 70, 30);
};
//document.addEventListener("DOMContentLoaded", initializeCats);
initializeCats();
