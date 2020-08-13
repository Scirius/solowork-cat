import "./styles.css";

let htmlTemplate = `
    <h1><span class="catName></span></h1>
		<input type="text" class="catStat .tiredness">
		<input type="text" class="catStat .hunger">
		<input type="text" class="catStat .loneliness">
    <input type="text" class="catStat .happiness">
    `;

class Cat {
  status() {
    console.log(this._name + " is very happy");
  }

  constructor(name, color) {
    this._name = name;
    this._color = color;
    this._tiredness = 0;
    this._hunger = 0;
    this._loneliness = 0;
    this._happiness = 0;
    this.createUI();
  }

  createUI() {
    console.log("create UI");
    let appHolder = document.getElementById("cat-app");
    let catHolder = document.createElement("div");
    catHolder.className = "cat";
    catHolder.innerHTML = htmlTemplate;
    appHolder.appendChild(catHolder);
    //appHolder.getElementsByClassName("catName")[0].innerHTML="Brot";
  }

  update() {}
}

const Hugh = new Cat("Hugh", "white");
