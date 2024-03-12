//ex 3
const leon = {
    name: 'Leon',
    age: 80,
    post: 'king',
    sector: 'Africa'
} 
class King {
    constuctor(options) {
        this.name = options.name
        this.age =options.age
        this.sector = options.sector
    }
    responsability () {
        console.log('to sale')
    }
} 
//class King {
  //  constructor(name, age, sector)

   // .........


//ex3.1

const alex = {
    name:'Alex',
    age:40,
    post:'Doctor'

}
const { post, name, age} = alex
 
console.log(alex)
console.log(post)
console.log(age)
console.log(name)




