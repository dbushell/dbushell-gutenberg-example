import {TextControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import {category, domain} from './common';

const Edit = props => {
  const {attributes, setAttributes} = props;
  const handleChange = value => {
    setAttributes({text: value});
  };
  return (
    <div>
      <TextControl
        type="text"
        label={'Text Control'}
        value={attributes.text}
        onChange={handleChange}
      />
    </div>
  );
};

const Save = props => {
  const {attributes} = props;
  return (
    <div>
      <p>{`Text Control: ${attributes.text}`}</p>
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
      type: 'string'
    }
  },
  edit: Edit,
  save: Save
};
