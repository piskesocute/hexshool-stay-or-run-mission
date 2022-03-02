const counterUp = window.counterUp.default

const el = document.querySelector('#about');
const IO = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if(entry.target.classList.contains( 'is-visible' )) return
    const yearId = document.querySelector('#year');
    counterUp(yearId, {
      duration: 100,
      delay: 1,
    });
    const peopleId = document.querySelector('#people');
    counterUp(peopleId, {
      duration: 100,
      delay: 1,
    });
    const outsetId = document.querySelector('#outset');
    counterUp(outsetId, {
      duration: 100,
      delay: 1,
    });
    const companyId = document.querySelector('#company');
    counterUp(companyId, {
      duration: 100,
      delay: 1,
    });

    entry.target.classList.add('is-visible');
  })
}, { threshold: 1 } );

IO.observe(el);


