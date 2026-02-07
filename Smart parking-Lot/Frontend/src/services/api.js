import axios from "axios";

const API = "http://localhost:5000/api/slots";

export const addSlot = (data) => axios.post(`${API}/add`, data);
export const getSlots = () => axios.get(API);
export const parkVehicle = (data) => axios.post(`${API}/park`, data);
export const removeVehicle = (data) => axios.post(`${API}/remove`, data);
