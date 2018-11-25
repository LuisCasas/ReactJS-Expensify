const add = (a, b) => a + b;

const generateGreating = (name = 'Annonymous') => `Hello ${name}!`; 

test('Should add 2 numbers', () => {
    const result = add(3, 4);

    expect(result).toBe(7);
});

test('It should say Hello name', () => {
    const greeting = generateGreating('Mike');

    expect(greeting).toBe('Hello Mike!');
});

test('It should say ', () => {
    const greeting = generateGreating();

    expect(greeting).toBe('Hello Annonymous!');
});