const initialState = {
	usuario: undefined,
};
export default function(state: any = initialState, action: Function) {
  switch(action.type) {
   case 'SALVE_LOGIN':
      return {
        ...state,
        usuario: action.usuario
      }
    default:
      return state
  }
}
