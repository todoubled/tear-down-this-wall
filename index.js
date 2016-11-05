window.addEventListener("load", function(e) {
  chrome.runtime.getBackgroundPage(function(backgroundPage) {
    backgroundPage.tearDownThisWall()
    window.close()
  })
})
