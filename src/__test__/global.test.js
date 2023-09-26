const text = "Hello world";

test('Debe contener un texto', ()=> {
    expect(text).toMatch(/world/);
})