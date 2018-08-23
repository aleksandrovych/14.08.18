
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

function appendTemplate(template, newId, toElement) {
    var myTemplate = template.html().trim();
    var myTemplateClone = $(myTemplate);
    myTemplateClone.attr('id', newId).prependTo(toElement);
}

function appendToHTML(fromHTML, templateWithId, byNewId, toElement) {
    var template = $.get(fromHTML, function (data) {
        var html = $.parseHTML(data);
        var tempContainer = $('<div style="display: none;">'+ data +'</div>');
        $(toElement).append(tempContainer);
        var templ = $(tempContainer).find(templateWithId);
        $(tempContainer).remove();
    })
}
