function unsupported() {
  console.log("not yet supported")
}

function linkedIn() {
  document.getElementById("advocate-modal").remove()
  document.body.className = ""
}

function quora() {
  document.getElementsByClassName("vertical_alignment_wrapper")[0].remove()
  document.body.className = ""
}

function wsj() {
  alert("Click the first link on the following Google search results page to read the article.")
  var current_location=location.href.replace(/^http\:\/\/(.*)$/,"$1")
  var current_location=current_location.split("?")[0]
  location.href="http://www.google.com/search?q=c..."+escape(current_location)
}

var supportedWalls = {
  "www.linkedin.com": linkedIn,
  "www.quora.com": quora,
  "www.wsj.com": wsj
}

if (supportedWalls.hasOwnProperty(document.location.hostname)) {
  supportedWalls[document.location.hostname]()
} else {
  unsupported()
}
