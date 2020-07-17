export class Coracao {
    //uma forma de criar e declarar os atributos de um objeto
    constructor(public isCheio: boolean,
        public caminhoCoracaoCheio: string = '/assets/images/cc.png',
        public caminhoCoracaoVazio: string = '/assets/images/cv.png') { }

    public exibeCoracao(): string {
        //arrow function
        return this.isCheio ? this.caminhoCoracaoCheio : this.caminhoCoracaoVazio

        // if (this.isCheio)
        //     return this.caminhoCoracaoCheio
        // else
        //     return this.caminhoCoracaoVazio
    }
}