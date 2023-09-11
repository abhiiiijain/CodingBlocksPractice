function setAll() {
  let element1 = `<div> avengers endgame </div>`;

  document.getElementById("container1").innerHTML = element1;

  let element2 = React.createElement("div", null, "avengers endgame");

  ReactDOM.render(element2, document.getElementById("container2"));
}

setInterval(setAll, 1000);
