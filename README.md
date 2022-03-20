[![Github Pages](https://github.com/chendachao/chendachao.github.io/workflows/Github%20Pages/badge.svg)](https://chendachao.github.io/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f65e2795-31ad-40c3-98bc-cd11159b00d2/deploy-status)](https://app.netlify.com/sites/chendachao/deploys)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fchendachao.netlify.app%2F)](https://validator.nu/?doc=https%3A%2F%2Fchendachao.netlify.app%2F)

> The above badges are generated by https://shields.io/

## Websites
- [Homepage](https://larrychen.tech/)
- [Github pages](https://chendachao.github.io/)
- [Netlify](https://chendachao.netlify.app/)
- [Vercel](https://chendachao-github-io.chendachao.vercel.app/)

<details>
  <summary>
    Screenshots:
  </summary>

![Dark theme screenshot](src/assets/images/screenshots/screenshot1.jpg "Dark theme screenshot")
![Light theme screenshot](src/assets/images/screenshots/screenshot2.jpg "Light theme screenshot")

</details>

## Performance
- [Performance](https://developers.google.com/web/fundamentals/performance/why-performance-matters)
- [Website Optimization Tools](https://www.crazyegg.com/blog/website-optimization-tools/)
- [Website Speed Test](https://webspeedtest.cloudinary.com/)
- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [Webpage Test](https://www.webpagetest.org/)
- [Google Search Console](https://search.google.com/search-console)
- [GTmetrix](https://gtmetrix.com)
- [Image Compressor](https://imagecompressor.com/)
- [Image Squoosh](https://squoosh.app/)
- [Smart PNG and JPEG compression](https://tinypng.com/)🏅
- [微图](https://www.zachleat.com/web/vector-raster-split/)
- [SVG Compressor](https://jakearchibald.github.io/svgomg/)
- [Convert Font to SVG](https://onlinefontconverter.com/)
- [Pixel Perfect Icon Solutions && Custom Font](https://icomoon.io/)
- [SVG Sprit](https://svgsprit.es/) - has some issues, be caution with it.
- [Hotjar](https://insights.hotjar.com/sites/1939682/dashboard)
- [Emoji](http://xahlee.info/comp/unicode_arrows.html)
- [Open Emoji](https://openmoji.org/)　
- [Word 2 Emoji](https://translate.yandex.com/?lang=en-emj&text=candies)　

## TODOs:
- [x] JSON description for developer view
- [x] More social icons
- [x] Share on Wechat, QQ, twitter and so on.
- [ ] Show rainbow sometimes.
- [ ] FM/Music section.
- [x] My projects section.
- [x] Intro for all sections.
- [x] Change them to gray on specific day.
- [x] [PWA] Update event subscribe with push/notifications API, recommend a 'Subscribe' button
- [x] [PWA] Update alert
- [ ] [Sentry] Update all sourcemaps to Sentry
- [x] Comments

## PWA Debug:
1. Run command `yarn build:w`.
2. Then run command `yarn serve`.
3. Make some changes, then refresh the page

## References
- https://web.dev/tags/performance/
- https://formito.com/tools/favicon
- https://simpleicons.org/
- https://www.cssscript.com/customizable-interactive-tooltips-pure-javascript-tippy-js/
- https://codepen.io/Metty/pen/KrvLQx
- https://codepen.io/Stockin/pen/jeNQEN
- https://www.flaticon.com/
- https://www.veryicon.com/
- https://css.gg/app
- https://cssgradient.io/
- https://coolors.co/gradient-maker/f8dadc-b6edc8-eeacdc
- https://doodad.dev/gradient-generator/
- https://www.checkmycolours.com/
- https://kazuhikoarase.github.io/qrcode-generator/js/demo/
- https://iconmonstr.com/
- https://validator.nu/
- https://obfuscator.io/
- https://mailto.now.sh/
- https://vercel.com/
- https://myraah.io/index.php/visualmind
- https://thomaspark.co/projects/fontcdn/
- https://glyphsearch.com/
- https://editor.method.ac/
- https://svg-edit.github.io/svgedit/dist/editor/index.html
- https://yqnn.github.io/svg-path-editor/
- https://vectr.com/
- https://www.calligrapher.ai/
- http://patorjk.com/text-color-fader/
- https://getwaves.io/
- https://www.zachleat.com/web/vector-raster-split/
- [Log tracing](https://sentry.io/)
- [Favicon checker and generator](https://realfavicongenerator.net/)
- [PWA Builder](https://www.pwabuilder.com/)
- [Web Share](https://web.dev/web-share/)
- [CSS Animations on Demand](https://animista.net/)
- [Comparison table of HTML special character encoding for web pages](https://www.22vd.com/33993.html)
- [sharethis](https://platform.sharethis.com/)
- [IP Geolocation API](https://ip-api.com/)
- [Free IP Lookup Geolocation API](https://extreme-ip-lookup.com/)
- [Locate and identify website visitors by IP address](https://ipstack.com/)
- [GeoNames WebServices overview](https://www.geonames.org/export/ws-overview.html)

PS:
  - [JSON description](https://chendachao.netlify.app/assets/data/en/chendachao.json)
  - [JSON description Local](http://localhost:8088/assets/data/en/chendachao.json)

Push with `yarn deploy:patch` not ps

## Commit Message
type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum]
```
type(scope?): subject
body?
footer?
```

## Branches
`dev -> main -> gh-pages`


## Husky
```
npx husky add .husky/commit-msg "yarn commitlint --edit $1"
```