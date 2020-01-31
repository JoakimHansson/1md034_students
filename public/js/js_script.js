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
let menu5 = new menuItem('Spicy death', 'You will burn', 1300, 'Contains gluten');

let burgers = [menu1, menu2, menu3, menu4, menu5];

let container = document.getElementById("containerID");
for (let burger in burgers)
{
	
  let listItem = document.createElement("li");
  let listValue;
    if (burgers[burger].allergy == "Contains gluten")
    {
       listValue = document.createTextNode(burgers[burger].info() + ' ' + burgers[burger].allergy);
    }
    else
    {
    	listValue = document.createTextNode(burgers[burger].info());
    }
    
    listItem.appendChild(listValue);
    container.appendChild(listItem);
}

console.log(menu1.info());
console.log(menu2.info());
console.log(menu3.info());
console.log(menu4.info());
console.log(menu5.info());
