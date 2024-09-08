async function fetchData() {
  const url = "http://127.0.0.1:8000/api/susage/odisha/1/2020";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Parse the JSON response
    console.log(data); // Log the fetched data to the console
  } catch (error) {
    console.error("Failed to fetch data:", error); // Log any errors
  }
}

// Call the fetchData function
fetchData();
