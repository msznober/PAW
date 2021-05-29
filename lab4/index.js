var Notes = /** @class */ (function () {
    function Notes(name, description) {
        this.name = name;
        this.description = description;
    }
    return Notes;
}());
var NotesList = /** @class */ (function () {
    function NotesList() {
    }
    NotesList.prototype.createNotesItem = function (name, description) {
        var newItem = new Notes(name, description);
        var totalCount = NotesList.allNotes.push(newItem);
        return totalCount;
    };
    NotesList.prototype.allNotesItems = function () {
        return NotesList.allNotes;
    };
    NotesList.allNotes = new Array;
    return NotesList;
}());
window.onload = function () {
    var note = document.getElementById("NotesName");
    var description = document.getElementById("NotesDescription");
    document.getElementById("add").addEventListener('click', function () { return toAllnotes(note.value, description.value); });
};
function toAllnotes(note, description) {
    var Notes = new NotesList();
    Notes.createNotesItem(note, description);
    var div = document.getElementById("NotesList");
    var list = "<div class='list-div'>";
    for (var index = 0; index < NotesList.allNotes.length; index++) {
        list = list + "<div class='wrap'>" + "<h3>" + NotesList.allNotes[index].name + ' </h3> <p>' + NotesList.allNotes[index].description + '</p> </div>';
    }
    list += "</div>";
    div.innerHTML = list;
    document.getElementById("NotesName").value = "";
    document.getElementById("NotesDescription").value = "";
}
