import app from "Root/app.json";

export const BASE_URL = app.url;
export const MAP_API_KEY = app.map_api_key;
export const DEFAULT_MAP_CENTER_POINT = app.default_map_center_point;

export default {
  BASE_URL,
  MAP_API_KEY,
  DEFAULT_MAP_CENTER_POINT
}