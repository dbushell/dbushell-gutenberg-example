/**
 * 01 - Basic
 */
import React from 'react';
import {__} from '@wordpress/i18n';
import {category, domain} from './common';

const Block = props => {
  return (
    <div className="my-block">
      <p>{__('Hello, Gutenberg!', domain)}</p>
    </div>
  );
};

export default {
  name: 'my/basic',
  category: category,
  title: __('01 - Basic', domain),
  description: __('A basic Gutenberg block example', domain),
  keywords: [__('Example', domain), __('Custom', domain)],
  attributes: {},
  edit: Block,
  save: Block
};
