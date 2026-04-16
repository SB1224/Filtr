const inputCharName = document.querySelector(".char-name");
const characterSection = document.querySelector(".char");

const addCharToWebsite = (image, name) => {
  const div = document.createElement("div");

  div.classList.add("char-profile");

  const img = document.createElement("img");
  img.src = image;
  div.append(img);

  const p = document.createElement("p");
  p.textContent = name;
  div.append(p);

  return div;
};

const renderCharacters = (characters) => {
  characterSection.textContent = "";
  characters.forEach((character) => {
    if (character.image) {
      const CharProfile = addCharToWebsite(character.image, character.name);
      characterSection.append(CharProfile);
    }
  });
};

const fetchCharacters = () => {
  fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      inputCharName.addEventListener("input", () => {
        const inputValue = inputCharName.value.toLowerCase();

        const filteredChar = data.filter((oneCharacter) => {
          return oneCharacter.name.toLowerCase().includes(inputValue);
        });

        renderCharacters(filteredChar);
      });
    });
  renderCharacters(data);
};

fetchCharacters();
