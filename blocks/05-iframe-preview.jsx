/**
 * 05 - iFrame Preview
 */
import React, {Fragment, useEffect, useRef} from 'react';
import {__} from '@wordpress/i18n';
import {category, domain, PreviewControls} from './common';

// Reuse components from "Preview Mode" example
import {BlockEditDefault, BlockSave} from './04-preview-mode';

const BlockEditIFrame = (props) => {
  const ref = useRef();
  const {attributes, clientId} = props;

  const isEditing = attributes.mode === 'edit';

  const onLoad = (ev) => {
    if (!ref.current) {
      return;
    }
    const preview = ref.current.querySelector('.my-block-preview');
    const iframe = ref.current.querySelector('.my-block-iframe');
    const doc = iframe.contentWindow.document;
    doc.body.innerHTML = preview.outerHTML;
    window.myBlocks.styles.forEach((href) => {
      const link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = href;
      doc.head.appendChild(link);
    });
    window.myBlocks.scripts.forEach((src) => {
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
      iframe.id = `my_block_${clientId}`;
      iframe.className = 'my-block-iframe';
      iframe.setAttribute('scrolling', 'no');
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
      <div data-id={`my_block_${clientId}`} className='my-block-preview'>
        <BlockSave {...props} />
      </div>
    </div>
  );
};

const BlockEdit = (props) => {
  const {attributes, setAttributes} = props;

  const isEditing = attributes.mode === 'edit';

  const toggleMode = (ev) => {
    setAttributes({mode: isEditing ? 'preview' : 'edit'});
  };

  return (
    <Fragment>
      <PreviewControls isEditing={isEditing} onClick={toggleMode} />
      {isEditing ? <BlockEditDefault {...props} /> : null}
      {isEditing ? null : <BlockEditIFrame {...props} />}
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
      default: __('Hello, Gutenberg!', domain)
    },
    mode: {
      type: 'string',
      default: 'edit'
    }
  },
  edit: BlockEdit,
  save: BlockSave
};
