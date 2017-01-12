<?php
/**
 * The Sidebar containing the footer widget areas.
 *
 * @package liva
 * @since liva 1.0
 */
?>

<div class="footer <?php echo ot_get_option('footer_background_pattern'); ?>">
	
	<?php if (ot_get_option('show_footer_arrow') != 'no'): ?>
		<div class="arrow_02" style="display: none"></div>
	<?php endif; ?>

	<div class="clearfix mar_top5"></div>

	<div class="container">

		<div class="one_third">			<?php dynamic_sidebar( 'footer-left' ); ?>		</div><!-- end address section -->
		<div class="one_third">			<?php dynamic_sidebar( 'footer-center' ); ?>		</div><!-- end useful links -->
		<div class="one_third last">			<?php dynamic_sidebar( 'footer-right' ); ?>		</div><!-- end tweets -->
	</div>

	<div class="clearfix mar_top6xx"></div>

</div>
