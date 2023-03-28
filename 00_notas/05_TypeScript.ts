/**Tipado de variables */
let numero: number = 0;
let letra: string = '';
let bolean: boolean = false;
let objetos: object = {};
let array: any[] = [];

/**Interface */
/**
 * Podemos definir una estrutura de datos la cual sera usada por
 * una funcion o vaiable haciendo que no se pueda desviar
 * de los parametros previamente establecidos ejemplo en 01_React-TS Component/Usuario.tsx
 */
interface User {
  uid: string;
  name: string;
}
