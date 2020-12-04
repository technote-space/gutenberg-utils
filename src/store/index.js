import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';
import {STORE_NAME} from './constant';

const {registerStore} = wp.data;

export {STORE_NAME};

registerStore(STORE_NAME, {reducer, selectors, actions});
