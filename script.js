function carregar() {
    var msg = document.getElementById('msgHora')
    var img = document.getElementsByClassName('img-style')[0]
    var data = new Date()
    var hora = data.getHours()

    if (hora > 0 && hora <= 12) {
        msg.innerHTML = `<h2>Bom Dia!</h2>`
        document.body.style.backgroundColor = '#DEB887'
        img.src = './imagens/manha.jpg'
    } else if (hora > 12 && hora <= 18) {
        msg.innerHTML = `<h2>Boa Tarde!</h2>`
        document.body.style.backgroundColor = '#DF9627'
        img.src = './imagens/tarde.jpg'
    } else {
        msg.innerHTML = `<h2>Boa Noite!</h2>`
        document.body.style.backgroundColor = '#3F5276'
        img.src = './imagens/noite.jpg'

    }

}