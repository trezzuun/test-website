// Function to fetch anime data from JSON file
async function fetchAnimeData() {
  try {
    const response = await fetch("anime.json");
    if (!response.ok) {
      throw new Error("Failed to fetch anime data");
    }
    const data = await response.json();
    return data.animeList;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to render anime cards
async function renderAnimeList(animeData) {
  const animeListContainer = document.querySelector(".anime-list");
  animeListContainer.innerHTML = "";

  animeData.forEach((anime) => {
    const animeCard = document.createElement("div");
    animeCard.classList.add("anime-card");
    animeCard.innerHTML = `
          <div class="anime-image">
            <img src="${anime.image}" alt="${anime.title}">
          </div>
          <div class="anime-details">
            <h2>${anime.title}</h2>
            <p>${anime.bio}</p>
          </div>
        `;
    animeListContainer.appendChild(animeCard);
  });
}

// Function to filter anime by genre
function filterByGenre(genre) {
  fetchAnimeData().then((animeData) => {
    if (genre === "all") {
      renderAnimeList(animeData);
    } else {
      const filteredAnime = animeData.filter((anime) =>
        anime.genre.includes(genre)
      );
      renderAnimeList(filteredAnime);
    }
  });
}

// Function to filter anime by status
function filterByStatus(status) {
  fetchAnimeData().then((animeData) => {
    if (status === "all") {
      renderAnimeList(animeData);
    } else {
      const filteredAnime = animeData.filter(
        (anime) => anime.status === status
      );
      renderAnimeList(filteredAnime);
    }
  });
}

// Function to handle search input
document.getElementById("searchInput").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  fetchAnimeData().then((animeData) => {
    const filteredAnime = animeData.filter((anime) =>
      anime.title.toLowerCase().includes(searchTerm)
    );
    renderAnimeList(filteredAnime);
  });
});

// Event listeners for genre and status filters
document.getElementById("genreFilter").addEventListener("change", function () {
  const selectedGenre = this.value;
  filterByGenre(selectedGenre);
});

document.getElementById("statusFilter").addEventListener("change", function () {
  const selectedStatus = this.value;
  filterByStatus(selectedStatus);
});

// Initial render of anime list
fetchAnimeData().then((animeData) => {
  renderAnimeList(animeData);
});

// Function to render detailed anime information in modal
function renderAnimeDetails(anime) {
  const modalContainer = document.getElementById("modalContainer");
  const animeDetailsContainer = document.getElementById("animeDetails");

  // Render detailed information
  animeDetailsContainer.innerHTML = `
      <h2>${anime.title}</h2>
      <img src="${anime.image}" alt="${anime.title}">
      <p>Alternative title: ${anime.Alternativetitle}</p>
      <p>Genre: ${anime.genre}</p>
      <p>Status: ${anime.status}</p>
      <p>${anime.detailedbio}</p>
      <!-- Add more detailed information here as needed -->
    `;

  // Display the modal
  modalContainer.style.display = "block";
}

// Function to close the modal
function closeModal() {
  const modalContainer = document.getElementById("modalContainer");
  modalContainer.style.display = "none";
}

// Rest of the code remains the same
// ...

// Event listener for displaying detailed anime information on click
document
  .querySelector(".anime-list")
  .addEventListener("click", function (event) {
    if (event.target.closest(".anime-card")) {
      // Fetch the specific anime data based on the clicked item
      const animeId = event.target.closest(".anime-card").dataset.id; // Assuming each anime card has a data-id attribute
      fetchAnimeData().then((animeData) => {
        const selectedAnime = animeData.find((anime) => anime.id === animeId);
        renderAnimeDetails(selectedAnime);
      });
    }
  });
