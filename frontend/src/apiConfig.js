// src/axiosConfig.js
let baseUrl;

if(import.meta.env.VITE_NODE_ENV==="production"){
    baseUrl="https://design-with-yash.onrender.com";
    //socketUrl="wss;//deployedurl"
}else{
    baseUrl="https://design-with-yash.onrender.com";
    //socketUrl="ws://localhost:4000";
}

export {baseUrl};
