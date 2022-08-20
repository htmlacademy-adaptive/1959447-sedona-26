const menu = document.querySelector(".header");
const openMenuButton = document.querySelector(".toggle");

openMenuButton.addEventListener("click", function () {
  menu.classList.toggle("header--opened");
});

const map = L.map("map").setView(
  {
    lat: 36.6205,
    lng: 29.1141,
  },
  10
);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);



const mainPinIcon = L.icon({
  iconUrl: 'img/icon/map-marker.svg',
  iconSize: [27, 27],
  iconAnchor: [27, 13],
});

const mainPinMarker = L.marker(
  {
    lat: 36.6205,
    lng: 29.1141,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);
