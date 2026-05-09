# Star Wars Crawl

Eine kleine statische HTML/CSS/JavaScript-Seite mit animiertem Sternenhintergrund und Star-Wars-artigem Textcrawl.

## Starten

Die Seite braucht keinen Webserver.

1. Oeffne den Projektordner.
2. Doppelklicke auf `index.html`.
3. Klicke im Browser auf `CRAWL STARTEN`.

## Dateien

- `index.html` - Grundgeruest der Seite
- `styles.css` - Layout, Farben und Crawl-Animation
- `script.js` - Sternenhintergrund, Navigation und Episoden-Texte
- `crawl.json` - alte externe Datenquelle, wird aktuell nicht mehr geladen

## Texte Bearbeiten

Die Crawl-Texte stehen direkt in `script.js` im Array `episodes`.

Ein Eintrag sieht so aus:

```js
{
  title: 'Episode I',
  subtitle: 'DER ANFANG',
  text: 'Dein Crawl-Text...'
}
```

Neue Episoden koennen dort als weitere Objekte ergaenzt werden. Der Zaehler unten passt sich automatisch an.
