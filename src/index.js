let htmlTemplate = `
    <h1 class="cat-name"></h1>
		<input type="text" class="cat-stat tiredness"><span class="cat-stat-label cat-stat-tiredness">Tiredness</span><br />
		<input type="text" class="cat-stat hunger"><span class="cat-stat-label cat-stat-hunger">Hunger</span><br />
		<input type="text" class="cat-stat loneliness"><span class="cat-stat-label cat-stat-loneliness">Loneliness</span><br />
    <input type="text" class="cat-stat happiness"><span class="cat-stat-label cat-stat-happiness">Happiness</span><br />
    <button class="cat-action cat-tickle">Tickle! (tiredness -5)</button>
    <button class="cat-action cat-feed">Feed! (hunger -5)</button>
    <button class="cat-action cat-pet">Pet! (loneliness -5)</button>
    <button class="cat-action cat-obey">Obey! (happiness +5)</button>
    
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
  }

  updateStat(className, value) {
    this._UI.getElementsByClassName(className)[0].value = value;
  }

  update() {
    this.updateStat("tiredness", this._tiredness);
    this.updateStat("hunger", this._hunger);
    this.updateStat("loneliness", this._loneliness);
    this.updateStat("happiness", this._happiness);
  }
}

let initializeCats = () => {
  const Hugh = new Cat("Hugh", "white", 50, 50, 50, 50);
  const Twig = new Cat("Twig", "white", 10, 70, 70, 30);
};
//document.addEventListener("DOMContentLoaded", initializeCats);
initializeCats();
