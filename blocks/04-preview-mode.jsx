/**
 * 04 - Preview Mode
 */
import {TextControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import {category, domain, PreviewControls} from './common';

const Edit = props => {
  const {attributes, setAttributes} = props;

  const isEditing = attributes.mode === 'edit';
  const toggleMode = ev => {
    setAttributes({mode: isEditing ? 'preview' : 'edit'});
  };

  const handleChange = value => {
    setAttributes({text: value});
  };

  const EditMode = (
    <div>
      <TextControl
        type="text"
        label={__('Text Control', domain)}
        value={attributes.text}
        onChange={handleChange}
      />
    </div>
  );

  const PreviewMode = (
    <div className="my-block">
      <h5>{__('Preview', domain)}</h5>
      <p>{`Text Control: ${attributes.text}`}</p>
    </div>
  );

  return [
    <PreviewControls isEditing={isEditing} onClick={toggleMode} />,
    isEditing ? EditMode : PreviewMode
  ];
};

const Save = props => {
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
