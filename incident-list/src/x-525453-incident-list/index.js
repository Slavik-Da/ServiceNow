import {createCustomElement, actionTypes} from '@servicenow/ui-core'

const {COMPONENT_BOOTSTRAPPED} = actionTypes
import {createHttpEffect} from '@servicenow/ui-effect-http';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import '@servicenow/now-template-card'


const view = (state, {updateState}) => {
  const {
	number = 'Loading number', short_description = 'Loading short description',
	assignment_group = 'Loading assignment_group', assigned_to = 'Loading assigned_to', updated_on = 'Loading updated_on'
  } = state;
  return (
	<div>
	  {console.log(state.result)}
	  {state.result.map((r) => (
		  <now-template-card-assist
			tagline={{icon: "tree-view-long-outline", label: 'Incident'}}
			actions={[
			  {id: 'share', label: 'Copy URL'},
			  {id: 'close', label: 'Mark Complete'}
			]}
			heading={{
			  label: r.short_description, level: 2
			}}
			content={[{label: 'Number', value: {type: 'string', value: r.number}},
			  {label: 'State', value: {type: 'string', value: r.state}},
			  {label: 'Assigned', value: {type: 'string', value: r.assigned_to.display_value}},
			  {label: 'Assignment group', value: {type: 'string', value: r.assignment_group.display_value}}
			]}
			footer-content={{
			  label: 'Updated',
			  value: r.sys_updated_on
			}}
		  />
		)
	  )}
	</div>
  );
};

createCustomElement('x-525453-incident-list', {
  actionHandlers: {
	[COMPONENT_BOOTSTRAPPED]: (coeffects) => {
	  const {dispatch} = coeffects;

	  dispatch('FETCH_LATEST_INCIDENT', {
		sysparm_display_value: true
	  });
	},
	'FETCH_LATEST_INCIDENT': createHttpEffect('api/now/table/incident', {
	  method: 'GET',
	  queryParams: ['sysparm_display_value'],
	  successActionType: 'FETCH_LATEST_INCIDENT_SUCCESS'
	}),
	'FETCH_LATEST_INCIDENT_SUCCESS': (coeffects) => {
	  const {action, updateState} = coeffects;
	  const {result} = action.payload;

	  updateState({result});
	}
  },
  renderer: {type: snabbdom},
  view,
  styles
});
