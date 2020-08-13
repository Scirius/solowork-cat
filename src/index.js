let htmlTemplate = `
    <h1 class="cat-name"></h1>
		<input type="text" class="cat-stat tiredness"><span class="cat-stat-label cat-stat-tiredness">Tiredness</span><br />
		<input type="text" class="cat-stat hunger"><span class="cat-stat-label cat-stat-hunger">Hunger</span><br />
		<input type="text" class="cat-stat loneliness"><span class="cat-stat-label cat-stat-loneliness">Loneliness</span><br />
    <input type="text" class="cat-stat happiness"><span class="cat-stat-label cat-stat-happiness">Happiness</span><br />
    `;

class Cat {
  status() {
    console.log(this._name + " is very happy");
  }

  constructor(name, color) {
    this._name = name;
    this._color = color;
    this._tiredness = 50;
    this._hunger = 50;
    this._loneliness = 50;
    this._happiness = 50;
    this.createUI();
  }

  createUI() {
    console.log("create UI");
    let appHolder = document.getElementById("cat-app");
    let catHolder = document.createElement("div");
    catHolder.classList.add("cat");
    catHolder.innerHTML = htmlTemplate;
    catHolder.getElementsByClassName("cat-name")[0].innerHTML = this._name;
    appHolder.appendChild(catHolder);
  }

  update() {}
}

let initializeCats = () => {
  const Hugh = new Cat("Hugh", "white");
};
document.addEventListener("DOMContentLoaded", initializeCats);
