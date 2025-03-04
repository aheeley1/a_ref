const containerEl = document.createElement("div");
const titleEl = document.createElement("h2");
const bodyEl = document.createElementNS("p");
const closeButtonEl = document.createElement("button");

titleEl.innerText = "title"; //assign to variable
bodyEl.innerText = "body";

titleEl.style.borderBottom = "1px solid black";
titleEl.style.fontSize = "20px";

containerEl.style.position = "fixed";
containerEl.style.top = "10%";
containerEl.style.left = "40%";

document.body.appendChild(containerEl);

