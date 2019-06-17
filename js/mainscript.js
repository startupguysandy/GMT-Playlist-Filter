window.addEventListener('load', ()=> {
    let listName = document.getElementById("playlist");
    let allGenres = listName.getElementsByTagName("li"); // gets the full html li element as an object
    let uniqueGenres = [];
    let selectedGenres = "hip-hop"; // TODO: Change to an array once I've implemented checkbox functionality

    for(let i=0;i<allGenres.length;++i){ // loop through all genres in the listed element
        // on each loop add any unique (only unique) genres fro the data tag to the new uniqueGenres array
        if(!uniqueGenres.includes(allGenres[i].getAttribute('data-genre'))){
            uniqueGenres.push(allGenres[i].getAttribute('data-genre'));
        }

        // TODO: Refactor into its own function so we can re-use it once checkboxes are implemented
        // on each loop check if the genre data element for this current item matches the selected genres from the checkboxes
        // if the genre doesn't match, hide this li element
        if(allGenres[i].getAttribute('data-genre') !== selectedGenres) {
            allGenres[i].style.display = "none";
            console.log(allGenres[i].getAttribute('data-genre'));
        }
    }

    function generateCheckboxes() {
        for(let i=0;i<uniqueGenres.length;++i){
            let ul = document.getElementById("filters");
            let li = document.createElement("li");
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");

            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(uniqueGenres[i]));
            ul.appendChild(li);
        }
    }
    generateCheckboxes();

    function checkboxEnabled() {
        // TODO: Call this function when a checkbox on the page is checked. I think this is how I need to work with an event listener for that.
    }

    function hideUnusedGenres() {
        // TODO: Add functionality so once a checkbox is enabled we go through the DOM elements and hide anything which isn't in the selectedGenres array
        //  I may need a button to kick off the listener initially
    }
    hideUnusedGenres();

    // show full list of genres on page load
    // when a checkbox is checked, hide all other songs which don't match the checkbox selected
});