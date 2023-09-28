class circle {
    constructor(radius = 1.0, color = "red"){
    this._radius = radius;
    this._color = color;
        
    }
    get radius(){
        return this._radius;
    }
    set radius(radius){
        this._radius = radius;
    }
    get color(){
        return this._color;
    }
    set color(color){
        this.color = color;
    }
    value(){
        return `circle [radius = ${this._radius}, color = ${this._color}]`;
    }
    area (){
        return Math.PI * this._radius * this._radius;
    }
    circumference(){
        return 2 * Math.PI * this._radius;
    }
}
var circle1 = new circle(3, "white");
var circle2 = new circle (4, "green");
// FOR circle1 ;
console.log(circle1.value());
console.log(circle1.area());
console.log(circle1.circumference());

// output :
/*circle [radius = 3, color = white]
28.274333882308138
18.84955592153876 */

// FOR circle 2;
console.log(circle2.value());
console.log(circle2.area());
console.log(circle2.circumference());
// output :
/*circle [radius = 4, color = green]
50.26548245743669
25.132741228718345*/
