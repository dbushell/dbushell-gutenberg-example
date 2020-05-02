<?php
/*
Plugin Name: Gutenberg Example
Plugin URI: https://github.com/dbushell/dbushell-gutenberg-example
Description: Gutenberg Example
Version: 0.1.0
Author: David Bushell
Text Domain: my-domain
*/

if ( ! defined( 'ABSPATH' ) ) exit;

if ( ! class_exists('My_Blocks') ) :

class My_Blocks {
  // Default custom category
  private $category = 'my-blocks';

  // Text Domain for @wordpress/i18n
  private $domain = 'my-domain';

  function __construct() {
    // Do nothing...
  }

  public function initialize() {
    add_filter(
      'block_categories',
      array($this, 'block_categories'),
      10, 2
    );
    add_action(
      'enqueue_block_editor_assets',
      array($this, 'enqueue_block_editor_assets')
    );
    add_action('acf/init',
      array($this, 'acf_init')
    );
    add_filter(
      'acf/settings/load_json',
      array($this, 'acf_settings_load_json')
    );
  }

  public function is_debug() {
    return defined('WP_DEBUG') && WP_DEBUG;
  }

  /**
   * Filter: `block_categories`
   */
  public function block_categories($categories, $post) {
    return array_merge(
      array(
        array(
          'slug'  => 'my/blocks',
          'title' => __('My Blocks', $this->domain),
          'icon'  => null
        )
      ),
      $categories
    );
  }

  /**
   * Action: `enqueue_block_editor_assets`
   */
  function enqueue_block_editor_assets() {
    wp_register_script(
      'my-blocks',
      plugins_url(
        'blocks' . ($this->is_debug() ? '' : '.min') . '.js',
        __FILE__
      ),
      array('wp-editor', 'wp-blocks'),
      false,
      true
    );
    wp_enqueue_script('my-blocks');
  }

  /**
   * Action: `acf/init`
   */
  function acf_init() {
    acf_register_block_type(array(
      'name'        => 'my/acf',
      'title'       => __('03 - ACF', $this->domain),
      'description' => __('An ACF Text Field example block', $this->domain),
      'category'    => $this->category,
      'supports'    => array(
        'align'           => false,
        'customClassName' => false
      ),
      'render_callback' => function() {
        // $args = func_get_args();
        // var_dump($args);
        echo '<p>Text Field: ' . get_field('text') . '</p>';
      }
    ));
  }

  /**
   * Filter: `acf/settings/load_json`
   */
  public function acf_settings_load_json($paths) {
    $dir = plugin_dir_path(__FILE__);
    $paths[] = "{$dir}acf-json";
    return $paths;
  }
}

/**
 * Initialize single instance of `My_Blocks` class
 */
function my_blocks() {
  global $my_blocks;
  if ( ! isset($my_blocks)) {
    $my_blocks = new My_Blocks();
    $my_blocks->initialize();
  }
  return $my_blocks;
}

my_blocks();

endif;
