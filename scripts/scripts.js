
function headerItemClicked (button) {
    button.selected = !button.selected
}

function createList() {
    var grid = document.forms["formgrid"]
    var i = 0
    for (; i < 10; i++) {
        var item = document.querySelector("#templateitem")
        grid.appendChild(item.content.cloneNode(true));
    }

}
