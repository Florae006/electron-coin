document.getElementById("dodola").addEventListener("click", function () {
  chrome.runtime.sendMessage({ action: "toggleDodola" }, function (response) {
    console.log("Dodola toggled:", response);
  });
});