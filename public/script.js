const getBands = async () => {
  try {
    return (
      await fetch("https://reading-server-side-json.onrender.com/api/bands")
    ).json();
  } catch (error) {
    console.log(error);
  }
};
const showBands = async () => {
  const bandContainer = document.getElementById("band-list");
  const bandJSON = await getBands();

  bandJSON.forEach((band) => {
    const section = document.createElement("section");
    section.classList.add("column");
    bandContainer.append(section);

    let img = document.createElement("img");
    section.append(img);
    img.src = "https://reading-server-side-json.onrender.com/" + band.image;

    const h3 = document.createElement("h3");
    section.append(h3);
    const name = band.name;
    h3.innerHTML = name;

    const genre = document.createElement("p");
    section.append(genre);
    genre.innerHTML = "Genre: " + band.genre;

    const formedDate = document.createElement("p");
    section.append(formedDate);
    formedDate.innerHTML = "Formed: " + band.formed;

    const topSongs = document.createElement("p");
    section.append(topSongs);
    topSongs.innerHTML = "Top Songs: ";
    band.topSongs.forEach((song) => {
      if (song == band.topSongs[band.topSongs.length - 1]) {
        topSongs.innerHTML += song;
      } else {
        topSongs.innerHTML += song + ", ";
      }
    });

    const country = document.createElement("p");
    section.append(country);
    country.innerHTML = "Country: " + band.country;
  });
};

window.onload = () => {
  showBands();
};
