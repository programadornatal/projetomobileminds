const initialState = {
	menu: [],
};

export default function(state: any = initialState, action: Function) {
  switch (action.type) {
		case 'ALTERNA_MENU':
			return {
				...state,
				aberto: action.aberto,
				item: action.item
			}
			default:
		 		return state
			}
}
