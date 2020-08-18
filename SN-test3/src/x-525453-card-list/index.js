import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import "@servicenow/now-template-card"

const view = (state, {updateState}) => {
  return (
	<div>
	  <div>
		<now-template-card-assist
		  tagline={{icon: "tree-view-long-outline", label: 'Process'}}
		  actions={[
			{id: 'share', label: 'Copy URL'},
			{id: 'close', label: 'Mark Complete'}
		  ]}
		  heading={{
			label: 'Submit attachment to malware sandbox1',
			level: 3
		  }}
		  content={[
			{label: 'State', value: {type: 'string', value: 'Closed'}},
			{label: 'Assigned', value: {type: 'string', value: 'Carla S'}},
			{label: 'Priority', value: {type: 'string', value: 'Low'}},
			{label: 'SLA', value: {type: 'string', value: 'No SLA Set'}}
		  ]}
		  footer-content={{
			label: 'Updated',
			value: '2019-01-15 08:41:09'
		  }}
		/>
	  </div>

	  <div>
		<now-template-card-assist
		  tagline={{icon: "tree-view-long-outline", label: 'Process'}}
		  actions={[
			{id: 'share', label: 'Copy URL'},
			{id: 'close', label: 'Mark Complete'}
		  ]}
		  heading={{
			label: 'Submit attachment to malware sandbox2',
			level: 3
		  }}
		  content={[
			{label: 'State', value: {type: 'string', value: 'Closed'}},
			{label: 'Assigned', value: {type: 'string', value: 'Carla S'}},
			{label: 'Priority', value: {type: 'string', value: 'Low'}},
			{label: 'SLA', value: {type: 'string', value: 'No SLA Set'}}
		  ]}
		  footer-content={{
			label: 'Updated',
			value: '2019-01-15 08:41:09'
		  }}
		/>
	  </div>

	  <div>
		<now-template-card-assist
		  tagline={{icon: "tree-view-long-outline", label: 'Process'}}
		  actions={[
			{id: 'share', label: 'Copy URL'},
			{id: 'close', label: 'Mark Complete'}
		  ]}
		  heading={{
			label: 'Submit attachment to malware sandbox3',
			level: 3
		  }}
		  content={[
			{label: 'State', value: {type: 'string', value: 'Closed'}},
			{label: 'Assigned', value: {type: 'string', value: 'Carla S'}},
			{label: 'Priority', value: {type: 'string', value: 'Low'}},
			{label: 'SLA', value: {type: 'string', value: 'No SLA Set'}}
		  ]}
		  footer-content={{
			label: 'Updated',
			value: '2019-01-15 08:41:09'
		  }}
		/>
	  </div>

	  <div>
		<now-template-card-assist
		  tagline={{icon: "tree-view-long-outline", label: 'Process'}}
		  actions={[
			{id: 'share', label: 'Copy URL'},
			{id: 'close', label: 'Mark Complete'}
		  ]}
		  heading={{
			label: 'Submit attachment to malware sandbox4',
			level: 3
		  }}
		  content={[
			{label: 'State', value: {type: 'string', value: 'Closed'}},
			{label: 'Assigned', value: {type: 'string', value: 'Carla S'}},
			{label: 'Priority', value: {type: 'string', value: 'Low'}},
			{label: 'SLA', value: {type: 'string', value: 'No SLA Set'}}
		  ]}
		  footer-content={{
			label: 'Updated',
			value: '2019-01-15 08:41:09'
		  }}
		/>
	  </div>

	</div>
  );
};

createCustomElement('x-525453-card-list', {
  renderer: {type: snabbdom},
  view,
  styles
});
