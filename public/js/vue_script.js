/* jslint es6:true, indent: 2 */
/* global Vue, io */
/* exported vm */
'use strict';
const socket = io();

/* eslint-disable-next-line no-unused-vars */
const vm = new Vue({
    el: '#dots',
    data: {
	orders: {},
	order: {
	    details: { x:0 , y:0 },
	    orderId: "",
	    orderItems: [],
	    customerInfo: [],
	    offset: { x: 0, y: 0}
	},
	counter: 0,
    },
  
    methods: {
	getNext: function() {
	    /* This function returns the next available key (order number) in
	     * the orders object, it works under the assumptions that all keys
	     * are integers. */
	    vm.counter += 1;
	    return vm.counter;
	},
	addOrder: function() {
	    /* When you click in the map, a click event object is sent as parameter
	     * to the function designated in v-on:click (i.e. this one).
	     * The click event object contains among other things different
	     * coordinates that we need when calculating where in the map the click
	     * actually happened. */

	    socket.emit('addOrder', {
		orderId: this.getNext(),
		details: vm.order.details,
		orderItems: hiddenVm.orderInfo,
		customerInfo: hiddenVm.customerInfo
	    });
	},
	displayOrder: function(event) {
	    /* When you click in the map, a click event object is sent as parameter
	     * to the function designated in v-on:click (i.e. this one).
	     * The click event object contains among other things different
	     * coordinates that we need when calculating where in the map the click
	     * actually happened. */
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    vm.order.details = {
		x: event.clientX - 10 - offset.x,
		y: event.clientY - 10 - offset.y,
	    },
	    
	    vm.order.orderId = "T"
	    
	},
    },
});


const menuVm = new Vue({
    el: '#menuContainerID',
    data: {
	burgers: burgers,
    }})

const infoVm = new Vue({
    el: '#infoID',

    data: {
	fullname: "joakim hansson",
	email: "joakim.hansson92@gamil.com",
	payment: "Swish",
	gender: "",

    }
});

const buttonVm = new Vue({
    el: '#orderButtonID',

    
    methods: {
        markDone: function() {

	    if(infoVm.fullname == "" || infoVm.email == "" || infoVm.payment == "" || infoVm.gender == ""){
		return;
	    }
	    
	    var information = [infoVm.fullname, infoVm.email, infoVm.payment, infoVm.gender];
	    

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
	    
	    hiddenVm.customerInfo = information;
	    hiddenVm.orderInfo = checked;
	    hiddenVm.placedOrder = true;
	    
    	    return information;
     	},
	addOrder: function() {

	    vm.addOrder();
	}
    }});

const hiddenVm = new Vue({
    el: '#hiddenId',

    data: {
	placedOrder: false,
	customerInfo: [],
	orderInfo: []
    }
});



