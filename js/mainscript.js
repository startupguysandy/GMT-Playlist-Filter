window.addEventListener('load', ()=> {
    let listName = document.getElementById("playlist");
    let allGenres = listName.getElementsByTagName("li"); // gets the full html li element as an object
    let grammyCheckbox = document.getElementById("grammy-nominated");
    let uniqueGenres = [];

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
                toggleGenres(uniqueGenres[i]);
            });

            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(uniqueGenres[i]));
            ul.appendChild(li);
        }
    }

    function toggleGenres(genre) {
        let itemsToToggle = Array.from(document.querySelectorAll('[data-genre="'+genre+'"]'));

        itemsToToggle.forEach(element => {
            if(element.style.display === "none" && element.getAttribute('data-grammystate') !== "hidden") {
                element.style.display = "list-item";
                element.removeAttribute('data-genrestate');
            } else {
                element.style.display = "none";
                element.setAttribute('data-genrestate', 'hidden');
            }
        });
    }

    function toggleGrammyNominated() {
        let itemsToToggle = Array.from(document.querySelectorAll('[data-grammy="yes"]'));

        itemsToToggle.forEach(element => {
            if(element.style.display === "none" && element.getAttribute('data-genrestate') !== "hidden") {
                element.style.display = "list-item";
                element.removeAttribute('data-grammystate');
            } else {
                element.style.display = "none";
                element.setAttribute('data-grammystate', 'hidden');
            }
        });
    }

    // call essential functions on page load
    findUniqueGenres();
    generateCheckboxes();
});