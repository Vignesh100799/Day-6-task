/*a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
a String representing the studio, and a String representing the rating as its arguments, 
and sets the respective class properties to these values.*/

class movie {
    constructor(title, studio, rating){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
        
    }
}
var moviedetails = new movie ("kaththi","LYCA","PG13");
console.log(moviedetails)

// output
/*movie {
    title: 'kaththi',
    studio: 'LYCA', 
    rating: 'PG13' }*/

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class movie {
    constructor(title, studio, rating = "PG"){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
        
    }
}
var moviedetails = new movie ("kaththi","LYCA");
console.log(moviedetails)
// output;
/*movie { 
    title: 'kaththi',
    studio: 'LYCA',
    rating: 'PG' }*/

/*c) Write a method getPG, which takes an array of base type Movie as its argument, 
and returns a new array of only those movies in the input array with a rating of "PG". 
You may assume the input array is full of Movie instances. The returned array need not be full.*/


class movie {
    constructor(title, studio, rating){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
        }
        static getPG(input) {
            let res = input.filter(movie => movie.rating==="PG")
            return res;
        }
}
var movie1 = new movie ("kaththi","LYCA", "PG");
var movie2 = new movie ("Hero","LYCA","PG13");
var movie3 = new movie ("Don","Red gaint","PG")
let arr = [movie1, movie2, movie3];
let PGmovies = movie.getPG(arr);
console.log(PGmovies)

// output
/*[
    movie { title: 'kaththi', studio: 'LYCA', rating: 'PG' },
    movie { title: 'Don', studio: 'Red gaint', rating: 'PG' }
  ]*/


/*d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
the studio “Eon Productions”, and the rating “PG­13”*/
class movie {
    constructor(title, studio, rating){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
        
    }
}
var moviedetails = new movie ("Casino Royale","Eon Productions","PG13");
console.log(moviedetails)

// output ;
/*movie {
    title: 'Casino Royale',
    studio: 'Eon Productions',
    rating: 'PG13'
  }*/

