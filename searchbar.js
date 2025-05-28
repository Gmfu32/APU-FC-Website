document.addEventListener('DOMContentLoaded', function() {
    var pageMapping = {
        'home': 'default.html',
        'about': 'about-us.html',
        'events': 'events.html',
        'team': 'team.html',
        'matches': 'matches.html',
        'results': 'results.html',
        'statistics': 'statistics.html',
        'news': 'news.html',
        'blog': 'blog.html',
        'gallery': 'gallery.html',
        'location': 'location.html',
        'contact': 'contact.html',
        'join': 'join.html',
        'history': 'history.html',
        'faq': 'faq.html',
        'policies': 'policies.html'
    };

    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var query = document.getElementById('search-input').value.trim().toLowerCase();
        if (query && pageMapping[query]) {

            window.location.href = pageMapping[query];
        } else {
            alert('Page not found. Please try again.');
        }
    });
});