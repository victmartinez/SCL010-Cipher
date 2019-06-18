// macro cipher
describe('window.cipher', () => { //què voy a testear
  it('debería ser un objeto', () => { // què deberìa ser segun yo
    assert.equal(typeof cipher, 'object'); //moccha me responde con esta lìnea
  });




  // encode
  describe('window.cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    // min
    it('debería retornar "bcdefghijklmnopqrstuvwxyza" para "abcdefghijklmnopqrstuvwxyz" con offset 1', () => {
      assert.equal(window.cipher.encode(1, "gorgori"), "hpshpsj");
    });
    //  may
    it('debería retornar "BCDEFGHIJKLMNOPQRSTUVWXYZA" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 1', () => {
      assert.equal(window.cipher.encode(1, "GORGORI"), "HPSHPSJ");
    });

    //esp
    it('debería retornar " " para " " con offset 1', () => {
      assert.equal(window.cipher.encode(1, " "), " ");
    });

  });
  // decode
  describe('window.cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    // min
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "bcdefghijklmnopqrstuvwxyza" con offset 1', () => {
      assert.equal(window.cipher.decode(1, "hpshpsj"), "gorgori");
    });
    //  may
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "BCDEFGHIJKLMNOPQRSTUVWXYZA" con offset 1', () => {
      assert.equal(window.cipher.decode(1, "HPSHPSJ"), "GORGORI");
    });

    //esp
    it('debería retornar " " para " " con offset 1', () => {
      assert.equal(window.cipher.decode(1, " "), " ");
    });


  });
});
