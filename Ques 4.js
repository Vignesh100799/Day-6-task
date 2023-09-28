// write a class to calculate the uber price.

class uberprice {
    constructor (basefare, priceperdistance, distance){
        
        this.basefare = basefare;
        this.priceperdistance = priceperdistance;
        this.distance = distance;
    }totalfare(){
        return this.basefare +( this.priceperdistance * this.distance );
    }
}var price = new uberprice (40 , 20, 5);
console.log(price.totalfare());

// output:
// 140