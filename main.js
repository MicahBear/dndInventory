// document.querySelector('#clickMe').addEventListener('click', makeReq)

// async function makeReq() {

//     const userName = document.querySelector("#userName").value;
//     const res = await fetch(`/api?student=${userName}`)
//     const data = await res.json()

//     console.log(data);
//     document.querySelector("#personName").textContent = data.name
//     document.querySelector("#personStatus").textContent = data.status
//     document.querySelector("#personOccupation").textContent = data.currentOccupation
// }

const getEquipment = async () => {
    try {

        const response = await fetch(' https://www.dnd5eapi.co/api/equipment'); // get users list
        if (!response.ok) {
            throw new Error(response.status)
        }
        const equipment = await response.json(); // parse JSON
        document.querySelector('#test').textContent = equipment.results[0].name
        console.log(equipment.results[0].name)
        return equipment

    }
    catch (error) {
        console.log(error)
    }



};

const promise = getEquipment()
promise.then(equipment => console.log(equipment))