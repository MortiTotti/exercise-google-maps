let IN_MEMORY_DB = [{
    id: '34234234234',
    title: 'Leipzig',
    lat: 51.33,
    lng: 12.37
}];

export default class MapMarkerRepository {
    get = async () => Promise.resolve(IN_MEMORY_DB);

    async add(marker) {
        IN_MEMORY_DB.push(marker);
        return Promise.resolve(marker);
    }

    async update({ id, marker }) {
        let updatedMarker = null;
        IN_MEMORY_DB = IN_MEMORY_DB.map(marker => {
            if (marker.id != id) return marker;
            updatedMarker = { title: marker.title };
            return updatedMarker;
        });
        return Promise.resolve(updatedMarker)
    }

    async remove(id) {
        try {
            let count = IN_MEMORY_DB.length;
            IN_MEMORY_DB = IN_MEMORY_DB.filter(marker => marker.id == id);            
            console.log(IN_MEMORY_DB);
            return (IN_MEMORY_DB.length != count) ? Promise.resolve(true) : Promise.reject(false);
        } catch(err) {
            console.log(err);
        }
    }
}