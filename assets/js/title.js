var titles = [
  "@",
  "@w",
  "@wa",
  "@wad",
  "@wadu",
  "@wadud",
  "@waduda",
  "@wadudang",
  "@wadudangc",
  "@wadudangca",
  "@wadudangcap",
  "@wadudangcap i",
  "@wadudangcap is",
  "@wadudangcap is m",
  "@wadudangcap is me",
];

function changeTitle() {
  var index = 0;

  setInterval(function() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
  }, 1000);
}

changeTitle();
