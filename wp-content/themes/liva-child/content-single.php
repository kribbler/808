<?php
/**
 * The default template for displaying single post content
 *
 * @package liva
 * @since liva 1.0
 */

?><style type="text/css">	.page_title{		display: block;	}	</style>
<?php
$thumb = '';
switch (get_post_format())
{
	case 'gallery':
		$gallery = get_post_meta($post->ID, 'gallery_images',true);
		if (is_array($gallery) && count($gallery) > 0)
		{
			$thumb = "
				<div class='flexslider one-col control-nav'>
					<ul class='slides'>";
			foreach ($gallery as $image)
			{
				$thumb .= "<li>".ts_get_resized_image_sidebar($image['image'],array('full', 'one-sidebar', 'two-sidebars'),$image['title'])."</li>";
			}
			$thumb .= "
					</ul>
				  </div>
				  <div class='clear'></div>";
		}
		break;
	case 'video':
		$url = get_post_meta($post -> ID, 'video_url',true);
		if (!empty($url))
		{
			$thumb = ts_get_embaded_video($url);
		}
		else if (empty($url))
		{
			$thumb = get_post_meta($post -> ID, 'embedded_video',true);
		}
		$thumb = '<div class="video_frame">'.$thumb.'</div>';
		break;
	default:
		if (has_post_thumbnail()) {
			$thumb = '<div class="image_frame"><a href="'. get_permalink() .'" title="'.esc_attr(get_the_title()).'">'.ts_get_resized_post_thumbnail_sidebar($post -> ID, array('full', 'one-sidebar', 'two-sidebars'),get_the_title()).'</a></div>';
		}
		break;
}

$classes = array(
	'post',
	'blog_post',
	(get_post_format() ? 'format-'.get_post_format() : '')
);

?>
<div <?php post_class($classes); ?>>	
	<div class="blog_postcontent">
		<?php echo $thumb; ?>
		
		<h3><a href="<?php the_permalink();?>" title="<?php echo esc_attr(get_the_title()); ?>"><?php the_title(); ?></a></h3>
		<?php //get_template_part('inc/postinfo') ?>
		<div class="post_info_content">
			<?php the_content( ); ?>
			<?php //wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'liva' ), 'after' => '</div>' ) ); ?>
		</div>
	</div>
</div>
<div class="clearfix divider_line"></div>

<?php //ts_share_buttons('pull-right'); ?>



<div class="clearfix"></div>



<div class="clearfix mar_top5"></div>