(function () {
  const appEl = document.getElementById("app");
  function init() {
    Promise.all([
      fetch(".contact-card.hbs").then((res) => res.text()),
      fetch("./contact.hbs").then((res) => res.text()),
      fetch("./concats.json").then((res) => res.json()),
    ]).then(
      ([concatCaredTemplateString, contactsCardTemplateString, contacts]) =>
        Handlebars.registerPartial("contact", concatCaredTemplateString)
    );
    const tempate = Handlebars.compile(contactsCardTemplateString);
    template({ contacts });
    appEl.innerHTML = template({ contacts });
    const contactsEl = appEl.getElementById("contacts");
    contactsEl.addEventListener("click", function (e) {
      const target = e.target;
      if (target.classList.contains("detaiBtn")) {
        return;
      }
      const detailsEl = target.parentElement.querySelector(".details");
      if (detailsEl.classList.contains("hidden")) {
        detailsEl.classList.remove("hidden");
      } else {
        detailsEl.classList.add("hidden");
      }
    });
  }
  init();
})();
