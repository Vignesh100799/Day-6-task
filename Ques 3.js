// Write a “person” class to hold all the details.


class person {
    constructor (name, age, school, college, city, state, country){
        
        this.name = name;
        this.age = age;
        this.school = school;
        this.college = college;
        this.city = city;
        this.state = state;
        this.country = country;
    }
   
}var details = new person ("vicky", 24, "Gugai hr.sec.school", "TPT","Salem", "TN", "India" )
console.log(details)
// output :
/*person {
  name: 'vicky',
  age: 24,
  school: 'Gugai hr.sec.school',
  college: 'TPT',
  city: 'Salem',
  state: 'TN',
  country: 'India'
}*/

