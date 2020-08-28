(function () {
  // Reference node
  var $preview;

  function onReady() {
    if ('ResiazeObserver' in window) {
      // Use observer events for optimal performance
      function onResize(entries) {
        entries.forEach(function resize(entry) {
          window.parent.postMessage(
            {
              iframe: $preview.dataset.id,
              height: entry.contentRect.height
            },
            '*'
          );
        });
      }
      var observer = new window.ResizeObserver(onResize);
      observer.observe($preview);
    } else {
      // Fallback to window resize event
      function onResize() {
        window.parent.postMessage(
          {
            iframe: $preview.dataset.id,
            height: $preview.getBoundingClientRect().height
          },
          '*'
        );
      }
      window.addEventListener('resize', onResize);
      window.setTimeout(onResize, 100);
      onResize();
    }
  }

  // Call ready event after reference node has been found
  var now = Date.now();
  function onFrame() {
    // Give up after five seconds
    if (Date.now() - now > 5000) {
      return;
    }
    $preview = document.querySelector('.my-block-preview');
    if ($preview) {
      onReady();
    } else {
      window.requestAnimationFrame(onFrame);
    }
  }
  onFrame();
})();
