jquery.badwords_plugin.js
=========================

Jquery bad words plugin to validate input

The plugin contains a predefined Spanish and English Words.

Getting Started

Include after Jquery library JS 

<script src="js/jquery.badwords_plugin.js"></script>


Now initialize the plugin inside document ready and define the id of input type=text


	//<input id="input_name" class="inputTextNameBox" type="text" value="">

	$(document).ready(function(){
		$('#input_name').badwords();
	});

You can pass a message in the constructor

	$('#input_name').badwords('Dont use bad words please.');
 
Also You can add you custom word validation passing the array in the constructor.

	var cust =new Array('mamita', 'papita');
	$('#platillo_nombre_platillo').badwords(cust);

 



 v 1.1 New variations words added 
