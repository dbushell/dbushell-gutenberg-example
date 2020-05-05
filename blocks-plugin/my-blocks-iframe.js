(function () {
  // Feature detection
  var isObservable = 'ResizeObserver' in window;

  // Remove body margin
  document.body.style.margin = '0px';

  // Get block preview node
  const $preview = document.querySelector('.my-block-preview');
  if (!$preview) {
    return;
  }

  // Use absolute position to contain margins
  $preview.style.position = 'absolute';
  $preview.style.width = '100%';

  // Callback to pass the block height to parent window
  function resizeMessage(height) {
    window.parent.postMessage(
      {
        blockId: window.frameElement.getAttribute('data-block'),
        height: height
      },
      '*'
    );
  }

  // Use `ResizeObserver` if supported by browser
  if (isObservable) {
    var observer = new ResizeObserver(function (entries) {
      entries.forEach(function (entry) {
        var rect = $preview.getBoundingClientRect();
        resizeMessage(entry.contentRect.height);
      });
    });
    observer.observe($preview);
    return;
  }

  // Fallback to `resize` event for older browsers
  function onResize(ev) {
    var rect = $preview.getBoundingClientRect();
    resizeMessage(rect.height);
  }
  window.addEventListener('resize', onResize);
  onResize();
})();
