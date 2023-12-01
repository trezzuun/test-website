(self.__BUILD_MANIFEST = (function (s) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    "/": [
      s,
      "static/chunks/621-e0ab2dcfb5b5e79b.js",
      "static/chunks/pages/index-14ef25ebbc9ad492.js",
    ],
    "/404": ["static/chunks/pages/404-8450e59c7f8abf03.js"],
    "/_error": ["static/chunks/pages/_error-0a004b8b8498208d.js"],
    "/[username]": [
      s,
      "static/chunks/360-d653ffa85d8dc310.js",
      "static/css/ae4ed9c503fd1e33.css",
      "static/chunks/pages/[username]-2aa84a970b2affe9.js",
    ],
    sortedPages: ["/", "/404", "/_app", "/_error", "/[username]"],
  };
})("static/chunks/669-ea9be32ba3306a6d.js")),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();


  // STOP PEOPLE FROM STEALING
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};