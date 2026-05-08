// ── MOVIE DATA ──────────────────────────────────────────────────
const MOVIES = [
  {
    title: "Dead Poets Society",
    music: "ost/carpe.mp3",
    image: "poster/dps.jpg",
    gif:"gif/dead-poets-society-robin-williams.gif",
    year: 1989,
    genre: "Drama",
    rating: "★★★★★",
    ratingNum: "9.0",
    colorClass: "poster-5",
    synopsis: "At an elite, old-fashioned boarding school in New England, a passionate English teacher inspires his students to rebel against convention and seize the potential of every day, courting the disdain of the stern headmaster.",
    cast: ["Robin Williams", "Robert Sean Leonard", "Ethan Hawke", "Josh Charles", "Gale Hansen", "Dylan Kussman", "Allelon Ruggiero", "James Waterson"]
  },
  {
    title: "Interstellar",
    music: "ost/hans.mp3",
    image: "poster/ins.jpg",
    gif: "gif/no-no.gif",
    year: 2014,
    genre: "Sci-Fi, Drama, Adventure",
    rating: "★★★★½",
    ratingNum: "9.0",
    colorClass: "poster-1",
    synopsis: "Mankind was born on Earth. It was never meant to die here.\nThe adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Michael Cane", "Jessica Chastain", "Casey Affleck"]
  },
  {
    title: "La La Land",
    music: "ost/Another Day Of Sun.mp3",
    image: "poster/lala.jpg",
    gif:"gif/lalaland-cityofstars.gif",
    year: 2016,
    genre: "Drama, Comedy, Romance",
    rating: "★★★★★",
    ratingNum: "8.6",
    colorClass: "poster-0",
    synopsis: "Here's to the fools who dream.\nMia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
    cast: ["Ryan Gosling", "Emma Stone", "John Legend", "Rosemarie DeWitt", "Finn Wittrock", "Callie Hernandez", "Sonoya Mizuno"]
  },
  {
    title: "The Perks of Being a Wallflower",
    music: "ost/_Heroes_ - 2017 Remaster.mp3",
    image: "poster/pobawf.jpg",
    gif:"gif/the-perks-of-being-a-wallflower-the-tunnel.gif",
    year: 2012,
    genre: "Drama",
    rating: "★★★★★",
    ratingNum: "8.2",
    colorClass: "poster-2",
    synopsis: "Pittsburgh, Pennsylvania, 1991. High school freshman Charlie is a wallflower, always watching life from the sidelines, until two senior students, Sam and her stepbrother Patrick, become his mentors, helping him discover the joys of friendship, music and love.",
    cast: ["Logan Lerman", "Emma Watson", "Ezra Miller", "Mae Whitman", "Kate Walsh", "Dylan McDermott", "Melanie Lynskey"]
  },
  {
    title: "Fantastic Mr. Fox",
    music: "ost/American Empirical Pictures.mp3",
    image: "poster/fanta.jpg",
    gif:"gif/fantastic-mr-fox-hi.gif",
    year: 2009,
    genre: "Comedy, Animation, Adventure, Family",
    rating: "★★★★★",
    ratingNum: "8.2",
    colorClass: "poster-3",
    synopsis: "The Fantastic Mr. Fox, bored with his current life, plans a heist against the three local farmers. The farmers, tired of sharing their chickens with the sly fox, seek revenge against him and his family.",
    cast: ["George Clooney", "Meryl Streep", "Jason Schwartzman", "Wallace Wolodarsky", "Eric Chase Anderson"]
  },
  {
    title: "Love Letter",
    music: "ost/HIS SMILE.mp3",
    image: "poster/love.jpg",
    year: 1995,
    genre: "Romance, Drama",
    rating: "★★★★★",
    ratingNum: "9.0",
    colorClass: "poster-4",
    synopsis: "Hiroko attends the memorial service of her fiancé, Itsuki Fujii, who died in a mountain-climbing incident. Although Itsuki's mother says that their old house is gone, Hiroko records the address listed under his name in his yearbook and sends him a letter. Surprisingly, she receives a reply, and discovers it came from his old classmate, a girl who also happens to be called Itsuki Fujii.",
    cast: ["Miho Nakayama", "Etsushi Toyokawa", "Miki Sakai", "Takashi Kashiwabara", "Bunjaku Han", "Katsuyuki Shinohara"]
  },
  {
    title: "The Wind Rises",
    music: "ost/A Journey (A Dream of Flight).mp3",
    image: "poster/wind.jpg",
    gif: "gif/ghibli.gif",
    year: 2013,
    genre: "Romance, History, Drama, Animation",
    rating: "★★★★★",
    ratingNum: "9.0",
    colorClass: "poster-5",
    synopsis: "We must live.\nA lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.",
    cast: ["Hideaki Anno", "Hidetoshi Nishijima", "Miori Takimoto", "Masahiko Nishimura", "Stephen Alpert"]
  },
  {
    title: "First Love",
    music: "ost/First Love.mp3",
    image: "poster/first.jpg",
    gif: "gif/first-love-hatsukoi-taisei-kido.gif",
    year: 2022,
    genre: "Drama",
    rating: "★★★★★",
    ratingNum: "9.0",
    colorClass: "poster-6",
    synopsis: "Young, free and madly in love. As teenagers, the world was their oyster—but, as adults, their lives seem dimmer, like a very important piece is missing.",
    cast: ["Hikari Mitsushima", "Takeru Satoh", "Rikako Yagi", "Taisei Kido", "Kaho Minami", "Akiyoshi Nakao", "Towa Araki", "Aoi Yamada", "Gaku Hamada", "Osamu Mukai", "Kyoko Koizumi"]
  },
  {
    title: "We Made a Beautiful Bouquet",
    image: "poster/boquet.jpg",
    year: 2021,
    genre: "Romance, Drama",
    rating: "★★★★★",
    ratingNum: "9.0",
    colorClass: "poster-7",
    synopsis: "My heart was pounding as I had a feeling that something was about to happen.\nTwo people meet each other after missing the last train home, leading to a beautiful relationship over five years.",
    cast: ["Masaki Suda", "Kasumi Arimura", "Kaya Kiyohara", "Kanata Hosoda", "Joe Odagiri", "Keiko Toda"]
  },
  {
    title: "April Story",
    image: "poster/april.jpg",
    year: 1998,
    genre: "Romance, Drama",
    rating: "★★★★★",
    ratingNum: "9.0",
    colorClass: "poster-8",
    synopsis: "In spring, a girl leaves the island of Hokkaido to attend university in Tokyo. Once there, she is asked to reveal why she wanted to go there in the first place.",
    cast: ["Takako Matsu", "Seiichi Tanabe", "Kaori Fujii", "Rumi Kazuhiko Kato", "Ken Mitsuishi"]
  }
];

