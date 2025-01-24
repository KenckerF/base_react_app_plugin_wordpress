<?php
/**
 * Plugin Name: React Example
 */
defined('ABSPATH') ||
die();

/**
 * Registers a shortcode that simply displays a placeholder for our React App.
 */

function enqueue_react_app_scripts() {
    wp_enqueue_script(
        'react-app-script',
        plugin_dir_url( __FILE__ ) . 'build/index.js',
        [ 'wp-element' ], // wp-element charge React et ReactDOM
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ),
        true
    );

    wp_enqueue_style(
        'react-app-style',
        plugin_dir_url( __FILE__ ) . 'build/style.css',
        [],
        filemtime( plugin_dir_path( __FILE__ ) . 'build/style.css' )
    );
}

add_action( 'wp_enqueue_scripts', 'enqueue_react_app_scripts' );

function add_react_app_div() {
    echo '<div id="react-app">App here</div>';
}

add_shortcode( 'example_react_app', 'add_react_app_div' );