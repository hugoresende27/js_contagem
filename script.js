
const numeros = document.querySelectorAll('.nums span')//selecciona todos os spans com classe nums
const contador = document.querySelector('.contador')
const msgFinal = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimacao()

function runAnimacao() {
    numeros.forEach( (item,index) => {
        //console.log(item,index)//console log de <span>3</span> 0;<span>2</span> 1;<span>1</span> 2;<span>0</span> 3
        const nextToLast = numeros.length -1 //ultima posição

        item.addEventListener('animationend', (event) => {
            if (event.animationName === 'goIn' && index !== nextToLast) //se a animation em css tem o nome goIn e se não for o último index
            {
                item.classList.remove('in')//remove classe in e adiciona out
                item.classList.add('out')                     
            } else if (event.animationName === 'goOut' && item.nextElementSibling){//nextElementSibiling verifica se existe elementos imrãos, neste caso existem vários spans, enquanto existirem spans e css tiver a animação goOut
                item.nextElementSibling.classList.add('in')//adiciona classe in ao próximo span

            } else {//último else, quando terminou a contagem, os spans
                contador.classList.add('escondido')
                msgFinal.classList.add('show')
            }
        })
    })
}


function resetDOM () {
    contador.classList.remove('escondido')
    msgFinal.classList.remove('show')

    numeros.forEach ( (n) => {
        n.classList.value =''
    })

    numeros[0].classList.add('in')//vai por o span [0] com classe in
}

replay.addEventListener('click', () => {
    resetDOM()
    runAnimacao()
})