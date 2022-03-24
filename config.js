require('dotenv').config();

exports.DB_SOURCE = process.env.DB_SOURCE || 'db.sqlite';
exports.BASE_URL = process.env.BASE_URL || 'http://localhost:3080';

exports.OPENWEATHER_API_URL = process.env.OPENWEATHER_API_URL;
exports.OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

exports.NINJA_API_URL = process.env.NINJA_API_URL;
exports.NINJA_API_KEY = process.env.NINJA_API_KEY;

exports.AQICN_API_URL = process.env.AQICN_API_URL;
exports.AQICN_API_KEY = process.env.AQICN_API_KEY;
