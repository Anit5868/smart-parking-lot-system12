import axios from "axios";

const API = "https://smart-parking-lot-system-suby.onrender.com/api/slots";

export const addSlot = (data) => axios.post(`${API}/add`, data);
export const getSlots = () => axios.get(API);
export const parkVehicle = (data) => axios.post(`${API}/park`, data);
export const removeVehicle = (data) => axios.post(`${API}/remove`, data);
