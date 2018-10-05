$(function(){
	//Effects
	$(".puff_effect").on("click", function(){
		$(".pic1").effect("puff",{
			percent: 200
		}, 2000);
	});
	//Bounce
	$(".bounce_effect").on("click", function(){
		$(".pic2").effect("bounce",{
			direction: 'left',
			distance: 100,
			times: 20,
			mode: 'hide'
		}, 3000);
	});	
	//Explode
	$(".explode_effect").on("click", function(){
		$(".explode").effect("explode",{
			pieces: 9
		}, 2000, function(){
			$(this).effect("explode", {
				pieces: 56,
				mode: 'show'
			}, 2000);
		});
	});
//Show/Hide
$(".btn_show").on("click", function(){
	$(".pic3").show("bounce", {
		direction: 'left',
		distance: 50,
		times: 7
	}, 2000);
  });
$(".btn_hide").on("click", function(){
	$(".pic3").hide("drop", {
		direction: 'left',
	}, 2000);
  });
$(".btn_show1").on("click", function(){
	$(".effect_show").show("explode", {
		pieces: 9
	}, 2000);
  });
$(".btn_hide1").on("click", function(){
	$(".effect_show").hide("shake", {
		direction: 'right',
		dictance: 50,
		times: 7
	}, 2000);
  });
//Add class, Remove class
	$(".ad_class").on("click", function(){
		$(".div").addClass("anim", 2000);
	});
	$(".rm_class").on("click", function(){
		$(".div").removeClass("anim", 2000);
	});
//Switch Class
	$(".sw_class").on("click", function(){
	$(".div1").switchClass("div1", "anim", 2000);
	});
//Color Animation
	$(".btn_anim").on("click", function(){
		$(".animate").animate({
			"fontSize": "26px",
			"color": "white",
			"backgroundColor": "blue",
			"width": "350px",
		}, 3000);
	});
//Accordion (при загрузку все секции закрыты)
	$(".accord").accordion({
		active: false,
		collapsible: true,
		heightStyle: "content",
	});
//Tabs
	$(".tabs").tabs({
		active: 2,
		collapsible: true,
	});
//Menu
	$("ul.menu").menu();
//Button
	$(".btn-jquery").button();
//Datepicker
	$(".datepic").datepicker({
		yearRange: "1950:2018",
		changeYear: true,
		changeMonth: true,
		showAnim: 'explode',
		showOn: 'both',
		duration: 'slow',
		numberOfMonths: [2,3]
	});
//Slider
	$(".slider-jquery").slider({
      range: true,
      min: 0,
      max: 1000,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( ".slider-jquery" ).slider( "values", 0 ) +
      " - $" + $( ".slider-jquery" ).slider( "values", 1 ) );
//Dialog
	$(".btn-dial").on("click", function(){
		$("div.hide").dialog({
			modal: true,
			buttons: {
				Ok: function(){
					$(this).dialog("close");
				}
			}
		});
	});
//Появление формы через время
/*	setTimeout(function(){
		$("form.hide").dialog({
			modal: true
		});
	}, 2000);*/
//Autocomplete
let lang = ["HTML", "CSS", "JavaScript", "Java", "Python", "Ruby", "C++", "C#", "PHP", "VisualBasic", "Pascal", "Algol", "Erlang", "Scala"];
$("input.lang").autocomplete({
	source: lang
});
//Draggable (перемещать возможно картинки)
$("img.drag").draggable({
	helper: "clone", /*(создание копии каринки)*/
	delay: 300, /*(перемещение через определенное время 3 секунды)*/
	opacity: 0.5, 
	revert: true, /*(возвращение копии на изгначальную позицию)*/
	zIndex: 1000 /*(распологается сверх элементов при перемещении)*/
});
//Droppable (Заполнение корзины картинками)
$("img.drag1").draggable({
	revert: "invalid",
	start: function(event, ui){
		ui.helper.css('transform', 'rotate(5deg) scale(1.2)')
	},
	stop: function(event, ui){
		ui.helper.css('transform', 'rotate(0deg) scale(1)')
	},
	zIndex: 200
});
$(".trash").droppable({
	activeClass: 'hightlight',
	drop: function(event, ui){
		ui.helper.hide('explode');
		$(this).attr('src', 'images/trashcan-full-icon.png')
	}
});
//Sortable
$(".sort1").sortable({
	connectWith: ".sort2",
	helper: "clone",
	revert: true
	});
$(".sort2").sortable({
	connectWith: ".sort1"
});
//Resizable
$(".resize").resizable({
	animate: true,
	animationDuration: "fast"
});
//Colorbox
$("a.gal").colorbox({
	rel: "gal1",
	speed: 700,
	width: 700,
	height: 700,
	innerWidht: 350,
	innerHeight: 350,
	opacity: 0.5,
	slideshow: true,
	slideshowSpeed: 2000,
	slideshowAuto: false,
	current: "Рисунок {current} из {total}",
	slideshowStart: "Запуск слайдшоу",
	slideshowStop: "Остановка слайдшоу",
 });
$("a.coltext").colorbox({
	inline: true,
	width: "50%"
});
//Inline youtube
$("a.colyoutube").colorbox({
	iframe: true,
	width: 550,
	height: 550
});
//Superfish menu
$("ul.sf-menu").superfish({
	delay: 1000,
	speed: "slow"
});
//Fancybox
/*$("a.group").fancybox({
	'hideOnContentClick': true,
	'transitionIn': 'elastic',
	'transitionOut': 'elastic',
	'speedIn': 600, 
	'speedOut': 200, 
	'overlayShow': false
	'scrolling' :	'yes'
});*/
//BxSlider
$(".slider").bxSlider({
	minSlides: 3,
	maxSlides: 2,
	moveSlides: 1,
	slideMargin: 20,
	slideWidth: 600,
	auto: true,
	captions: true
});
});