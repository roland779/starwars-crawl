const episodes = [
  {
    title: 'Episode I',
    subtitle: 'DER ANFANG',
    text: 'Es ist eine Zeit der Dunkelheit und des Lichts. Das Universum dehnt sich aus, und alte Mächte erwachen.\n\nIn einer weit entfernten Galaxie entbrennt ein Kampf zwischen den Mächten der Schöpfung und der Zerstörung. Alte Prophezeiungen sprechen von einem Gleichgewicht, das wiederhergestellt werden muss.\n\nUnsere Helden machen sich auf eine Reise, die ihr Schicksal für immer verändern wird...'
  },
  {
    title: 'Episode II',
    subtitle: 'DIE REISE',
    text: 'Die Reise führt durch unbekannte Welten und verborgene Dimensionen. Die Grenzen zwischen Realität und Imagination verschwimmen.\n\nAuf dem Planeten Korath entdecken unsere Helden eine uralte Zivilisation, deren Technologie weit über das Verständnis der modernen Wissenschaft hinausgeht.\n\nDoch eine dunkle Bedrohung zieht am Horizont auf, und die Zeit läuft davon...'
  },
  {
    title: 'Episode III',
    subtitle: 'DIE ENTSCHEIDUNG',
    text: 'Der finale Kampf steht bevor. Die Mächte des Universums haben sich versammelt, und das Schicksal aller Welten hängt in der Schwebe.\n\nUnsere Helden müssen die ultimative Entscheidung treffen - eine Wahl zwischen Pflicht und Herz, zwischen Ordnung und Freiheit.\n\nIn den Tiefen des Weltraums, wo keine Sonne scheint, wird die letzte Schlacht geschlagen. Möge die Macht mit ihnen sein...'
  }
];
let currentEpisode = 0;
let isAnimating = false;

const starsCanvas = document.getElementById('stars');
const ctx = starsCanvas.getContext('2d');
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

initStars();
updateEpisodeIndicator();

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

function startCrawl() {
  titleSection.classList.add('hidden');
  startBtn.classList.add('hidden');
  crawlWrapper.classList.add('active');
  showCrawl();
}

function showCrawl() {
  const ep = episodes[currentEpisode];
  episodeNumber.textContent = ep.title;
  episodeTitle.textContent = ep.subtitle;
  crawlText.textContent = ep.text;
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

function updateEpisodeIndicator() {
  episodeIndicator.textContent = `${currentEpisode + 1} / ${episodes.length}`;
}
