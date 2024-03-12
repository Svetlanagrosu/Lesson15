// ex 2

const petru = {
    hospital: 'Sf.Treime'
}
class Doctor {
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.sector = options.sector
        this.post = 'Doctor'
    }
    responsability () {
        console.log('to sale')

    } 

}
const denis = new Doctor({name: 'denis' ,age: 50, hospital: 'Sf.Andrei'})
 denis.responsability(console.log(petru)
 console.log(denis)


class PrimaryDoctor extends Doctor {}
const vadim = new PrimaryDoctor({name: 'vadim' , age: 60, hospital: 'Sf.Gheorghe'})
console.log(vadim)

class SecondaryDoctor extends Doctor {}
const alex = new SecondaryDoctor({name:'alex' ,age: 58, hospital: 'SanEugenio'})
console.log(alex)
