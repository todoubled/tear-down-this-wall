var tearDownThisWall = function(callback) {
  chrome.tabs.executeScript(null, {file: "content.js"})
}
