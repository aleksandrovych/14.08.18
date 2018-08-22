
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
    //alert(template)
    var myTemplate = template.html().trim();
    alert(myTemplate)
    var myTemplateClone = $(myTemplate);
    myTemplateClone.attr('id', newId).appendTo(toElement);
}

function append(fromHTML, templateWithId, byNewId, toElement) {
    var template = $.get(fromHTML, function (data) {
        var html = $.parseHTML(data);
        var tempContainer = $('<div style="display: none;">'+ data +'</div>');
        $(toElement).append(tempContainer);
        var templ = $(tempContainer).find(templateWithId);
        alert(templ.html())
        appendTemplate(templ, byNewId, toElement)
        $(tempContainer).remove();
    })
}
