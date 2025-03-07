function searchShipment() {
    let searchValue = document.getElementById("searchBox").value;

    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            let shipment = data.find(item => item.shipmentNumber === searchValue);
            if (shipment) {
                document.getElementById("result").innerText = 
                    `Shipment ${shipment.shipmentNumber} is in Bin: ${shipment.binLocation}`;
            } else {
                document.getElementById("result").innerText = "Shipment not found.";
            }
        })
        .catch(error => console.error("Error loading data:", error));
}

