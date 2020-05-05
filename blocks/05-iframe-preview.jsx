/**
 * 05 - iFrame Preview
 */
import React, {Fragment, useEffect, useRef} from 'react';
import {TextControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import {category, domain, PreviewControls} from './common';

// Reuse components from "Preview Mode" example
import {EditDefault, EditPreview, Save} from './04-preview-mode';

const EditIFrame = props => {
  const ref = useRef();
  const {attributes, clientId} = props;

  const isEditing = attributes.mode === 'edit';

  const onLoad = ev => {
    if (!ref.current) {
      return;
    }
    const preview = ref.current.querySelector('.my-block-preview');
    const iframe = ref.current.querySelector('.my-block-iframe');
    const doc = iframe.contentWindow.document;
    doc.body.innerHTML = preview.outerHTML;
    window.myBlocks.styles.forEach(href => {
      const link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = href;
      doc.head.appendChild(link);
    });
    window.myBlocks.scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      doc.body.appendChild(script);
    });
  };

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    let iframe = ref.current.querySelector('.my-block-iframe');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.setAttribute('data-block', clientId);
      iframe.setAttribute('scrolling', 'no');
      iframe.className = 'my-block-iframe';
      iframe.style.height = 0;
    }
    iframe.addEventListener('load', onLoad);
    ref.current.appendChild(iframe);
    return () => {
      iframe.removeEventListener('load', onLoad);
    };
  }, [isEditing]);

  return (
    <div ref={ref}>
      <div className="my-block-preview">
        <EditPreview {...props} />
      </div>
    </div>
  );
};

const Edit = props => {
  const {attributes, setAttributes} = props;

  const isEditing = attributes.mode === 'edit';

  const toggleMode = ev => {
    setAttributes({mode: isEditing ? 'preview' : 'edit'});
  };

  return (
    <Fragment>
      <PreviewControls isEditing={isEditing} onClick={toggleMode} />
      {isEditing ? <EditDefault {...props} /> : null}
      {isEditing ? null : <EditIFrame {...props} />}
    </Fragment>
  );
};

export default {
  name: 'my/iframe-preview',
  category: category,
  title: __('05 - iFrame Preview', domain),
  description: __('An example block that uses an iframe preview', domain),
  keywords: [__('Example', domain), __('Custom', domain)],
  attributes: {
    text: {
      type: 'string',
      default: ''
    },
    mode: {
      type: 'string',
      default: 'edit'
    }
  },
  edit: Edit,
  save: Save
};

window.addEventListener('message', ({data}) => {
  if (data !== Object(data)) {
    return;
  }
  if ('blockId' in data && 'height' in data) {
    const iframe = document.querySelector(
      `iframe[data-block="${data.blockId}"]`
    );
    if (iframe) {
      iframe.style.height = Math.ceil(data.height) + 'px';
    }
  }
});