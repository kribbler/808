<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package liva
 * @since liva 1.0
 */

get_header(); ?>
<div class="container">
	<div class="content_left">
		<?php if ( have_posts() ) : ?>
			<?php /* Start the Loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'content', get_post_format() ); ?>
			<?php endwhile; ?>
			
			<?php ts_the_liva_navi(); ?>
		<?php else : //No posts were found ?>
			<?php get_template_part( 'no-results' ); ?>
		<?php endif; ?>
	</div>
	<?php get_sidebar('right'); ?>
</div>
<div class="clearfix mar_top7"></div>
<?php get_footer(); ?>