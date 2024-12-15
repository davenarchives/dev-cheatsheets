document.getElementById('searchInput').addEventListener('input', function () {
    var query = this.value.toLowerCase();
    var boxes = document.querySelectorAll('.box');
    var firstMatch = null;

    if (query === '') {
        boxes.forEach(function (box) {
            var links = box.querySelectorAll('a');
            links.forEach(function (link) {
                link.style.pointerEvents = 'auto';
                link.style.opacity = '1';

                // Reset inner HTML to original
                link.innerHTML = link.dataset.original; // Store original HTML in a data attribute

                // Reset span styles
                var spans = link.querySelectorAll('span');
                spans.forEach(function(span) {
                    span.style.backgroundColor = ''; // Reset highlight
                    span.style.color = ''; // Reset text color
                });
            });
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    boxes.forEach(function (box) {
        var links = box.querySelectorAll('a');
        links.forEach(function (link) {
            var linkText = link.innerText.toLowerCase();

            // Store original HTML in a data attribute if not already stored
            if (!link.dataset.original) {
                link.dataset.original = link.innerHTML;
            }

            link.style.pointerEvents = 'auto';
            link.style.opacity = '1';

            // Reset previous highlights
            var spans = link.querySelectorAll('span');
            spans.forEach(function(span) {
                span.style.backgroundColor = ''; // Reset highlight
                span.style.color = ''; // Reset text color
            });

            if (linkText.includes(query)) {
                if (!firstMatch) {
                    firstMatch = link;
                }

                // Highlight matching text
                var regex = new RegExp('(' + query + ')', 'gi');
                link.innerHTML = link.dataset.original.replace(regex, function(match) {
                    return `<span style="background-color: yellow; color: black;">${match}</span>`;
                });
            } else {
                link.style.pointerEvents = 'none';
                link.style.opacity = '0.5';
            }
        });
    });

    if (firstMatch) {
        var headerHeight = document.querySelector('.header').offsetHeight;
        var windowHeight = window.innerHeight;
        var elementTop = firstMatch.getBoundingClientRect().top + window.scrollY;
        var offset = elementTop - (windowHeight / 2) + (firstMatch.offsetHeight / 2);

        // Scroll to the position that centers the first match vertically
        window.scrollTo({ top: offset, behavior: 'smooth' });
    }
});

document.addEventListener('click', function (event) {
    if (event.target && event.target.tagName === 'A') {
        var clickedLink = event.target;
        var query = document.getElementById('searchInput').value.toLowerCase();
        var linkText = clickedLink.innerText.toLowerCase();

        if (linkText.includes(query)) {
            clickedLink.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});
