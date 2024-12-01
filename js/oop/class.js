class Hero{

constructor(heroName, heroHealthy, heroPoints, heroGun){
    this.name =  heroName;
    this.healthy = heroHealthy;
    this.points = heroPoints;
    this.gun =  heroGun;
}
showHeroinfo(){
    return `Hero: ${this.name} points: ${this.points} healthy: ${this.healthy} weapon: ${this.gun}`;
}
};

class Ork extends Hero {
    constructor({orkSkin, orkIq, orkSize, heroName, heroHealthy, heroPoints, heroGun}){
        super(heroName, heroHealthy, heroPoints, heroGun);
        this.skin = orkSkin;
        this.iq = orkIq;
        this.size = orkSize;
    }
 
};
const dataVili = {orkSkin: 'green', orkIq: 0, orkSize: 1.50, heroName: 'Vili', heroHealthy: 50, heroPoints: 45, heroGun:'palka'};
const orkVili = new Ork(dataVili); 
const orkFrank = new Ork({orkSkin:'green', orkIq: 2, orkSize: 1.35, heroName: 'Frank', heroHealthy: 75, heroGun: 'molot'});
const orkSara = new Ork({orkSize: 'green', orkIq: 5, orkSize: 1.70, heroName: 'Sara', heroHealthy: 40, heroPoints: 60, heroGun:'stone'});

class Elf extends Hero{
constructor(elfAge, elfEars, elfeye, heroName, heroHealthy, heroPoints, heroGun ){
    super(heroName, heroHealthy, heroPoints, heroGun)
        this.age = elfAge;
        this.ears =elfEars ;
        this.eye = elfeye;
}
};

const elfDanil = new Elf({elfAge: 126, elfEars: 0.25, elfeye: 'blue',heroName: 'Danil', heroHealthy: 100, heroPoints: 250, heroGun: 'magic'});
const elfJohnny = new Elf({elfAge: 112, elfEars: 0.34, elfeye:'blue',heroName: 'Johnny', heroHealthy: 100, heroPoints: 345, heroGun: 'magic sword'})


//! запускаемо гру

console.log(orkVili.showHeroinfo());

console.log(orkFrank.showHeroinfo());

console.log(orkSara.showHeroinfo());



