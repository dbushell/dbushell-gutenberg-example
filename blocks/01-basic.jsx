/**
 * 01 - Basic
 */
import {__} from '@wordpress/i18n';
import {category, domain} from './common';

const Edit = props => {
  return (
    <div>
      <p>Edit...</p>
    </div>
  );
};

const Save = props => {
  return (
    <div className="my-block">
      <p>Save...</p>
    </div>
  );
};

export default {
  name: 'my/basic',
  category: category,
  title: __('01 - Basic', domain),
  description: __('An MVP example block', domain),
  keywords: [__('Example', domain), __('Custom', domain)],
  attributes: {},
  edit: Edit,
  save: Save
};
