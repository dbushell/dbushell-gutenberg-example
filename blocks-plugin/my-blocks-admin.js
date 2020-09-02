(function (window, document) {
  window.addEventListener('message', (ev) => {
    const data = ev.data;
    if (
      data !== Object(data) ||
      !data.hasOwnProperty('iframe') ||
      !data.hasOwnProperty('height')
    ) {
      return;
    }
    var iframe = document.getElementById(data.iframe);
    window.requestAnimationFrame(function () {
      if (iframe) {
        iframe.style.height = data.height + 'px';
      }
    });
  });
})(window, document);
