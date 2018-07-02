
export function carregaUsuario(usuario: any) {
	return {
		type: "SALVE_LOGIN",
		usuario,
	};
}
