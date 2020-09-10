(function (window, document) {
  // Reference node
  var $preview;

  function postHeight(height) {
    window.parent.postMessage(
      {
        iframe: $preview.dataset.id,
        height: height
      },
      '*'
    );
  }

  function onReady() {
    if ('ResizeObserver' in window) {
      // Use observer events for optimal performance
      function onResize(entries) {
        entries.forEach(function resize(entry) {
          const newHeight = entry.contentRect.height;
          if (newHeight > 0) {
            postHeight(newHeight);
          }
        });
      }
      var observer = new window.ResizeObserver(onResize);
      observer.observe($preview);
    } else {
      // Fallback to window resize event
      function onResize() {
        const newHeight = $preview.getBoundingClientRect().height;
        if (newHeight > 0) {
          postHeight(newHeight);
        }
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
})(window, document);
