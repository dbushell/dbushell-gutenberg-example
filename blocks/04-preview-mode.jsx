/**
 * 04 - Preview Mode
 */
import React, {Fragment} from 'react';
import {TextControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import {category, domain, PreviewControls} from './common';

export const BlockEditDefault = props => {
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

export const BlockSave = props => {
  const {attributes} = props;
  return (
    <div className="my-block">
      <p>{attributes.text}</p>
    </div>
  );
};

export const BlockEdit = props => {
  const {attributes, setAttributes} = props;
  const isEditing = attributes.mode === 'edit';
  const toggleMode = ev => {
    setAttributes({mode: isEditing ? 'preview' : 'edit'});
  };
  return (
    <Fragment>
      <PreviewControls isEditing={isEditing} onClick={toggleMode} />
      {isEditing ? <BlockEditDefault {...props} /> : null}
      {isEditing ? null : <BlockSave {...props} />}
    </Fragment>
  );
};

export default {
  name: 'my/preview-mode',
  category: category,
  title: __('04 - Preview Mode', domain),
  description: __(
    'A Gutenberg block example with an edit/preview toggle',
    domain
  ),
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
