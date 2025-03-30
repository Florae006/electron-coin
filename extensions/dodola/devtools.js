// Dodola DevTools Extension
chrome.devtools.panels.create(
  "dodola",
  "icons/logo.svg",
  "devtools.html",
  function (panel) {
    // Code invoked on panel creation
    console.log("Dodola DevTools panel created");
  }
);