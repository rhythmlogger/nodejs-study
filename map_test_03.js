const users =
    [{ id: 'id-1', age: 1, group: 'A' },
    { id: 'id-2', age: 2, group: 'A' },
    { id: 'id-3', age: 3, group: 'B' }];
const result = users.map(({ id, age, group }) =>
 `\n${id}, ${age}, ${group}`).join('')
console.log(result);