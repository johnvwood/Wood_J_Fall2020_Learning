async function fetchData(datasource) {
    let resource = await fetch(datasource).then(response => {
        // !== means does not equal. response 200 means all good
        if (response.status !== 200) {
            throw new Error(`Async Message! Error ${response.status}`);
        }

        return response;
    })
    
    let dataset = await resource.json();

    return dataset[0];
}

//statement used for exporting
export { fetchData };