// ── HERO SLIDESHOW ──────────────────────────────────────────────
const heroImages = [
  { src: 'slideshow/perks.jpg',  position: 'center 30%' },
  { src: 'slideshow/dead.jpg',    position: 'center top' },
  { src: 'slideshow/fantaslide.jpg',    position: 'center top' },
  { src: 'slideshow/loveslide2.jpg',   position: '70% 10%' },
  { src: 'slideshow/perfectslide.jpg',   position: 'center top' },
];let currentSlide = 0;
let slideInterval;

function initSlideshow() {
  const heroImg = document.querySelector('.hero-img');
  const dotsContainer = document.querySelector('.hero-dots');

  heroImg.src = heroImages[0].src;
  heroImg.style.objectPosition = heroImages[0].position;

  // Build dots
  heroImages.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  function goToSlide(index) {
  heroImg.style.opacity = '0';
  setTimeout(() => {
    currentSlide = index;
    heroImg.src = heroImages[currentSlide].src;              // ← .src
    heroImg.style.objectPosition = heroImages[currentSlide].position;  // ← .position
    heroImg.style.opacity = '';
    document.querySelectorAll('.hero-dot').forEach((d, i) =>
      d.classList.toggle('active', i === currentSlide)
    );
  }, 400);

  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

  function nextSlide() {
    goToSlide((currentSlide + 1) % heroImages.length);
  }

  slideInterval = setInterval(nextSlide, 5000);
}

initSlideshow();

// ── BUILD GALLERY ────────────────────────────────────────────────
const grid       = document.getElementById('gallery-grid');
const showMoreBtn = document.getElementById('show-more');

let visibleCount = 5;

function renderMovies(limit) {
  grid.innerHTML = '';

  MOVIES.slice(0, limit).forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.animationDelay = `${i * 0.05}s`;

    card.innerHTML = `
      <div class="movie-poster ${m.colorClass}">
        <img src="${m.image}" alt="${m.title}" class="poster-image">
        <div class="movie-poster-overlay"><span>View Details</span></div>
      </div>
      <div class="movie-info">
        <h3>${m.title}</h3>
        <p class="meta">${m.year} · ${m.genre}</p>
        <p class="rating">
          ${m.rating}
          <span style="color:var(--muted); font-size:0.78rem;">${m.ratingNum}/10</span>
        </p>
      </div>
    `;

    card.addEventListener('click', () => openModal(i));
    grid.appendChild(card);
  });
}

