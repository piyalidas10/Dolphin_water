// JavaScript Document
$(document).ready(function(){
	
	function water(){
		$(".water").animate({
			backgroundPositionX: '433px',
			backgroundPositionY: 'top'
		},2000,function(){
			$(".water").animate({
			backgroundPosition: '0px',
			backgroundPositionY: 'top'
		},0,function(){
			water();
		});
		});
	}
	water();
	
	$(".sun").animate({
		top:"20px",
		backgroundColor:"#feb511"
	},5000);
	
	
	
});