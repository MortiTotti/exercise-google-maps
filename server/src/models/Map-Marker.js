import uuidv4 from 'uuid/v4';

export default class MapMarker {

    constructor({ title, long, lat }) {
        this.id = uuidv4();
        this.title = title || "Untitled marker"
        this.lat = long || 0.0;
        this.long = lat || 0.0;
    }
}