window.addEventListener('load', ()=> {
    let listName = document.getElementById("playlist");
    let allGenres = listName.getElementsByTagName("li"); // gets the full html li element as an object
    let uniqueGenres = [];

    for(let i=0;i<allGenres.length;++i){
        if(!uniqueGenres.includes(allGenres[i].getAttribute('data-genre'))){
            uniqueGenres.push(allGenres[i].getAttribute('data-genre'));
        }
        console.log(uniqueGenres);
    }

    // TODO: Add functionality to only show li items matching the data-genre value of our choice. Once a static version is working I can implement the checkboxes.

    // create a checkbox at the top of the page for each genre in the array
    // show full list by default
    // when a checkbox is checked, hide all other songs which don't match the checkbox selected
});