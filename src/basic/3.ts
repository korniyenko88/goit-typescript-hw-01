// Створіть змінну, яка може містити або рядок, або число(union type) ? Також, оголосіть змінну,
//     яка може містити лише одне з двох
//     можливих рядкових значень: 'enable' або 'disable'(literal type).

let mixedType: string | number;
mixedType = 5; 
mixedType = "5";

type oneOf = 'enable' | 'disable';
let value: oneOf;
