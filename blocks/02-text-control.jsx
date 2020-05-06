/**
 * 02 - Text Control
 */
import React from 'react';
import {TextControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import {category, domain} from './common';

const BlockEdit = props => {
  const {attributes, setAttributes} = props;
  const handleChange = value => {
    setAttributes({text: value});
  };
  return (
    <div className="my-block">
      <TextControl
        type="text"
        label={__('Say hello', domain)}
        value={attributes.text}
        onChange={handleChange}
      />
    </div>
  );
};

const BlockSave = props => {
  const {attributes} = props;
  return (
    <div className="my-block">
      <p>{attributes.text}</p>
    </div>
  );
};

export default {
  name: 'my/text-control',
  category: category,
  title: __('02 - Text Control', domain),
  description: __('A Text Control example block', domain),
  keywords: [__('Example', domain), __('Custom', domain)],
  attributes: {
    text: {
      type: 'string',
      default: __('Hello, Gutenberg!', domain)
    }
  },
  edit: BlockEdit,
  save: BlockSave
};
