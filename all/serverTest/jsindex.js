let apiCall = async (api) => {
    const apiRoot = 'https://89ef462c-9a42-48f4-b8da-f3a26d60b0e9.mock.pstmn.io';
    const request = `${apiRoot}${api}`;
    let response = await fetch(request);

    for (let [key, value] of response.headers) {
        console.log(`${key} = ${value}`);
    }

    let json = await response.json();
    return json;
}

let allCars = apiCall('/cars');
console.log(allCars);


