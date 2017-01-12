<?php
/*
Template Name: HOME Page
*/
get_header();

?>

<style>
	.page_title{
		display: none;
	}
</style>
<div class="container">
	<?php echo do_shortcode( '[rev_slider homepage]' );?>
</div>

<div id="home_page_all">
	<div class="container" style="display: none">
	
		<?php ts_get_single_post_sidebar('left'); ?>
	
		<div class="<?php echo ts_get_liva_content_class(); ?>">
	
			<?php /* Start the Loop */ ?>
	
			<?php while ( have_posts() ) : the_post(); ?>
	
				<?php if (get_post_meta(get_the_ID(), 'show_page_content',true) != 'no'): ?>
	
					<?php get_template_part( 'content', 'page' ); ?>
	
				<?php endif; ?>
	
			<?php endwhile; // end of the loop. ?>
	
		</div>
	
		<?php ts_get_single_post_sidebar('right'); ?>
	
	</div>
	
	
	<div class="clearfix mar_top7"></div>
	
	<div id="home_block1">
		<div class="container">
			<?php
				if ($_SERVER['REMOTE_ADDR'] == '127.0.0.1') 
					echo do_shortcode('[content_block id=59 ]');
				else 
					echo do_shortcode('[content_block id=76 ]'); 
			?>
		</div>
	</div>
	
	<div id="home_block2">
		<div class="container">
			<?php
				if ($_SERVER['REMOTE_ADDR'] == '127.0.0.1') 
					echo do_shortcode('[content_block id=61 ]');
				else 
					echo do_shortcode('[content_block id=78 ]'); 
			?>
		</div>
	</div>
	
	<div id="home_block3">
		<div id="hb_3_c">
			<div class="container">
				<?php
					if ($_SERVER['REMOTE_ADDR'] == '127.0.0.1') 
						echo do_shortcode('[content_block id=63 ]');
					else 
						echo do_shortcode('[content_block id=80 ]'); 
				?>
			</div>
		</div>
	</div>
	
	<div id="home_block4">
		<div class="container">
			<?php
				if ($_SERVER['REMOTE_ADDR'] == '127.0.0.1') 
					echo do_shortcode('[content_block id=65 ]');
				else 
					echo do_shortcode('[content_block id=82 ]'); 
			?>
		</div>
	</div>
	
	<div id="home_block567">
		<div class="container">
			<div class="two_third">
				<?php
					if ($_SERVER['REMOTE_ADDR'] == '127.0.0.1') {
						//echo do_shortcode( '[advps-slideshow optset="3"]' );
						echo do_shortcode('[content_block id=153 ]');
					}
					else 
						echo do_shortcode('[content_block id=96 ]'); 
				?>
				
				<?php
					if ($_SERVER['REMOTE_ADDR'] == '127.0.0.1') 
						echo do_shortcode('[content_block id=69 ]');
					else 
						echo do_shortcode('[content_block id=86 ]'); 
				?>	
			</div>
			
			<div class="one_third last">
				<?php dynamic_sidebar( 'my_facebook' );?>
	
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
	
	<div id="home_block8">
		<div class="container">
			<?php
				if ($_SERVER['REMOTE_ADDR'] == '127.0.0.1') 
					echo do_shortcode('[content_block id=73 ]');
				else 
					echo do_shortcode('[content_block id=90 ]'); 
			?>
		</div>
	</div>
	
	<div id="home_block9">
		<div class="container">
			<?php
				if ($_SERVER['REMOTE_ADDR'] == '127.0.0.1') 
					echo do_shortcode('[content_block id=75 ]');
				else 
					echo do_shortcode('[content_block id=92 ]'); 
			?>
		</div>
		<div id="hb9_over"></div>
	</div>
	
	<div id="home_block10">
		<div class="container">
			<?php
				if ($_SERVER['REMOTE_ADDR'] == '127.0.0.1') 
					echo do_shortcode('[content_block id=77 ]');
				else 
					echo do_shortcode('[content_block id=94 ]'); 
			?>
		</div>
	</div>
</div>
<?php get_footer(); ?>