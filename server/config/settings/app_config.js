import { name, version } from "../../package.json";

/**
 * App Config
 * @property {string} name - api name
 * @property {string} version - api version
 * @property {string} environment - api environment 
 */

 export default {
     name,
     version,
     environment: process.env.NODE_ENV
 }