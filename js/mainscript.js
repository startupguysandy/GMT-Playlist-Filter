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

    function hideUnusedGenres() {


    }

    // create a checkbox at the top of the page for each genre in the array
    // show full list by default
    // when a checkbox is checked, hide all other songs which don't match the checkbox selected
});