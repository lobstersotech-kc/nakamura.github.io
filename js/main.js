(function () {
  var STORAGE_KEY = "portfolio-lang";
  var TITLES = {
    ja: "中村 海斗 | シニア フルスタックエンジニア",
    en: "Kaito Nakamura | Senior Full-Stack Engineer"
  };

  var root = document.documentElement;
  var buttons = document.querySelectorAll("[data-set-lang]");

  function setLang(lang) {
    if (!TITLES[lang]) lang = "ja";
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    document.title = TITLES[lang];
    buttons.forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-set-lang") === lang ? "true" : "false");
    });
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-set-lang"));
    });
  });

  var saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (e) {}
  setLang(saved || "ja");
})();
