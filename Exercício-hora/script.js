function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12){
        img.src = 'images/amanhecer.jpg'
    } else if (hora >= 12 && hora < 17){
        img.src = 'images/dia.jpg'
        document.body.style.background = '#7fb5bd'
    } else if (hora >= 17 && hora < 20){
        img.src ='images/anoitecer.jpg'
        document.body.style.background = '#a74b15'
    } else {
        img.src ='images/noite.jpg'
        document.body.style.background = '#113249'
    }
}