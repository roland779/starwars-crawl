# Star Wars Crawl

## Deutsch

Eine kleine statische HTML/CSS/JavaScript-Seite mit animiertem Sternenhintergrund und Star-Wars-artigem Textcrawl. Die Oberflaeche und Crawl-Texte sind auf Deutsch und Englisch verfuegbar.

### Starten

Die Seite braucht keinen Webserver.

1. Oeffne den Projektordner.
2. Doppelklicke auf `index.html`.
3. Waehle oben rechts `DE` oder `EN`.
4. Klicke im Browser auf `CRAWL STARTEN`.

### Dateien

- `index.html` - Grundgeruest der Seite und Sprachumschalter
- `css/styles.css` - Layout, Farben und Crawl-Animation
- `js/script.js` - Sternenhintergrund, Navigation, UI-Texte und Episoden-Texte
- `data/crawl.json` - alte externe Datenquelle, jetzt ebenfalls zweisprachig als Referenz
- `LICENSE` - MIT-Lizenz

### Texte Bearbeiten

Die aktiven Crawl-Texte stehen direkt in `js/script.js` im Array `episodes`.

Ein Eintrag enthaelt beide Sprachen:

```js
{
  de: {
    title: 'Episode I',
    subtitle: 'DER ANFANG',
    text: 'Dein deutscher Crawl-Text...'
  },
  en: {
    title: 'Episode I',
    subtitle: 'THE BEGINNING',
    text: 'Your English crawl text...'
  }
}
```

Neue Episoden koennen dort als weitere Objekte ergaenzt werden. Der Zaehler unten passt sich automatisch an.

### Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Details stehen in `LICENSE`.

## English

A small static HTML/CSS/JavaScript page with an animated starfield and a Star-Wars-style text crawl. The interface and crawl text are available in German and English.

### Start

The page does not need a web server.

1. Open the project folder.
2. Double-click `index.html`.
3. Choose `DE` or `EN` in the top-right corner.
4. Click `START CRAWL` in the browser.

### Files

- `index.html` - Page structure and language switcher
- `css/styles.css` - Layout, colors, and crawl animation
- `js/script.js` - Starfield, navigation, UI text, and episode text
- `data/crawl.json` - old external data source, now also bilingual as a reference
- `LICENSE` - MIT license

### Editing Text

The active crawl text lives directly in `js/script.js` in the `episodes` array.

Each entry contains both languages:

```js
{
  de: {
    title: 'Episode I',
    subtitle: 'DER ANFANG',
    text: 'Dein deutscher Crawl-Text...'
  },
  en: {
    title: 'Episode I',
    subtitle: 'THE BEGINNING',
    text: 'Your English crawl text...'
  }
}
```

New episodes can be added as more objects in that array. The counter updates automatically.

### License

This project is available under the MIT License. See `LICENSE` for details.
