let numbers = [1, 2, 3, 10, 20, 30];
/**
 * sort
 * Ordena los numeros o letras de manera accendente
 * para los numeros es nececario agregar la funcuin(n1,n2){return n1 -n2}
 * para que queden de manera ordenada correectamente
 */
numbers.sort((n1, n2) => {
	return n1 - n2;
});
