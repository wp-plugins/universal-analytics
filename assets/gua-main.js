jQuery(document).ready(function(e) {

	jQuery('#classic_plugin_switch').bootstrapSwitch('size', 'small');
	jQuery('#classic_plugin_switch').bootstrapSwitch('onColor', 'success');
	jQuery('#classic_plugin_switch').bootstrapSwitch('offColor', 'danger');

	jQuery('#plugin_switch').bootstrapSwitch('size', 'small');
	jQuery('#plugin_switch').bootstrapSwitch('onColor', 'success');
	jQuery('#plugin_switch').bootstrapSwitch('offColor', 'danger');

	jQuery('#custom_plugin_switch').bootstrapSwitch('size', 'small');
	jQuery('#custom_plugin_switch').bootstrapSwitch('onColor', 'success');
	jQuery('#custom_plugin_switch').bootstrapSwitch('offColor', 'danger');

	jQuery(function() { 
    jQuery('#save-gua-settings').click(function(e) {
      var property_id	=	jQuery('#web_property_id').val();
			var tracking_off_for_this_role	=	jQuery('#tracking_off_for_this_role').val();
			var ajax_url					  =	jQuery('#ajax_url').val();

			if(jQuery('#in_footer').is(':checked')){
				var in_footer	=	'on';	
			}else{
				var in_footer	=	'off';
			}

			if(jQuery('#plugin_switch').is(':checked')){
				var plugin_switch	=	'on';	
			}else{
				var plugin_switch	=	'off';
			}

			if(jQuery('#track_links').is(':checked')){
				var track_links	=	'on';	
			}else{
				var track_links	=	'off';
			}
			
			if(jQuery('#enable_display').is(':checked')){
				var enable_display	=	'on';	
			}else{
				var enable_display	=	'off';
			}			

			if(jQuery('#anonymize_ip').is(':checked')){
				var anonymize_ip	=	'on';	
			}else{
				var anonymize_ip	=	'off';
			}

			if(jQuery('#tracking_off_for_role').is(':checked')){
				var tracking_off_for_role	=	'on';	
			}else{
				var tracking_off_for_role	=	'off';
			}

			if(property_id.indexOf('UA-') == -1){
				jQuery('#web_property_id').parent('.col-sm-9').addClass('has-error');
				jQuery('.error').css('color', '#F00').removeClass('hide');

			}else{
				//alert('ok proceed on ajax');
				jQuery.ajax({
    			url: ajax_url,
    			data: {
        		'action':'mdg_save_google_universal_analytics_settings',
        		'plugin_switch' : plugin_switch,
						'in_footer' : in_footer,
						'property_id' : property_id,
						'track_links' : track_links,
						'enable_display' : enable_display,							
						'anonymize_ip' : anonymize_ip,
						'tracking_off_for_role' 	  : tracking_off_for_role,
						'tracking_off_for_this_role' : tracking_off_for_this_role
    			},

    			success:function(data) {
        		jQuery('#web_property_id').parent('.has-error').removeClass('has-error');
						jQuery('.error').addClass('hide');
						jQuery('.form-horizontal .alert').fadeIn().removeClass('hide');
						jQuery('.form-horizontal .alert').delay(3000).fadeOut(500);		

						// this allows the page to reload and show any additional WP alerts
						location.reload();
     			},

					error: function(errorThrown){

					}
    		});
			}
		});		
	});
});