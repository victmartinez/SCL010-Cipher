describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
      //mayusculas
      it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33');
      //minusculas
      it('debería retornar "hijklmnopqrstuvwxyabcdefg" para "abcdefghijklmnopqrstuvwyz" con offset 33');
      //espacios (los quiero igual)
      it('debería retornar " " para " " con offset 33');
      //numeros 
      it('debería retornar "456" para "345" con offset 1');
    });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
        //mayusculas
        it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33');
        //minusculas   
        it('debería retornar "abcdefghijklmnopqrstuvwyz" para "hijklmnopqrstuvwxyabcdefg" con offset 33');
        //espacios
         it('debería retornar " " para " " con offset 33');
        //numeros 
         it('debería retornar "345" para "456" con offset 1');
    })
    });
