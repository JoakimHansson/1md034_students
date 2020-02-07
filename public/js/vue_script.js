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
  },
  created: function() {
    /* When the page is loaded, get the current orders stored on the server.
     * (the server's code is in app.js) */
    socket.on('initialize', function(data) {
      this.orders = data.orders;
    }.bind(this));

    /* Whenever an addOrder is emitted by a client (every open map.html is
     * a client), the server responds with a currentQueue message (this is
     * defined in app.js). The message's data payload is the entire updated
     * order object. Here we define what the client should do with it.
     * Spoiler: We replace the current local order object with the new one. */
    socket.on('currentQueue', function(data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    getNext: function() {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
      let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function(event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      socket.emit('addOrder', {
        orderId: this.getNext(),
        details: {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y,
        },
        orderItems: ['Beans', 'Curry'],
      });
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
	customerInfo: [1],
	orderInfo: [],

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

	    console.log(hiddenVm.placedOrder);
	    
    	    return information;
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



