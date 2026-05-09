const translations = {
  de: {
    pageSubtitle: 'Eine weit entfernte Galaxie',
    start: 'CRAWL STARTEN',
    previous: '← Zurück',
    next: 'Weiter →',
    attribution: 'Episode-Auswahl • Klicke auf Weiter'
  },
  en: {
    pageSubtitle: 'A galaxy far, far away',
    start: 'START CRAWL',
    previous: '← Previous',
    next: 'Next →',
    attribution: 'Episode selection • Click Next'
  }
};

const episodes = [
  {
    de: {
      title: 'Episode I',
      subtitle: 'DER ANFANG',
      text: 'Es ist eine Zeit der Dunkelheit und des Lichts. Das Universum dehnt sich aus, und alte Mächte erwachen.\n\nIn einer weit entfernten Galaxie entbrennt ein Kampf zwischen den Mächten der Schöpfung und der Zerstörung. Alte Prophezeiungen sprechen von einem Gleichgewicht, das wiederhergestellt werden muss.\n\nUnsere Helden machen sich auf eine Reise, die ihr Schicksal für immer verändern wird...'
    },
    en: {
      title: 'Episode I',
      subtitle: 'THE BEGINNING',
      text: 'It is a time of darkness and light. The universe expands, and ancient powers begin to awaken.\n\nIn a galaxy far, far away, a struggle erupts between the forces of creation and destruction. Old prophecies speak of a balance that must be restored.\n\nOur heroes set out on a journey that will change their destiny forever...'
    }
  },
  {
    de: {
      title: 'Episode II',
      subtitle: 'DIE REISE',
      text: 'Die Reise führt durch unbekannte Welten und verborgene Dimensionen. Die Grenzen zwischen Realität und Imagination verschwimmen.\n\nAuf dem Planeten Korath entdecken unsere Helden eine uralte Zivilisation, deren Technologie weit über das Verständnis der modernen Wissenschaft hinausgeht.\n\nDoch eine dunkle Bedrohung zieht am Horizont auf, und die Zeit läuft davon...'
    },
    en: {
      title: 'Episode II',
      subtitle: 'THE JOURNEY',
      text: 'The journey leads through unknown worlds and hidden dimensions. The boundaries between reality and imagination begin to blur.\n\nOn the planet Korath, our heroes discover an ancient civilization whose technology reaches far beyond modern scientific understanding.\n\nBut a dark threat rises on the horizon, and time is running out...'
    }
  },
  {
    de: {
      title: 'Episode III',
      subtitle: 'DIE ENTSCHEIDUNG',
      text: 'Der finale Kampf steht bevor. Die Mächte des Universums haben sich versammelt, und das Schicksal aller Welten hängt in der Schwebe.\n\nUnsere Helden müssen die ultimative Entscheidung treffen - eine Wahl zwischen Pflicht und Herz, zwischen Ordnung und Freiheit.\n\nIn den Tiefen des Weltraums, wo keine Sonne scheint, wird die letzte Schlacht geschlagen. Möge die Macht mit ihnen sein...'
    },
    en: {
      title: 'Episode III',
      subtitle: 'THE DECISION',
      text: 'The final battle is near. The powers of the universe have gathered, and the fate of every world hangs in the balance.\n\nOur heroes must make the ultimate decision - a choice between duty and heart, between order and freedom.\n\nIn the depths of space, where no sun shines, the last battle will be fought. May the Force be with them...'
    }
  }
];

let currentEpisode = 0;
let currentLanguage = 'de';
let isAnimating = false;
let hasStarted = false;

const starsCanvas = document.getElementById('stars');
const ctx = starsCanvas.getContext('2d');
const pageSubtitle = document.getElementById('pageSubtitle');
const startBtn = document.getElementById('startBtn');
const titleSection = document.querySelector('.title-section');
const crawlWrapper = document.getElementById('crawlWrapper');
const crawlContent = document.getElementById('crawlContent');
const episodeNumber = document.getElementById('episodeNumber');
const episodeTitle = document.getElementById('episodeTitle');
const crawlText = document.getElementById('crawlText');
const controls = document.getElementById('controls');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const episodeIndicator = document.getElementById('episodeIndicator');
const attribution = document.getElementById('attribution');
const languageButtons = document.querySelectorAll('.language-option');

initStars();
applyLanguage(currentLanguage);

function initStars() {
  starsCanvas.width = window.innerWidth;
  starsCanvas.height = window.innerHeight;

  const stars = [];
  for (let i = 0; i < 300; i++) {
    stars.push({
      x: Math.random() * starsCanvas.width,
      y: Math.random() * starsCanvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.1
    });
  }

  function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, starsCanvas.width, starsCanvas.height);

    ctx.fillStyle = '#fff';
    for (const star of stars) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();

      star.y -= star.speed;
      if (star.y < 0) {
        star.y = starsCanvas.height;
        star.x = Math.random() * starsCanvas.width;
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

window.addEventListener('resize', () => {
  starsCanvas.width = window.innerWidth;
  starsCanvas.height = window.innerHeight;
});

startBtn.addEventListener('click', startCrawl);

prevBtn.addEventListener('click', () => {
  if (isAnimating) return;
  currentEpisode = (currentEpisode - 1 + episodes.length) % episodes.length;
  showCrawl();
});

nextBtn.addEventListener('click', () => {
  if (isAnimating) return;
  currentEpisode = (currentEpisode + 1) % episodes.length;
  showCrawl();
});

languageButtons.forEach(button => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.lang);
  });
});

function startCrawl() {
  hasStarted = true;
  titleSection.classList.add('hidden');
  startBtn.classList.add('hidden');
  crawlWrapper.classList.add('active');
  showCrawl();
}

function showCrawl() {
  renderEpisode();
  updateEpisodeIndicator();

  crawlContent.classList.remove('animating');
  void crawlContent.offsetWidth;

  isAnimating = true;
  controls.classList.remove('visible');
  crawlContent.classList.add('animating');

  crawlContent.addEventListener('animationend', () => {
    isAnimating = false;
    controls.classList.add('visible');
  }, { once: true });
}

function applyLanguage(language) {
  currentLanguage = language;
  const labels = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  pageSubtitle.textContent = labels.pageSubtitle;
  startBtn.textContent = labels.start;
  prevBtn.textContent = labels.previous;
  nextBtn.textContent = labels.next;
  attribution.textContent = labels.attribution;
  updateEpisodeIndicator();

  languageButtons.forEach(button => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  if (hasStarted) {
    renderEpisode();
  }
}

function renderEpisode() {
  const ep = episodes[currentEpisode][currentLanguage];
  episodeNumber.textContent = ep.title;
  episodeTitle.textContent = ep.subtitle;
  crawlText.textContent = ep.text;
}

function updateEpisodeIndicator() {
  episodeIndicator.textContent = `${currentEpisode + 1} / ${episodes.length}`;
}
