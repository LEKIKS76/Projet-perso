


fetch("/components/chatbox.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("chatbox").innerHTML = data;

    const script = document.createElement("script");
    script.src = "/JS/chatbox.js";
    document.body.appendChild(script);
  });
