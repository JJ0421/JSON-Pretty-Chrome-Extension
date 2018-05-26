var text = document.body.textContent || document.body.innerText;
var obj = JSON.parse(text);
document.getElementsByTagName('pre')[0].innerHTML = JSON.stringify(obj, null, 2);