let cv = document.getElementById('cv');
let si = document.getElementById('si');
let ii = document.getElementById('ii');
let sd = document.getElementById('sd');
let id = document.getElementById('id');

let nuevaVentana = null;

cv.onclick = function() {
    nuevaVentana = window.open("./ventanaNueva.html", "", "width=100,height=100");
    let rect = cv.getBoundingClientRect();
    nuevaVentana.moveTo(rect.left, rect.top);
};

si.onclick = function() {
        let rect = si.getBoundingClientRect();
        nuevaVentana.moveTo(rect.left, rect.top);
};

ii.onclick = function() {
        let rect = ii.getBoundingClientRect();
        nuevaVentana.moveTo(rect.left, rect.top);
};

sd.onclick = function() {
        let rect = sd.getBoundingClientRect();
        nuevaVentana.moveTo(rect.left, rect.top);
};

id.onclick = function() {
        let rect = id.getBoundingClientRect();
        nuevaVentana.moveTo(rect.left, rect.top);
};
