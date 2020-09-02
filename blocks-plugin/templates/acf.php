<?php

// 03 - ACF

$text = get_field('text');

?>
<div class="my-block">
  <p><?php echo esc_html($text); ?></p>
</div>
