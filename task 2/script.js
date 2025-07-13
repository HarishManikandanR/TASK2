// Make elements draggable
const draggables = document.querySelectorAll(".draggable");

draggables.forEach(el => {
  el.addEventListener("mousedown", dragMouseDown);

  function dragMouseDown(e) {
    e.preventDefault();
    let pos3 = e.clientX;
    let pos4 = e.clientY;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;

    function elementDrag(e) {
      e.preventDefault();
      const pos1 = pos3 - e.clientX;
      const pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      el.style.top = (el.offsetTop - pos2) + "px";
      el.style.left = (el.offsetLeft - pos1) + "px";
      el.style.position = "absolute";
      el.style.zIndex = 10;
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
});
