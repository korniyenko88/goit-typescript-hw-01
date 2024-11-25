// У вас є функція merge, яка поєднує два об'єкти.
//  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.



function merge<T extends object, U extends object> (objA: T, objB: U) {
    return Object.assign({}, objA, objB);
}
const object = merge({ name: 'Alex', value: 12 }, { color: 'gren', weight: 7 });

console.log(object);



