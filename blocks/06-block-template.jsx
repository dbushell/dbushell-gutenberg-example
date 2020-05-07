/**
 * 01 - Basic
 */
import React from 'react';
import {InnerBlocks} from '@wordpress/block-editor';
import {__} from '@wordpress/i18n';
import {category, domain} from './common';

const BlockEdit = props => {
  const innerProps = {
    template: [
      ['my/text-control', {text: __('Hello, Template!', domain)}],
      ['acf/my-acf-inner']
    ],
    templateLock: 'all'
  };
  return (
    <div class="my-block-template">
      <InnerBlocks {...innerProps} />
    </div>
  );
};

const BlockSave = props => {
  return <InnerBlocks.Content />;
};

export default {
  name: 'my/block-template',
  category: category,
  title: __('06 - Block Template', domain),
  description: __('An example block template', domain),
  keywords: [__('Example', domain), __('Custom', domain)],
  attributes: {},
  edit: BlockEdit,
  save: BlockSave
};
