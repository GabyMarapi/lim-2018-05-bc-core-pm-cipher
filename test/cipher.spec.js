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
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");
    });

    it('debería retornar "PQRSTU" para "ABCDEF" con offset 30 para mayusculas', () =>{
      assert.equal(cipher.encode(15,"ABCDEF"),"PQRSTU");
    })
    it('debería retornar "pqrstu" para "abcde" con offset 30 para minusculas', () =>{
      assert.equal(cipher.encode(15,"abcdef"),"pqrstu");
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
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () =>{
      assert.equal(cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
    })

    it('debería retornar "ABCDEF" para "PQRSTU" con offset 15 para mayusculas', () =>{
      assert.equal(cipher.decode(15,"PQRSTU"),"ABCDEF");
    })
    it('debería retornar "abcdef" para "pqrstu" con offset 15 para minusculas', () =>{
      assert.equal(cipher.decode(15,"pqrstu"),"abcdef");
    }) 
    it('debería retornar "$%&/&" para "$%&/&" con offset 15 para otro caracter', () =>{
      assert.equal(cipher.decode(15,"$%&/&"),"$%&/&");
    })
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

  

    it('debería retornar "FliuhprvWhvw" para el metodo encode con offset 3 y string "CifremosTest"', () =>{
      assert.equal(cipher.createCipherWithOffset(3).encode("CifremosTest"),"FliuhprvWhvw");
    });
    it('debería retornar "CifremosTest" para el metodo decode con offset 3 y string "FliuhprvWhvw"', () =>{
      assert.equal(cipher.createCipherWithOffset(3).decode("FliuhprvWhvw"),"CifremosTest");
    });
    

  });

});
