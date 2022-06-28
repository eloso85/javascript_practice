

function getData(city){
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}&per_page=3`)
    .then(response => response.json())
    .then(data => { data

     let name = data.map(buisness => buisness.name)
        const street = data.map(name => name.street)
        //console.log(name);
        //console.log(street);
        // const map1 = data.map(city => city.name)
        //console.log(map1);
    })
   
}
getData("cedar_park")

// api url
const api_url =
	"https://api.openbrewerydb.org/breweries?by_city=cedar_park&per_page=3";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Office</th>
		<th>Position</th>
		<th>Salary</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.list) {
		tab += `<tr>
	<td>${r.name} </td>
	<td>${r.office}</td>
	<td>${r.position}</td>
	<td>${r.salary}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}

