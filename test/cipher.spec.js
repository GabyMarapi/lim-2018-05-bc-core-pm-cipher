describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "EFGHI" para "ABCDEF" con offset 30 para mayusculas', () =>{
      assert.equal(cipher.encode(30,"ABCDEF"),"EFGHIJ");
    })
    it('debería retornar "efghi" para "abcde" con offset 30 para minusculas', () =>{
      assert.equal(cipher.encode(30,"abcdef"),"efghij");
    })
    it('debería retornar "$%&/&" para "$%&/&" con offset 30 para otro caracter', () =>{
      assert.equal(cipher.encode(15,"$%&/&"),"$%&/&");
    })


  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

   /*  it('debería retornar "ABCDEF" para "EFGHIJ" con offset 30 para mayusculas', () =>{
      assert.equal(cipher.decode(30,"EFGHIJ"),"ABCDEF");
    }) */
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33 para minusculas', () =>{
      assert.equal(cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
    })
    it('debería retornar "$%&/&" para "$%&/&" con offset 30 para otro caracter', () =>{
      assert.equal(cipher.decode(15,"$%&/&"),"$%&/&");
    })
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', () =>{
      assert.equal(cipher.createCipherWithOffset(1).encode('ABC'))
    });
    

  });

});
