function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    
    tiles = document.getElementById("tiles");
    tile = tiles.getElementsByClassName("tile");
    
    for (i = 0; i < tile.length; i++) {
        a = tile[i].getElementsByTagName("h2")[0].getElementsByTagName("a")[0];
        
        txtValue = a.textContent || a.innerText;
        // console.log(txtValue);
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tile[i].style.display = "";
        } else {
            tile[i].style.display = "none";
        }
    }
    
}
