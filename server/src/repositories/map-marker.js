let IN_MEMORY_DB = [];

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

    async delete(id) {
        let count = IN_MEMORY_DB.length;
        IN_MEMORY_DB = IN_MEMORY_DB.filter(marker => marker.id != id);
        return (IN_MEMORY_DB.length != count) ? Promise.resolve(true) : Promise.reject(false);
    }    
}