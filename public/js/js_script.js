// let orderButton = document.getElementById('orderButtonID');

// function getOrderInformation(){
    
//     var fname = document.getElementById("fullname").value;    
//     var email = document.getElementById("email").value;
//     var street = document.getElementById("street").value;
//     var house = document.getElementById("house").value;
//     var payment = document.getElementById("payment").value;
//     var gender;

//     if(document.getElementById("maleID").checked)
//     {
// 	gender = document.getElementById("maleID").value;
//     }
//     else if(document.getElementById("femaleID").checked)
//     {
// 	gender = document.getElementById("femaleID").value;
//     }
//     else{
// 	gender = document.getElementById("otherID").value;
//     }

//     return [fname, email, street, house, payment, gender];
   
// }

// orderButton.onclick = function () {
//     console.log(getOrderInformation());
//     console.log("Order placed!");

// }


// function menuItem(name, desc, kcal, allergy) {
//     this.name = name; // The this keyword refers to the object itself
//     this.desc = desc;
//     this.kcal = kcal;
//     this.allergy = allergy;
//     this.img;
//     this.property;

//     this.info = function (){
// 	return this.name + ' ' +  this.kcal + ' kcal';
//     };

//     this.addIMG = function (img){
// 	this.img = img;
//     }
// }

// let menu1 = new menuItem('Standard menu', 'The normal burger', 1200, 'Contains gluten');
// let menu2 = new menuItem('Kids menu', 'The Monster burger', 800, 'May cause nightmares');
// let menu3 = new menuItem('Hangover menu', 'The Ultimater burger', 4500, 'Cure hangovers');
// let menu4 = new menuItem('Maxim special', 'Billig och slibbig', 2000, 'Contains matförgiftning');
// let menu5 = new menuItem('Spicy death', 'You will burn', 1300, 'Contains gluten');

// let burgers = [menu1, menu2, menu3, menu4, menu5];

// let imgsrc = ["https://assets.bonappetit.com/photos/57acee2d1b33404414975356/16:9/w_1028,c_limit/lamb-bacon-burgers-with-spicy-aioli.jpg","https://boyeatsworld.com.au/wp-content/uploads/2016/10/DSC_0090.jpg", "https://prod-wolt-venue-images-cdn.wolt.com/5c76a5d396ee8a000d8a35d8/ede3030af9a544ad314545c6f03d1f0c", "https://prod-wolt-venue-images-cdn.wolt.com/5c76a5d396ee8a000d8a35d8/ede3030af9a544ad314545c6f03d1f0c", "https://prod-wolt-venue-images-cdn.wolt.com/5c76a5d396ee8a000d8a35d8/ede3030af9a544ad314545c6f03d1f0c"]

// for(let i=0; i<imgsrc.length; i++){
//     burgers[i].addIMG(imgsrc[i]);
// }

// let container = document.getElementById("menuContainerID");
// console.log(container);

// for (let i=0; i<burgers.length; i++)
// {
//     let burger = burgers[i];
//     let menuItem = document.createElement("div");
//     let title = document.createElement("h1");
//     let img = document.createElement("img");
//     let infoList = document.createElement("UL");
    
//     title.appendChild(document.createTextNode(burger.name));

//     img.src = imgsrc[i];
//     img.width = "300";
//     img.alt = "Span";
//     img.title = "menu-" + (i+1);

//     var desc = document.createTextNode(burger.desc);
//     var kcal = document.createTextNode(burger.kcal + kcal);
//     var allergy = document.createElement("span");

//     if(burger.allergy == "Contains gluten"){
// 	allergy.className = "allergy";
//     }
    
//     allergy.appendChild(document.createTextNode(burger.allergy));

//     var item1 = document.createElement("li");
//     var item2 = document.createElement("li");
//     var item3 = document.createElement("li");

//     item1.appendChild(desc);
//     item2.appendChild(kcal);
//     item3.appendChild(allergy);

//     infoList.appendChild(item1);
//     infoList.appendChild(item2);
//     infoList.appendChild(item3);
    
//     menuItem.appendChild(title);
//     menuItem.appendChild(img);
//     menuItem.appendChild(infoList);
    
    
   
   
    
//     container.appendChild(menuItem);
// }

// //     <img src="https://assets.bonappetit.com/photos/57acee2d1b33404414975356/16:9/w_1028,c_limit/lamb-bacon-burgers-with-spicy-aioli.jpg" alt="Span" title="menu-1" width="300">

// //     <img src="https://boyeatsworld.com.au/wp-content/uploads/2016/10/DSC_0090.jpg" alt="Span" title="menu-2" width="300">

// // <img src="https://prod-wolt-venue-images-cdn.wolt.com/5c76a5d396ee8a000d8a35d8/ede3030af9a544ad314545c6f03d1f0c" alt="Span" title="menu-3" width="300">
