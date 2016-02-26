import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// Not mutating, rather returning a new instance
			// of state via ES6 style concatenation
			return [ action.payload.data, ...state ];
	}
	return state;
}