document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const btnHtml = document.getElementById('btn-html');
    const btnCss = document.getElementById('btn-css');
    const btnJava = document.getElementById('btn-java');

    btnHtml.addEventListener('click', () => {
        body.classList.toggle('has-html');
        console.log('HTML Structure Toggled');
    });

    btnCss.addEventListener('click', () => {
        if (!body.classList.contains('has-html')) {
            alert('먼저 HTML(뼈대)을 만들어야 합니다!');
            return;
        }
        body.classList.toggle('has-css');
        console.log('CSS Styling Toggled');
    });

    btnJava.addEventListener('click', () => {
        if (!body.classList.contains('has-css')) {
            alert('먼저 CSS(인테리어)가 완료되어야 불을 켤 수 있습니다!');
            return;
        }
        body.classList.toggle('has-java');
        console.log('Java/JS Logic Toggled');
    });
});
