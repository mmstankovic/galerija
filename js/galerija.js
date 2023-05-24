function MojaGalerija(podaci) {
  let PREZENTER = null;

  function kreiraj_prezenter(putanja, index, slike) {
    if (PREZENTER == null) {
      PREZENTER = document.createElement("div");
      PREZENTER.setAttribute("id", "galerija-prezentacija");

      document.body.prepend(PREZENTER);
    } else {
      PREZENTER.innerHTML = "";
    }

    //Glavna slika

    const glavna_slika = document.createElement("img");
    glavna_slika.setAttribute("src", putanja);
    glavna_slika.setAttribute("id", "glavna-slika");
    glavna_slika.classList.add("fade-in-effect");

    PREZENTER.append(glavna_slika);

    //Strelica za prethodnu sliku

    if (index != 0) {
      const el_prethodna = document.createElement("button");
      el_prethodna.innerHTML = "&#10094;";
      el_prethodna.setAttribute("id", "galerija-prethodna");
      el_prethodna.setAttribute("data-prethodna", index - 1);

      el_prethodna.onclick = (e) => {
        const strelica = e.target;
        const index_prethodni = Number(strelica.getAttribute("data-prethodna"));
        const slika_prethodna = slike[index_prethodni];

        kreiraj_prezenter(slika_prethodna.velika, index_prethodni, slike);
      };

      PREZENTER.append(el_prethodna);
    }
    //Strelica za sledecu sliku

    if (index != slike.length - 1) {
      const el_sledeca = document.createElement("button");
      el_sledeca.innerHTML = "&#10095;";
      el_sledeca.setAttribute("id", "galerija-sledeca");
      el_sledeca.setAttribute("data-sledeca", index + 1);

      el_sledeca.onclick = (e) => {
        const strelica = e.target;
        const index_sledeci = Number(strelica.getAttribute("data-sledeca"));
        const slika_sledeca = slike[index_sledeci];

        kreiraj_prezenter(slika_sledeca.velika, index_sledeci, slike);
      };

      PREZENTER.append(el_sledeca);
    }

    //Dugme za zatvaranje

    const dugme_zatvori = document.createElement("button");
    dugme_zatvori.innerHTML = "&times;";
    dugme_zatvori.setAttribute("id", "zatvori-prezentaciju");
    PREZENTER.append(dugme_zatvori);

    dugme_zatvori.onclick = () => {
      PREZENTER.classList.add("fade-out-effect");
      setTimeout(() => {
        PREZENTER.remove();
        PREZENTER = null;
      }, 1000);
    };
  }

  //Kontejner za veliku sliku
  const kontejner = document.querySelector(podaci.selektor);
  kontejner.classList.add("moja-galerija");

  for (let i = 0; i < podaci.slike.length; i++) {
    const el_slika = document.createElement("img");
    el_slika.setAttribute("src", podaci.slike[i].thumbnail);
    el_slika.setAttribute("data-large-photo", podaci.slike[i].velika);
    el_slika.classList.add("galerija-thumbnail");
    //kreiranje thumbnail-ova
    el_slika.setAttribute("data-index", i);

    kontejner.append(el_slika);

    //dogadjaj otvara veliku sliku
    el_slika.onclick = (e) => {
      const el_thumb = e.target;
      const velika = el_thumb.getAttribute("data-large-photo");
      const index_slike = Number(el_thumb.getAttribute("data-index"));

      kreiraj_prezenter(velika, index_slike, podaci.slike);
    };
  }
}

const test_podaci = {
  selektor: "#galerija",
  slike: [
    {
      naslov: "Angkor Wat, Cambodia",
      thumbnail: "./images/Angkor_Wat_thumbnail.jpg",
      velika: "./images/Angkor_Wat_Cambodia.jpg",
      opis: "",
    },
    {
      naslov: "Grand Canyon, Arizona",
      thumbnail: "./images/Grand_Canyon_thumbnail.jpg",
      velika: "./images/Grand_Canyon_Arizona.jpg",
      opis: "",
    },
    {
      naslov: "Machu Picchu, Peru",
      thumbnail: "./images/Machu_Picchu_thumbnail.jpg",
      velika: "./images/Machu_Picchu_Peru.jpg",
      opis: "",
    },
    {
      naslov: "",
      thumbnail: "./images/Marrakesh_thumbnail.jpg",
      velika: "./images/Marrakesh_Morocco.jpg",
      opis: "",
    },
    {
      naslov: "",
      thumbnail: "./images/Maui_thumbnail.jpg",
      velika: "./images/Maui_Hawaii.jpg",
      opis: "",
    },
    {
      naslov: "",
      thumbnail: "./images/New_Zealand_thumbnail.jpg",
      velika: "./images/New_Zealand.jpg",
      opis: "",
    },
    {
      naslov: "",
      thumbnail: "./images/Rome_thumbnail.jpg",
      velika: "./images/Rome_Italy.jpg",
      opis: "",
    },
  ],
};

MojaGalerija(test_podaci);
