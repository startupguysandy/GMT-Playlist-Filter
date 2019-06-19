window.addEventListener('load', ()=> {
    let listName = document.getElementById("playlist");
    let allGenres = listName.getElementsByTagName("li"); // gets the full html li element as an object
    let grammyCheckbox = document.getElementById("grammy-nominated");
    let uniqueGenres = [];
    let selectedGenres = [];
    let grammyNominated = Array.from(document.querySelectorAll('[data-grammy="yes"]'));

    console.log(grammyCheckbox);
    grammyCheckbox.addEventListener('change', (event) => {
        toggleGrammyNominated();
    });

    function findUniqueGenres() {
        for(let i=0;i<allGenres.length;++i){ // loop through all genres in the listed element
            // on each loop add any unique (only unique) genres fro the data tag to the new uniqueGenres array
            if(!uniqueGenres.includes(allGenres[i].getAttribute('data-genre'))){
                uniqueGenres.push(allGenres[i].getAttribute('data-genre'));
            }
        }
    }

    function generateCheckboxes() {
        for(let i=0;i<uniqueGenres.length;++i){
            let ul = document.getElementById("filters");
            let li = document.createElement("li");
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("id", uniqueGenres[i]);
            checkbox.addEventListener('change', (event) => {
                if (event.target.checked) {
                    addSelectedGenre(uniqueGenres[i]);
                } else {
                    removeSelectedGenre(uniqueGenres[i]);
                }
            });

            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(uniqueGenres[i]));
            ul.appendChild(li);
        }
    }

    function addSelectedGenre(genre) {
        selectedGenres.push(genre);
        hideSelectedGenres(genre);
    }

    function removeSelectedGenre(genre) {
        selectedGenres.pop(genre);
        showUnselectedGenres(genre);
    }

    function hideSelectedGenres(genre) {
        // querySelectorAll grabs the information as a nodelist, need to turn it into an array to be able to access items within it
        let itemsToHide = Array.from(document.querySelectorAll('[data-genre="'+genre+'"]'));

        itemsToHide.forEach(element => {
            element.style.display = "none";
            element.setAttribute('data-state', 'hidden');
        });
    }

    function showUnselectedGenres(genre) {
        // querySelectorAll grabs the information as a nodelist, need to turn it into an array to be able to access items within it
        let itemsToShow = Array.from(document.querySelectorAll('[data-genre="'+genre+'"]'));

        itemsToShow.forEach(element => {
            element.style.display = "list-item";
            element.removeAttribute('data-state');
        });
    }

    function toggleGrammyNominated() {
        let itemsToToggle = Array.from(document.querySelectorAll('[data-grammy="yes"]'));

        itemsToToggle.forEach(element => {
            if(element.style.display === "none" && element.getAttribute('data-state') !== "hidden") {
                element.style.display = "list-item";
            } else {
                element.style.display = "none";
            }
        });
    }

    // call essential functions on page load
    findUniqueGenres();
    generateCheckboxes();
});