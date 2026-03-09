const isLocal =
  location.hostname === "localhost" ||
  location.hostname.startsWith("127.0") ||
  location.hostname.endsWith(".local");

if (!isLocal) {

  function loadGTM(layerName, containerId) {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l !== "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", layerName, containerId);
  }

  // Internal Analytics Container
  loadGTM("internalDataLayer", "GTM-K2PBDNRB");
} else {
  console.log("Google Tag Manager is disabled in local environment.");
}