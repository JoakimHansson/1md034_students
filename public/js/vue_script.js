function menuItem(name, desc, kcal, allergy) {
    this.name = name; // The this keyword refers to the object itself
    this.desc = desc;
    this.kcal = kcal;
    this.allergy = allergy;
    this.property;

    this.info = function (){
	return this.name + ' ' +  this.kcal + ' kcal';
    };
}

let menu1 = new menuItem('Standard menu', 'The normal burger', 1200, 'Contains gluten');
let menu2 = new menuItem('Kids menu', 'The Monster burger', 800, 'May cause nightmares');
let menu3 = new menuItem('Hangover menu', 'The Ultimater burger', 4500, 'Cure hangovers');
let menu4 = new menuItem('Maxim special', 'Billig och slibbig', 2000, 'Contains matförgiftning');
let menu5 = new menuItem('Spicy death', 'You will burn', 1300, 'Contains chili');


const vm = new Vue({
  el: '#containerID',
  data: {
    title: 'Välj en burgare!!',
    menu1: menu1.info(),
    menu2: menu2.info(),
    menu3: menu3.info(),
    menu4: menu4.info(),
    menu5: menu5.info(),
  }})

