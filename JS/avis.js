document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".star");
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener("click", () => {
            selectedRating = parseInt(star.dataset.value);
            updateStars();
        });
    });

    function updateStars() {
        stars.forEach(star => {
            if (parseInt(star.dataset.value) <= selectedRating) {
                star.classList.add("selected");
            } else {
                star.classList.remove("selected");
            }
        });
    }

    const reviewForm = document.getElementById("review-form");
    const reviewList = document.getElementById("review-list");

    reviewForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const comment = document.getElementById("comment").value;

        if (selectedRating === 0) {
            alert("Veuillez sélectionner une note !");
            return;
        }

        const reviewItem = document.createElement("div");
        reviewItem.classList.add("review-item");
        reviewItem.innerHTML = `
            <strong>${name}</strong> - <span>${selectedRating} étoile(s)</span>
            <p>${comment}</p>
        `;
        reviewList.appendChild(reviewItem);

        // Réinitialiser le formulaire
        reviewForm.reset();
        updateStars();
    });
});
