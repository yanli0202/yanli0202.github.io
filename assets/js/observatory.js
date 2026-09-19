/* Native details navigation remains usable when JavaScript is unavailable. */
(function () {
  "use strict";

  var menus = Array.from(document.querySelectorAll("details.menu-disclosure"));

  if (!menus.length) return;

  menus.forEach(function (menu) {
    menu.addEventListener("click", function (event) {
      if (!(event.target instanceof Element)) return;

      var link = event.target.closest("a[href]");
      if (link && menu.contains(link)) menu.open = false;
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;

    var openMenu = menus.find(function (menu) {
      return menu.open;
    });
    if (!openMenu) return;

    openMenu.open = false;
    var summary = openMenu.querySelector("summary");
    if (summary) summary.focus();
    event.preventDefault();
  });

  document.addEventListener("pointerdown", function (event) {
    menus.forEach(function (menu) {
      if (menu.open && !menu.contains(event.target)) menu.open = false;
    });
  });
})();
