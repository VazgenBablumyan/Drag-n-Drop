const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");


fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) { 
   empty.addEventListener("dragover", dragOver);
   empty.addEventListener("dragenter", dragEnter);
   empty.addEventListener("dragleave", dragLeave);
   empty.addEventListener("drop", dargDrop);
};

function dragStart() {
   this.className += " hold";
   setTimeout(() => (this.className = "invisible"), 0)
}

function dragEnd() {
    this.className = "fill";
}

function dragOver(evt) {
  evt.preventDefault(); 
}

function dragEnter(evt) {
   evt.preventDefault();
   this.className += " hovered";

}

function dragLeave() {
   this.className = "empty";

}

function dargDrop() {
   this.className = "empty";
   this.append(fill);
}