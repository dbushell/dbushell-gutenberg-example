import React from 'react';
import {BlockControls} from '@wordpress/block-editor';
import {Button, Toolbar} from '@wordpress/components';
import {__} from '@wordpress/i18n';

// Default custom category
const category = 'my-blocks';

// Text Domain for `@wordpress/i18n`
const domain = 'my-domain';

// Custom `<BlockControls>` to toggle between "Edit" and "Preview"
const PreviewControls = props => {
  const {onClick} = props;
  const PreviewButton = (
    <Button label={__('Preview', domain)} icon="visibility" onClick={onClick} />
  );
  const EditButton = (
    <Button label={__('Edit', domain)} icon="edit" onClick={onClick} />
  );
  return (
    <BlockControls>
      <Toolbar>{props.isEditing ? PreviewButton : EditButton}</Toolbar>
    </BlockControls>
  );
};

export {category, domain, PreviewControls};
