**Markers must be labelled**

```
var marker = L.marker([50.4501, 30.5234],
  {alt: 'Kyiv'}).addTo(map) // "Kyiv" is the accessible name of this marker
  .bindPopup('Kyiv, Ukraine is the birthplace of Leaflet!');
```

**Purely decorative maps**

```
<!-- This map is for aesthetic purposes only, and can not be interacted with! -->
<div id='decorative-map' inert></div>
<script src='https://unpkg.com/wicg-inert@latest/dist/inert.min.js'></script>
```

**Use an up-to-date version of Leaflet**
