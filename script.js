
    document.addEventListener('DOMContentLoaded', function () {
        const toggler = document.querySelector('.custom-toggler');
        const navCollapse = document.querySelector('#navbarNav');

        toggler.addEventListener('click', function () {
            toggler.classList.toggle('open');
        });

        // Optional: Remove "open" class when nav collapses (like clicking a link)
        navCollapse.addEventListener('hidden.bs.collapse', function () {
            toggler.classList.remove('open');
        });

        navCollapse.addEventListener('shown.bs.collapse', function () {
            toggler.classList.add('open');
        });
    });
