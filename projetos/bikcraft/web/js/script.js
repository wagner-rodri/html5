
if (window.SimpleSlide) {
new SimpleSlide ({
    slide:"quote",
    time:3000
})
new SimpleSlide ({
    slide:"portfolio",
    time:3000,
    nav: true
})
}

if (window.SimpleAnime) {
    new SimpleAnime()
}

if (window.SimpleForm) {
    new SimpleForm ({
        form: ".formphp",
        button: "#enviar",
        erro: "<div id='form-erro'><h2>Um erro ocorreu</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com</p></div>",
        sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve retornaremos o contato, Obrigado!</p></div>"
    })
}