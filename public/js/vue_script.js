function menuItem(name, desc, kcal, allergy) {
    this.name = name; // The this keyword refers to the object itself
    this.desc = desc;
    this.kcal = kcal;
    this.allergy = allergy;
    this.img;
    this.property;

    this.info = function (){
	return this.name + ' ' +  this.kcal + ' kcal';
    };

    this.addIMG = function (img){
	this.img = img;
    }
}

let menu1 = new menuItem('Standard menu', 'The normal burger', 1200, 'Contains gluten');
let menu2 = new menuItem('Kids menu', 'The Monster burger', 800, 'May cause nightmares');
let menu3 = new menuItem('Hangover menu', 'The Ultimater burger', 4500, 'Cure hangovers');
let menu4 = new menuItem('Maxim special', 'Billig och slibbig', 2000, 'Contains matförgiftning');
let menu5 = new menuItem('Spicy death', 'You will burn', 1300, 'Contains gluten');

let burgers = [menu1, menu2, menu3, menu4, menu5];

let imgsrc = ["https://assets.bonappetit.com/photos/57acee2d1b33404414975356/16:9/w_1028,c_limit/lamb-bacon-burgers-with-spicy-aioli.jpg","https://boyeatsworld.com.au/wp-content/uploads/2016/10/DSC_0090.jpg", "https://prod-wolt-venue-images-cdn.wolt.com/5c76a5d396ee8a000d8a35d8/ede3030af9a544ad314545c6f03d1f0c", "https://prod-wolt-venue-images-cdn.wolt.com/5c76a5d396ee8a000d8a35d8/ede3030af9a544ad314545c6f03d1f0c", "https://prod-wolt-venue-images-cdn.wolt.com/5c76a5d396ee8a000d8a35d8/ede3030af9a544ad314545c6f03d1f0c"]

for(let i=0; i<imgsrc.length; i++){
    burgers[i].addIMG(imgsrc[i]);
}


var names = [menu1.name, menu2.name, menu3.name, menu5.name, menu5.name];
var imgs = [menu1.img, menu2.img, menu3.img, menu5.img, menu5.img];
var descs = [menu1.desc, menu2.desc, menu3.desc, menu5.desc, menu5.desc];
var kcals = [menu1.kcal, menu2.kcal, menu3.kcal, menu5.kcal, menu5.kcal];
var allergies = [menu1.allergies, menu2.allergies, menu3.allergies, menu5.allergies, menu5.allergies];

const vm = new Vue({
  el: '#menuContainerID',
    data: {
	burgers: burgers,
	names: names,
	images: imgs,
	description: descs,
	calories: kcals,
	allergies: allergies,
  }})
