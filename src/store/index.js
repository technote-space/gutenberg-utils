import {registerStore} from '@wordpress/data';
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';
import {STORE_NAME} from './constant';

export {STORE_NAME};

registerStore(STORE_NAME, {reducer, selectors, actions});
