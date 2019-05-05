import MapMarkerRepository from "../repositories/map-marker";
import MapMarker from "../models/map-marker";

export default class MapMarkerService {
    async getAllMarkers() {
        return await (new MapMarkerRepository()).get();
    }

    async addMarker({ title, long, lat }) {
        const mapMarker = new MapMarker({ title, long, lat });
        return await (new MapMarkerRepository()).add(mapMarker);
    }

    async updateMarker({id, marker}) {
        return await (new MapMarkerRepository()).update(id, marker);
    }

    async removeMarker(id) {
        return await (new MapMarkerRepository()).remove(id);
    }
}