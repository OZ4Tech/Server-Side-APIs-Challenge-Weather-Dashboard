const api_url = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=97b49fe84a723d08c6284cbc3ba85e9c";
async function getUser() {

  // Making an API call (request)
  // and getting the response back
  const response = await fetch(api_url);

  // Parsing it to JSON format
  const data = await response.json();
  console.log(data.results);