function header({content}) {
    const h = document.querySelector('header');
    h.innerHTML = content;
}
header({content: '<h1>Welcome to My Page</h1>'});