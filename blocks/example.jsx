import {__} from '@wordpress/i18n';

const domain = 'my-domain';

const Edit = props => {
  return (
    <div>
      <p>Edit!</p>
    </div>
  );
};

const Save = props => {
  return (
    <div>
      <p>Save!</p>
    </div>
  );
};

export default {
  name: 'my/example',
  category: 'my/blocks',
  title: __('Example', domain),
  description: __('An example block', domain),
  keywords: [__('Example', domain), __('Custom', domain)],
  attributes: {
    text: {
      type: 'string'
    }
  },
  edit: Edit,
  save: Save
};
