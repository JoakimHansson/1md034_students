const menuVm = new Vue({
    el: '#menuContainerID',
    data: {
	burgers: burgers,
    }})

const orderVm = new Vue({
    el: '#ordersID',

    data: {
	fullname: "",
	email: "",
	street: "",
	house: "",
	payment: "Swish",
	gender: "",
	customerInfo: [],
	orderInfo: [],
	placedOrder: false
	},
    
    methods: {
        markDone: function() {

	    if(orderVm.fullname == "" || orderVm.email == "" || orderVm.street == "" || orderVm.house == "" || orderVm.payment == "" || orderVm.gender == ""){
		return;
	    }
	    
	    var information = [orderVm.fullname, orderVm.email, orderVm.street, orderVm.house, orderVm.payment, orderVm.gender];
	  

	    var checked = [];
	    var searchMenu = document.getElementById("menuContainerID").children;

	    for(var i = 0; i < searchMenu.length; i++) {
		if(searchMenu[i].id == 'burgersID') {
		    var menu = searchMenu[i].children;
		    if(menu[3].checked){
			checked.push(menuVm.burgers[i].name);
		    }
		}}

	    if(checked.length == 0)return;
	    
	    orderVm.customerInfo = information;
	    orderVm.orderInfo = checked;
	    orderVm.placedOrder = true;
	    
    	    return information;
     	}
    }});


