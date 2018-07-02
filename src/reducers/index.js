import { combineReducers } from "redux";
//import { reducer as formReducer } from "redux-form";

import menureducer from "../container/SidebarContainer/reducer";
import loginreducer from "../container/LoginContainer/reducer";

export default combineReducers({
	menureducer,
	loginreducer
});
