<?php

$textBlock = $block['innerBlocks'][0];

$acfBlock = $block['innerBlocks'][1];

?>
<div class="my-block">
  <p><?php echo esc_html($textBlock['attrs']['text']); ?></p>
  <p><?php echo esc_html($acfBlock['attrs']['data']['text']); ?></p>
</div>
