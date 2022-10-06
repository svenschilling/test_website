/* 
    - Während Eingabe soll Vorschlag angezeigt werden (“Suchfunktion”)
    + place another text below the searchtext z-index
    - Bestätigung mit Enter
    - Vor Eingabe soll eine Beispieleingabe drin stehen
    - Pfeiltaste nach unten Drücken scrollt durch das Dropdown      automatisch 
*/

let searchInput, filter, ul, li, a, i, txtValue
const inputSearchBar = document.getElementById('inputSearchBar')
const toggleView = document.getElementById('toggleView')
searchInput = document.getElementById('inputSearchBar')
ul = document.getElementById("employeeUL")
li = ul.getElementsByTagName('li')

inputSearchBar.addEventListener('search', (searchEvent) => {
    console.log('hit:------------------ ')
})

inputSearchBar.addEventListener('keyup', (keyEvent) => {    

    filter = inputSearchBar.value.toUpperCase()

    // TODO build a selector which starts with the first element in list when arrow key hit the first time

    selector = ''
    // ! when search is cleared via x it's not working anymore
    //! trim input to resolve error ?

    // TODO get all li list items where style.display = "" then take the first element of it

    //! only loop through entries that are visible
    //! THIS PROBLEM -> loop through all list items, hide if no match

    //! SOLVED MAKE A MOVEABLE GREY BACKGOUND that only can move to far like items are  visible -> enter key hovering item gets selected
    //! esc key deselects everything

    //! take length of all entries 
    //! return update length at the end with the elements that are not display:none
    //! do this as a callback until
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0]
        txtValue = a.textContent
        // console.log(txtValue)
        
        if (keyEvent.key === 'ArrowUp') {  
            console.log('up pressed')
        }
        if (keyEvent.key === 'ArrowDown') {
            console.log('down pressed')
        }
        // matches partwise any given string
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            // make it visible
            li[i].style.display = ""
            let output = li[i].innerText
            console.log('items: ' + output)
            
            // put value of item into input field
            if (keyEvent.key === 'Enter') {
                //! always takes the first and not the actual
                //!
                let item = output 
                let item2 = li[0].innerText
                console.log('CHOOSEN: ' + item)    
                // replace input text
                inputSearchBar.value = item2

                console.log('item:' + item)
            }
        } else {
            li[i].style.display = "none"
        }
    }  

});

function searchQuery(params) {
    //TODO SQL query
    //TODO JSON query
}
