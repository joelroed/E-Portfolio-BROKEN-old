// template_4jg5xvr
// service_d6rm9z1
// l4K5U934Oi0yQWj_B

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    
    emailjs
        .sendForm(
            'service_d6rm9z1',
            'template_4jg5xvr',
            event.target,
            'l4K5U934Oi0yQWj_B'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on jooel.roed@gmail.com"
            );
        })
}