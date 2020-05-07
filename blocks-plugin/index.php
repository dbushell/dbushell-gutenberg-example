<?php
/*
Plugin Name: Gutenberg Example
Plugin URI: https://github.com/dbushell/dbushell-gutenberg-example
Description: Gutenberg Example
Version: 1.0.0
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
      'wp_enqueue_scripts',
      array($this, 'enqueue_block_styles')
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
          'slug'  => $this->category,
          'title' => __('My Blocks', $this->domain),
          'icon'  => null
        )
      ),
      $categories
    );
  }

  /**
   * Action: `wp_enqueue_scripts`
   */
  public function enqueue_block_styles() {
    wp_register_style(
      'my-blocks',
      plugins_url('my-blocks.css', __FILE__),
      array(),
      filemtime(plugin_dir_path( __FILE__ ) . 'my-blocks.css'),
      'all'
    );
    wp_enqueue_style('my-blocks');
  }

  /**
   * Action: `enqueue_block_editor_assets`
   */
  public function enqueue_block_editor_assets() {
    // $plugin = get_plugin_data(__FILE__);
    // $version = $plugin['Version'];

    $script = 'my-blocks' . ($this->is_debug() ? '' : '.min') . '.js';

    wp_register_script(
      'my-blocks',
      plugins_url(
        $script,
        __FILE__
      ),
      array('wp-blocks', 'wp-components', 'wp-editor', 'wp-i18n'),
      filemtime(plugin_dir_path( __FILE__ ) . $script),
      true
    );

    wp_localize_script('my-blocks', 'myBlocks', array(
      'scripts' => array(
        plugins_url('my-blocks-iframe.js', __FILE__)
      ),
      'styles' => array(
        get_stylesheet_directory_uri() . '/style.css',
        plugins_url('my-blocks.css', __FILE__)
      )
    ));

    wp_enqueue_script('my-blocks');

    wp_register_style(
      'my-blocks-admin',
      plugins_url('my-blocks-admin.css', __FILE__),
      array(),
      filemtime(plugin_dir_path( __FILE__ ) . 'my-blocks-admin.css'),
      'all'
    );

    wp_enqueue_style('my-blocks-admin');

    $this->enqueue_block_styles();
  }

  /**
   * Action: `acf/init`
   */
  public function acf_init() {
    acf_register_block_type(array(
      'name'        => 'my/acf',
      'title'       => __('03 - ACF', $this->domain),
      'description' => __('A Gutenberg block example registered with the ACF plugin', $this->domain),
      'category'    => $this->category,
      'supports'    => array(
        'align'           => false,
        'customClassName' => false
      ),
      'render_callback' => function() {
        // $args = func_get_args();
        // var_dump($args);
        $text = get_field('text');
        $text = esc_html($text);
        echo '<div class="my-block">';
        echo "<p>{$text}</p>";
        echo '</div>';
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

?>
