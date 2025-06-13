const translations = {
    ru: {
        about_us: "О нас",
        team: "Команда",
        gallery: "Галерея",
        pricing: "Ценовая политика",
        contacts: "Контакты",
        useful_info: "Полезная информация",
        select_ru: "Русский",
        select_ee: "Эстонский",
        out_team: "Наша команда",
        worker1: "Татьяна",
        worker2: "Кристина",
        worker3: "Валентина",
        connect: "Свяжитесь с нами по следующим ссылкам"
    },

    ee: {
        about_us: "Meist",
        team: "Tiim",
        gallery: "Galerii",
        pricing: "Hinnapoliitika",
        contacts: "Kontaktid",
        useful_info: "Kasulik info",
        select_ru: "Vene keel",
        select_ee: "Eesti keel",
        out_team: "Meie tiim",
        worker1: "Tatjana",
        worker2: "Kristiina",
        worker3: "Valentina",
        connect: "Võtke meiega ühendust"
    }
}

const select = document.getElementById("language-select");

select.addEventListener("change", function () {
   const lang = this.value;
   const translation = translations[lang];

   const navEl = Array.from(document.getElementsByClassName("nav-list-li"));
   for (let i = 0; i < navEl.length; i++) {
       if (i !== navEl.length - 1) {
           const span = navEl[i].getElementsByTagName("span")[0];
           switch (i) {
               case 0:
                   span.textContent = translation["about_us"];
                   break;
               case 1:
                   span.textContent = translation["team"];
                   break;
               case 2:
                   span.textContent = translation["gallery"];
                   break;
               case 3:
                   span.textContent = translation["pricing"];
                   break;
               case 4:
                   span.textContent = translation["contacts"];
                   break;
               case 5:
                   span.textContent = translation["useful_info"];
                   break;
           }
       } else {
            const languages = document.getElementsByClassName("language-option");
            languages[0].textContent = translation["select_ru"];
            languages[1].textContent = translation["select_ee"];
       }
   }

   const aboutUsSection = document.getElementById("about-us");
   aboutUsSection.getElementsByClassName("about-us-header")[0].textContent = translation["about_us"];

   const teamSection = document.getElementById("team");
   teamSection.getElementsByClassName("team-header")[0].textContent = translation["out_team"];
   const team = teamSection.getElementsByClassName("worker-name");
   for (let i = 0; i < team.length; i++) {
       switch (i) {
           case 0:
               team[0].textContent = translation["worker1"];
               break;
           case 1:
               team[1].textContent = translation["worker2"];
               break;
           case 2:
               team[2].textContent = translation["worker3"];
       }
   }

   const gallerySection = document.getElementById("gallery");
   gallerySection.getElementsByTagName("h1")[0].textContent = translation["gallery"];

   const contactsSection = document.getElementById("contacts");
   contactsSection.getElementsByTagName("h1")[0].textContent = translation["contacts"];
   contactsSection.getElementsByTagName("p")[0].textContent = translation["connect"];
});