/**
 * 04 - Preview Mode
 */
import React, {Fragment} from 'react';
import {TextControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import {category, domain, PreviewControls} from './common';

export const EditDefault = props => {
  const {attributes, setAttributes} = props;
  const handleChange = value => {
    setAttributes({text: value});
  };
  return (
    <div>
      <TextControl
        type="text"
        label={__('Text Control', domain)}
        value={attributes.text}
        onChange={handleChange}
      />
    </div>
  );
};

export const EditPreview = props => {
  const {attributes} = props;
  return (
    <div className="my-block">
      <h5>{__('Preview', domain)}</h5>
      <p>{`Text Control: ${attributes.text}`}</p>
    </div>
  );
};

export const Edit = props => {
  const {attributes, setAttributes} = props;

  const isEditing = attributes.mode === 'edit';

  const toggleMode = ev => {
    setAttributes({mode: isEditing ? 'preview' : 'edit'});
  };

  return (
    <Fragment>
      <PreviewControls isEditing={isEditing} onClick={toggleMode} />
      {isEditing ? <EditDefault {...props} /> : null}
      {isEditing ? null : <EditPreview {...props} />}
    </Fragment>
  );
};

export const Save = props => {
  const {attributes} = props;
  return (
    <div className="my-block">
      <p>{`Text Control: ${attributes.text}`}</p>
    </div>
  );
};

export default {
  name: 'my/preview-mode',
  category: category,
  title: __('04 - Preview Mode', domain),
  description: __(
    'An example block that can toggle between "Edit" and "Preview" mode',
    domain
  ),
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
