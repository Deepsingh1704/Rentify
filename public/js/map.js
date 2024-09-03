
// mapboxgl.accessToken = mapToken;

// const map = new mapboxgl.Map({
//     container: "map", // container ID
//     style: "mapbox://styles/mapbox/streets-v12",
//     center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
//     zoom: 9, // starting zoom
// });

// const marker = new mapboxgl.Marker({ color: "red" })
//     .setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinates
//     .setPopup(new mapboxgl.Popup({ offset: 25, className: 'my-class' })
//         .setHTML(`<h4>${listing.location} </h4> <p>Exact Location will be provided after booking </p>`))
//     .addTo(map);


// mapboxgl.accessToken = mapToken;

// const map = new mapboxgl.Map({
//     container: "map", // container ID
//     style: "mapbox://styles/mapbox/streets-v12",
//     center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
//     zoom: 9, // starting zoom
// });
// console.log(listing.geometry.coordinates)
// const marker = new mapboxgl.Marker({ color: "red" })
//     .setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinates
//     .setPopup(new mapboxgl.Popup({ offset: 25, className: 'my-class' })
//         .setHTML(<h4>${listing.location} </h4> <p>Exact Location will be provided after booking </p>))
//     .addTo(map);


mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});


// Create a default Marker and add it to the map.
const marker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 9 }).setHTML(
        `<h6>${listing.location.toUpperCase()}</h6>
        <p>Exact location will be provided after booking</p>`
    )
    )
    .addTo(map);