/* url: viacep.com.br/ws/'cep'/json/ */

/* class CEP {
    constructor(cep) {
        this.cep = cep
    }
    get info() {
        return this.requisicao()
    }
    requisicao() {
        const url = `viacep.com.br/ws/${this.cep}/json/`
        const req = fetch(url)
        .then(response => {
            response.json()
            console.log(response);
        })
    }
}

let cep = new CEP(21520001)
cep.info */

const inputCEP = document.querySelector()

async function getInfo({target}) {
    const cep = target.value
    const url = `viacep.com.br/ws/${cep}/json/`
    const req = await fetch(url)
    console.log(cep, url, req);
}

