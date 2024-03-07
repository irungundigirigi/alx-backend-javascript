export default class Car {
	constructor(brand, color, motor) {
		this._brand = brand;
		this._motor = motor;
		this._color = color;
	}
	cloneCar() {
		return new this.constructor()
	}
}
