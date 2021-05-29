interface INotes {
  name: string;
  description: string;
}

class Notes implements INotes {
  constructor(public name: string, public description: string) { }

}

class NotesList {
  public static allNotes: Notes[] = new Array;

  createNotesItem(name: string, description: string): number {
    let newItem = new Notes(name, description);
    let totalCount: number = NotesList.allNotes.push(newItem);
    return totalCount;
  }

  allNotesItems(): Notes[] {
    return NotesList.allNotes;
  }
}

window.onload = function () {
  let note = <HTMLInputElement>document.getElementById("NotesName");
  let description = <HTMLInputElement>document.getElementById("NotesDescription");

  document.getElementById("add").addEventListener('click', () => toAllnotes(note.value, description.value));
}

function toAllnotes(note: string, description: string) {

  let Notes = new NotesList();
  Notes.createNotesItem(note, description);

  let div = <HTMLDivElement>document.getElementById("NotesList");
  let list = "<div class='list-div'>";

  for (let index = 0; index < NotesList.allNotes.length; index++) {
    list = list + "<div class='wrap'>" + "<h3>" + NotesList.allNotes[index].name + ' </h3> <p>' + NotesList.allNotes[index].description + '</p> </div>';
  }
  list += "</div>"
  div.innerHTML = list;

  (<HTMLInputElement>document.getElementById("NotesName")).value = "";

  (<HTMLInputElement>document.getElementById("NotesDescription")).value = "";

}