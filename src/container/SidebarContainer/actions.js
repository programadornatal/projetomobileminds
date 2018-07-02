export function alternaMenu(item: any, bool: boolean) {
	return {
		type: 'ALTERNA_MENU',
		aberto: bool,
		item
	}
}
