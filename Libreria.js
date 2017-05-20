

(function($){


$(document).on('ready', onDocumentLoaded);
 




function onDocumentLoaded() {
	//Marcar(); 
 Habilitar.Check();

// Habilitar.Caja();
 //Habilitar.Selector();
}

var Habilitar = {
		Check: function() {
			$.each($(".panel-body input:checkbox"), function(index, val) {
				 $($(this)).on('change',function(){
				 	if( $(this).is(':checked')){
				 		Habilitar.Bloqueo(index+1);
				 	}
				 	else{
				 		Habilitar.Desbloqueo(index+1);
				 	}
				 });
			});
			
		},
		Bloqueo: function(i){
			$('#txt-'+i+'').attr('disabled', 'disabled');
			$('#sel-'+i+'').attr('disabled', 'disabled');
		},
		Desbloqueo: function(i){
			$('#txt-'+i+'').removeAttr('disabled');
			$('#sel-'+i+'').removeAttr('disabled');
		},
		prueba: 'lel'

	};


	function Marcar(){		 
		 $.each($('input:checkbox'), function(index) {
		 	 var chec = $(this);
		 	 $(this).on('change', function() {
		 	 	 if ($(this).is(':checked')) {
		 	 	 	  Bloquear(index)
		 	 	 } else {
		 	 	 	  Desbloquear(index)
		 	 	 }	
		 	 	event.preventDefault();		 	 	
		 	 });
		 });
	}

	function Bloquear(i) {
		var  nombrecaja   = 'txt-'+i,
			 nombreselect = 'sel-'+i,
			 caja 		  = $('#nombrecaja'),
			 combo 		  = $('#nombreselect');

			 $(caja).attr('disabled', 'disabled');
			 $(combo).attr('disabled', 'disabled');		
	}

	function Desbloquear(i){
		var  nombrecaja   = 'txt-'+i,
			 nombreselect = 'sel-'+i,
			 caja 		  = $('#nombrecaja'),
			 combo 		  = $('#nombreselect');	

			 $(caja).removeAttr('disabled');
			 $(combo).removeAttr('disabled');	
	}





})(jQuery);

