// src/axiosConfig.js
let baseUrl;

if(import.meta.env.VITE_NODE_ENV==="production"){
    baseUrl="deployed-url";
    //socketUrl="wss;//deployedurl"
}else{
    baseUrl="http://localhost:4000";
    //socketUrl="ws://localhost:4000";
}

export {baseUrl};
