'use strict';

let isTouchingFooter = false;
let isPlaceHold = false;

document.addEventListener("scroll", navStickFunction);

function navStickFunction() {

	const headerHeight = document.querySelector('header').offsetHeight;
	const footerHeight = document.querySelector('footer').offsetHeight;
	let scrollY = document.documentElement.scrollTop;
	let windowHeight = document.documentElement.clientHeight;
	let pageHeight = document.documentElement.scrollHeight;

	let distanceToFooter = pageHeight - scrollY - windowHeight;

	//When user scrolled TO footer
	if (distanceToFooter < footerHeight) fixTop();
	//When scrolled BACK from footer
	if (distanceToFooter > footerHeight && isTouchingFooter) removeFixTop();
	//When user scrolled header
	if ((scrollY > headerHeight) && !isTouchingFooter) stickTop();
	//When user scroll back to header
	if (scrollY < headerHeight) removeStickTop();

	function stickTop(){
		let placeHolder = document.getElementById('placeHolder');
		let navigation = document.getElementById("navigation");

		//to fill empty space when nav is sticky
		if(!isPlaceHold){
			placeHolder.style.height = `${navigation.offsetHeight}px`;
			isPlaceHold = true;
		}
		if(!navigation.classList.contains('sticky-nav')){
			navigation.classList.add("sticky-nav");
		}
		//let rect = navigation.getBoundingClientRect();

		//console.log(rect.top);
	}
	function removeStickTop(){
		let placeHolder = document.getElementById('placeHolder');
		let navigation = document.getElementById("navigation");

		placeHolder.style.height = `0px`;
		isPlaceHold = false;
		navigation.classList.remove("sticky-nav");
		console.log('4');
	}
	//problems here
	function fixTop(){
		isTouchingFooter = true;
		let navigation = document.getElementById("navigation");
		let placeHolder = document.getElementById('placeHolder');

		navigation.classList.remove("sticky-nav");
		placeHolder.style.height = `0px`;
		isPlaceHold=false;
		navigation.classList.add('fixed-nav');
		//THIS IS PROBLEM
		navigation.style.top = `${pageHeight-(windowHeight+footerHeight)}}px`;
		//console.log(footerHeight)

	}
	function removeFixTop(){
		isTouchingFooter = false;
		let navigation = document.getElementById("navigation");
		let placeHolder = document.getElementById('placeHolder');

		placeHolder.style.height = `${navigation.offsetHeight}px`;
		isPlaceHold=true;

		navigation.classList.remove('fixed-nav');
		navigation.style.top='';
		navigation.classList.add('sticky-nav');
		console.log('2');

	}
}