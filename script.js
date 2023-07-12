function contar(){
    let ini =document.getElementById('txti')
    let fim =document.getElementById('txtf')
    let passo =document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0|| fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] faltam dados')
        res.innerHTML='impossivel contar'
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            window.alert('passo invalido')
            p = 1
        }
        if (i<f){
        for (let c = i; c <= f ; c += p ){
            res.innerHTML +=  ` ${c}  `

        }
        }else {
        for (let c = i; c >= f ; c += p ){
                res.innerHTML += ` ${c}  \u{1F449} `
    
    }}}}
    function tabuada(){
        let num = document.getElementById('txtn')
        let tab = document.getElementById('seltab')  
        if (num.value.length==0){
            window.alert ('porfavor tente denovo e digite um numero')
        }else {
                let n = Number(num.value)
                
    
        }
    
    
        }