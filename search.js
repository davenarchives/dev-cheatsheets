document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const boxes = document.querySelectorAll(".box");

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();
        let foundMatch = false;

        boxes.forEach(box => {
            const img = box.querySelector("img");
            if (img) {
                const altText = img.alt.toLowerCase();
                if (altText.includes(searchTerm)) {
                    box.style.display = ""; 
                    foundMatch = true; 
                } else {
                    box.style.display = "none"; 
                }
            }
        });

        if (foundMatch) {
            document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
        }
    });
});