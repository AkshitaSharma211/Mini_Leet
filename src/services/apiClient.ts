// Centralized API configuration.
// All API calls should use BASE_URL instead of hardcoding URLs directly,
// so the backend location only needs to change in one place (.env).

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export default BASE_URL;
