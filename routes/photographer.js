// aqui hago las funciones
// faker 
let photographers = [{ 
    id: 1,
    name: 'angela',
    specialization: 'wedding photos',
    city: 'medellin',
    status: 'available',
    score: 5
}, { 
    id: 2,
    name: 'mapita',
    specialization: 'profile photos',
    city: 'medellin',
    status: 'available',
    score: 4
}]

exports.allPhotographers = () => {
    return photographers;
}

exports.createPhotographer = (photographer) => {
    return photographers.push(photographer)
}

exports.deletePhotographer = (id) => {
    photographers = photographers.filter(photographer => photographer.id !== id);
    return photographers;
}

exports.updatePhotographer = (id, body) => {
    const photographer = photographers.find(photographer => photographer.id === id);
    return {...photographer, name: body.name, city: body.city};
}