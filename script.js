document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Vérifier le nom d'utilisateur et le mot de passe
    if (username === 'utilisateur' && password === 'motdepasse') {
        // Redirection vers la deuxième page
        window.location.href = 'page1.html';
    } else {
        // Afficher un message d'erreur
        var message = document.getElementById('message');
        message.textContent = 'Nom d\'utilisateur ou mot de passe incorrect.';
        setTimeout(function() {
            message.textContent = '';
        }, 3000);
    }
});