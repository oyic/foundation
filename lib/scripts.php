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

			$cssFileURI = get_template_directory() . '/dist/sqe-style.css';
			wp_enqueue_style( 'sqe-style',$cssFileURI  , null, THEME_VERSION, 'all' );
		
			$jsFileURI = get_template_directory() . '/dist/js/sqe.js';
				wp_register_script('sqe-js', $jsFileURI, null, THEME_VERSION, true);
		
			// quick overrides style and js
	
			$quickStyle = 	get_template_directory() . '/_overrides/css/sqe-custom.css';
			$quickJs = 	get_template_directory() . '/_overrides/js/sqe-custom.js';

			if(file_exists($quickStyle) && filesize($quickStyle)>0):
				wp_enqueue_style( 'sqe-custom-css',$quickStyle  , null, THEME_VERSION, 'all' );
			endif;

			if(file_exists($quickJs) && filesize($quickJs)>0):
				wp_enqueue_script( 'sqe-custom-js', $quickJs , array( 'jquery' ), THEME_VERSION, true );
			endif;

			wp_localize_script( 'app', 'wpVars', [
				'logo' => get_template_directory_uri() . '/dist/images/logo.png',
			] );


			wp_enqueue_script( 'sqe-js' );
			
			// The wp_localize_script allows us to output the ajax_url path for our script to use.
			wp_localize_script(
				'sqe-js',
				'wpAjax', // Visible in sqe.js
				array( 'ajaxurl' => admin_url( 'admin-ajax.php' ) )
			);

		endif;
	}
	add_action('wp_enqueue_scripts', 'custom_enqueue_scripts');
endif;