import "./styles.css";

let htmlTemplate = `
  <div class="cat">
    <h1><span class="catName>Dummy</span></h1>
		<input type="text" class="catStat .tiredness">
		<input type="text" class="catStat .hunger">
		<input type="text" class="catStat .loneliness">
		<input type="text" class="catStat .happiness">
	</div>`;

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
  }

  update() {}
}

const Hugh = new Cat("Hugh", "white");
