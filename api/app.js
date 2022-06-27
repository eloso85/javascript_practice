

function getData(city){
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}&per_page=3`)
    .then(response => response.json())
    .then(data => { data
        const map1 = data.map(city => city.name)
        console.log(map1);
    
    });

   

}

getData("cedar_park")

