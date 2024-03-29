function loadPage(pageName) {
    fetch(pageName + '.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            updateActiveLink(pageName);
        })
        .catch(error => console.error('Error loading the page: ', error));
}

function updateActiveLink(pageName) {
    const links = document.querySelectorAll('#navbar a');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.innerText.toLowerCase() === pageName) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('DOMContentLoaded', function() {
    loadPage('home'); // Load home page by default
});
