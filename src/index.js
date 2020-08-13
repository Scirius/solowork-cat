import "./styles.css";

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