renderMovies(visibleCount);

showMoreBtn.addEventListener('click', () => {
  visibleCount = MOVIES.length;
  renderMovies(visibleCount);
  showMoreBtn.style.display = 'none';
});

// ── MODAL ────────────────────────────────────────────────────────
const backdrop     = document.getElementById('modal-backdrop');
const modalTitle   = document.getElementById('modal-title');
const modalBadges  = document.getElementById('modal-badges');
const modalSynopsis = document.getElementById('modal-synopsis');
const modalCast    = document.getElementById('modal-cast');
const modalAudio = document.getElementById('modal-audio');
const modalAudioSrc = document.getElementById('modal-audio-src');

function openModal(idx) {
  const m = MOVIES[idx];



  modalTitle.textContent = m.title;
  modalBadges.innerHTML = `
    <span class="badge badge-gold">${m.rating} — ${m.ratingNum}/10</span>
    <span class="badge">${m.year}</span>
    <span class="badge">${m.genre}</span>
  `;
  
  // add gif + synopsis side by side
  modalSynopsis.innerHTML = m.gif
    ? `<div class="modal-gif-layout">
         <img src="${m.gif}" alt="${m.title} gif" class="modal-gif">
         <p>${m.synopsis}</p>
       </div>`
    : m.synopsis;

  modalCast.innerHTML = m.cast
    ? `<p style="font-size:0.78rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--gold); margin-bottom:0.6rem;">Cast</p>
       <p style="color:var(--muted); font-size:0.9rem;">${m.cast.join(' · ')}</p>`
    : '';


  // play music
  if (m.music) {
    modalAudioSrc.src = m.music;
    modalAudio.load();
    modalAudio.volume = 0.4;
    modalAudio.play().catch(() => {}); // catch needed for browser autoplay policy
  }

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modal-close').focus();
}

function closeModal() {
  backdrop.classList.remove('open');
  document.body.style.overflow = '';

  if (!modalAudio.paused) {
    let vol = modalAudio.volume;
    const fadeOut = setInterval(() => {
      vol = parseFloat((vol - 0.05).toFixed(2));
      if (vol <= 0) {
        clearInterval(fadeOut);
        modalAudio.pause();
        modalAudio.currentTime = 0;
        modalAudio.volume = 0.4;
      } else {
        modalAudio.volume = vol;
      }
    }, 50);
  }
}

document.getElementById('modal-close').addEventListener('click', closeModal);
backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── STAR RATING ──────────────────────────────────────────────────
let selectedStars = 0;
const starBtns = document.querySelectorAll('.star-btn');

starBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    selectedStars = +btn.dataset.val;
    starBtns.forEach(b => b.classList.toggle('active', +b.dataset.val <= selectedStars));
  });
});

// ── REVIEW FORM ──────────────────────────────────────────────────
let reviews = [];
const errEl = document.getElementById('form-error');

document.getElementById('submit-review').addEventListener('click', () => {
  const name   = document.getElementById('r-name').value.trim();
  const movie  = document.getElementById('r-movie').value.trim();
  const review = document.getElementById('r-review').value.trim();

  errEl.style.display = 'none';

  if (!name || !movie || !review || !selectedStars) {
    errEl.textContent   = 'Please fill in all fields and select a star rating.';
    errEl.style.display = 'block';
    return;
  }

  reviews.unshift({
    name,
    movie,
    review,
    stars: selectedStars,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  });

  renderReviews();

  document.getElementById('r-name').value   = '';
  document.getElementById('r-movie').value  = '';
  document.getElementById('r-review').value = '';
  selectedStars = 0;
  starBtns.forEach(b => b.classList.remove('active'));
});

function renderReviews() {
  const container = document.getElementById('reviews-container');
  document.getElementById('review-count').textContent =
    `${reviews.length} review${reviews.length !== 1 ? 's' : ''}`;

  if (!reviews.length) {
    container.innerHTML = '<p class="no-reviews">No reviews yet. Be the first to share your thoughts.</p>';
    return;
  }

  container.innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-card-header">
        <div>
          <div class="review-card-name">${escHtml(r.name)}</div>
          <div class="review-card-movie">${escHtml(r.movie)}</div>
        </div>
        <div>
          <div class="review-card-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
          <div style="font-size:0.72rem; color:var(--muted); text-align:right; margin-top:0.2rem;">${r.date}</div>
        </div>
      </div>
      <p class="review-card-body">${escHtml(r.review)}</p>
    </div>
  `).join('');
}

function escHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── BACK TO TOP ──────────────────────────────────────────────────
const topBtn = document.getElementById('back-top');

window.addEventListener('scroll', () => {
  topBtn.classList.toggle('visible', window.scrollY > 400);
});

topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── HEADER SHRINK ────────────────────────────────────────────────
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('shrink', window.scrollY > 80);
});


// ── FILM TAPE CURSOR TRAIL ───────────────────────────────────────
const FRAME_COUNT = 4;
const HOLE_COUNT  = 8;
const frames      = [];

for (let i = 0; i < FRAME_COUNT; i++) {
  const frame = document.createElement('div');
  frame.className = 'film-frame';

  const topHoles    = document.createElement('div');
  topHoles.className = 'film-holes';
  const bottomHoles  = document.createElement('div');
  bottomHoles.className = 'film-holes';

  for (let h = 0; h < HOLE_COUNT; h++) {
    topHoles.appendChild(document.createElement('span'));
    bottomHoles.appendChild(document.createElement('span'));
  }

  const cell = document.createElement('div');
  cell.className = 'film-cell';

  frame.appendChild(topHoles);
  frame.appendChild(cell);
  frame.appendChild(bottomHoles);

  document.body.appendChild(frame);
  frames.push({ el: frame, x: 0, y: 0, angle: 0 });
}

let mouseX = 0, mouseY = 0;

window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateFilmTrail() {
  frames.forEach((f, i) => {
    const target = i === 0 ? { x: mouseX, y: mouseY } : frames[i - 1];

    const dx = target.x - f.x;
    const dy = target.y - f.y;

    f.x += dx * 0.3;
    f.y += dy * 0.3;

    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    f.angle += (angle - f.angle) * 0.3;

    const opacity = (1 - i / FRAME_COUNT) * 0.9;

    f.el.style.left      = f.x + 'px';
    f.el.style.top       = f.y + 'px';
    f.el.style.opacity   = opacity;
    f.el.style.transform = `translate(-50%, -50%) rotate(${f.angle}deg)`;
  });

  requestAnimationFrame(animateFilmTrail);
}

animateFilmTrail();