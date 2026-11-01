(function() {
  function initFilters() {
    let currentCategory = 'all';
    let currentGenre = 'all';

    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.menu-project-card');

    if (!filterButtons.length || !projectCards.length) return;

    function applyFilters() {
      projectCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        const cardGen = card.getAttribute('data-genre');

        const matchCat = (currentCategory === 'all') || (cardCat === currentCategory);
        const matchGen = (currentGenre === 'all') || (cardGen === currentGenre);

        if (matchCat && matchGen) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    }

    filterButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const group = this.getAttribute('data-filter-group');
        const val = this.getAttribute('data-filter-val');

        if (group === 'category') {
          currentCategory = val;
        } else if (group === 'genre') {
          currentGenre = val;
        }

        // Update active classes for this group
        document.querySelectorAll(`.filter-btn[data-filter-group="${group}"]`).forEach(b => {
          b.classList.remove('active');
        });
        this.classList.add('active');

        applyFilters();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFilters);
  } else {
    initFilters();
  }
})();

