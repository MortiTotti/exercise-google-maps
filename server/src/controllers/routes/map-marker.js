import { Router } from 'express';
import MapMarkerService from '../../services/map-marker';
const route = Router();

export default (app) => {
    app.use('/mapmarker', route);

    route.get('/', async (req, res, next) => {
        try {
            const result = await (new MapMarkerService()).getAllMarkers();
            return res.json(result).status(200);
        } catch (err) {
            console.log('Server error ', err);
            return next(err);
        }
    });

    route.post('/', async (req, res, next) => {
        try {
            const result = await (new MapMarkerService()).addMarker(req.body);
            return res.json(result).status(200);
        } catch (err) {
            console.log('Server error ', err);
            return next(err);
        }
    });

    route.put('/', async (req, res, next) => {
        try {
            const result = await (new MapMarkerService()).updateMarker({ id: req.params.id, marker: req.body });
            return res.json(result).status(200);
        } catch (err) {
            console.log('Server error ', err);
            return next(err);
        }
    });

    route.delete('/', async (req, res, next) => {
        try {
            const result = await (new MapMarkerService()).removeMarker({ id: req.params.id });
            return res.json(result).status(200);
        } catch (err) {
            console.log('Server error ', err);
            return next(err);
        }
    });
};