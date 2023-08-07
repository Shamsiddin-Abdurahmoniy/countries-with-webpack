(() => {
  var e = {
      423: () => {
        const e = document.querySelector(".header__dark-mode"),
          t = document.querySelector("body"),
          n =
            (document.querySelector(".mode-text"),
            localStorage.getItem("mode") ? localStorage.getItem("mode") : null);
        n && t.classList.add("dark-mode"),
          e.addEventListener("click", () => {
            t.classList.toggle("dark-mode"),
              n
                ? localStorage.setItem("mode", "")
                : localStorage.setItem("mode", "dark");
          });
      },
    },
    t = {};
  function n(o) {
    var a = t[o];
    if (void 0 !== a) return a.exports;
    var r = (t[o] = { exports: {} });
    return e[o](r, r.exports, n), r.exports;
  }
  (() => {
    "use strict";
    const e = document.querySelector(".loader"),
      t = (t) => {
        t ? e.classList.remove("hidden") : e.classList.add("hidden");
      },
      o = async (e) => {
        t(!0);
        const n = await fetch(e);
        if (!n.ok) throw (t(!1), new Error("Something went wrong :("));
        const o = await n.json();
        return t(!1), o;
      },
      a = document.querySelector(".cards"),
      r = (e) => {
        (a.innerHTML = ""),
          e.forEach((e) => {
            const t = e.name.common,
              n = e.population,
              o = e.region,
              r = e.capital ? e.capital[0] : "No capital",
              c = e.flags.svg,
              s = document.createElement("li");
            s.classList.add("cards__item"),
              (s.innerHTML += `\n    <a href="./about.html?country=/name/${t}">\n<img\n  src=${c}\n  alt="germany-flag"\n  width="267"\n  height="160"\n/>\n<div class="cards__item-inner">\n  <h3 class="cards__title">${t}</h3>\n  <p class="population">Population: <span>${n}</span></p>\n  <p class="region">Region: <span>${o}</span></p>\n  <p class="capital">Capital: <span>${r}</span></p>\n</div>\n</a>`),
              a.appendChild(s);
          });
      },
      c =
        (document.querySelector(".country-info"),
        document.querySelector(".search"));
    c.search.addEventListener("input", () => {
      const e = c.search.value.toLowerCase(),
        t = document.querySelectorAll(".cards__item");
      document.querySelectorAll(".cards__title").forEach((n, o) => {
        n.textContent.toLowerCase().includes(e)
          ? (t[o].style.display = "block")
          : (t[o].style.display = "none");
      });
    });
    const s = document.querySelectorAll(".search__select-list li"),
      l = document.querySelector(".search__select span");
    s.forEach((e) => {
      e.addEventListener("click", () => {
        let t;
        (l.textContent = e.textContent),
          (t =
            "All" == e.textContent
              ? "https://restcountries.com/v3.1/all"
              : `https://restcountries.com/v3.1/region/${e.textContent}`),
          o(t)
            .then((e) => {
              r(e);
            })
            .catch((e) => {
              alert(e.message);
            });
      });
    }),
      n(423),
      o("https://restcountries.com/v3.1/all")
        .then((e) => {
          r(e);
        })
        .catch((e) => {
          alert(e.message);
        });
  })();
})();
