<?php
/**
 * Enqueue scripts
 */

if(!function_exists('custom_enqueue_scripts')):
	function custom_enqueue_scripts() {
		if(!is_admin()):
			global $theme;
			// default style.css
			wp_enqueue_style( "wp-styles",get_stylesheet_uri());

			$cssFileURI = get_template_directory() . '/dist/css/sqe.css';
			wp_enqueue_style( 'app-style',$cssFileURI  , null, THEME_VERSION, 'all' );
		
			$jsFileURI = get_template_directory() . '/dist/js/sqe.js';
				wp_register_script('app-js', $jsFileURI, null, THEME_VERSION, true);
			// Add Google Map API on contact page-contact
			
			wp_localize_script( 'app', 'wpVars', [
				'logo' => get_template_directory_uri() . '/dist/images/logo.png',

			] );
			wp_enqueue_script( 'app' );
			
			// The wp_localize_script allows us to output the ajax_url path for our script to use.
			wp_localize_script(
				'app',
				'wpAjax', // Visible in app.js
				array( 'ajaxurl' => admin_url( 'admin-ajax.php' ) )
			);

		endif;
	}
	add_action('wp_enqueue_scripts', 'custom_enqueue_scripts');
endif;