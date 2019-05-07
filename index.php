<?php get_header(); ?>

<form action="<?php echo get_stylesheet_directory_uri(); ?>/pdf.php">
	<input type="hidden" value="sample">
	<input type="submit" value="Print PDF">
</form>

<?php get_footer(); ?>