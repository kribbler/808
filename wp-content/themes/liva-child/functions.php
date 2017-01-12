<?php

//wp_register_style( 'custom_css', get_stylesheet_directory_uri() . '/style.css', array(), null, 'all' );
//wp_enqueue_style( 'custom_css' );

add_action('wp_head','custom_css',1);
function custom_css(){
	$source = get_stylesheet_directory_uri() . '/style.css';
	wp_enqueue_style('custom_css', $source);
}

register_nav_menus( array(
	'header-menu'=> __( 'Header Menu', 'liva' ),
	'primary' => __( 'Primary Menu', 'liva' ),
	'copyright-bar' => __( 'Copyright bar menu', 'liva' ),
) ); 

function child_ts_theme_widgets_init(){
	register_sidebar( array(
        'name' => __( 'Header Phone', 'liva' ),
        'id' => 'header_phone',
        'before_widget' => '<div id="%1$s" class="header_phone sidebar_widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<div class="sidebar_title"><h3>',
        'after_title' => '</h3></div>',
    ) );
	
	register_sidebar( array(
        'name' => __( 'Header Social', 'liva' ),
        'id' => 'header_social',
        'before_widget' => '<div id="%1$s" class="header_social sidebar_widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<div class="sidebar_title"><h3>',
        'after_title' => '</h3></div>',
    ) );
	
	register_sidebar( array(
        'name' => __( 'Copyright area 1', 'liva' ),
        'id' => 'coyright-area-1',
        'before_widget' => '<div id="%1$s" class="sidebar_widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<div class="sidebar_title"><h3>',
        'after_title' => '</h3></div>',
    ) );
	
	register_sidebar( array(
        'name' => __( 'Copyright area 2', 'liva' ),
        'id' => 'coyright-area-2',
        'before_widget' => '<div id="%1$s" class="sidebar_widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<div class="sidebar_title"><h3>',
        'after_title' => '</h3></div>',
    ) );
	
	register_sidebar( array(
        'name' => __( 'Footer left', 'liva' ),
        'id' => 'footer-left',
        'before_widget' => '<div id="%1$s" class="sidebar_widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<div class="sidebar_title"><h3>',
        'after_title' => '</h3></div>',
    ) );
	
	register_sidebar( array(
        'name' => __( 'Footer center', 'liva' ),
        'id' => 'footer-center',
        'before_widget' => '<div id="%1$s" class="sidebar_widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<div class="sidebar_title"><h3>',
        'after_title' => '</h3></div>',
    ) );
	
	register_sidebar( array(
        'name' => __( 'Footer right', 'liva' ),
        'id' => 'footer-right',
        'before_widget' => '<div id="%1$s" class="sidebar_widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<div class="sidebar_title"><h3>',
        'after_title' => '</h3></div>',
    ) );
	
	register_sidebar(array(
            'name' => __( 'My Facebook', 'theretailer' ),
            'id' => 'my_facebook',
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h1 class="widget-title">',
            'after_title' => '</h1>',
        ));
	
}

add_action( 'widgets_init', 'child_ts_theme_widgets_init' );