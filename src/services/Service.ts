import axios from 'axios';
import IThought from '../interfaces/IThought';

const isLocalHost = window.location.hostname === 'localhost';

const BASE_URL = isLocalHost
    ? 'http://localhost:5115/Thought'
    : 'https://dream-backend-5c32.onrender.com';

const Service = (
    () => {

        // Get
        const getAllThoughts = async () => {
            const response = await axios.get(BASE_URL);
            return response;
        }

        const getThoughtById = async (id: number) => {
            const response = await axios.get(`${BASE_URL}/${id}`);
            return response;
        }

        const getThoughtByText = async (thought: string) => {
            const response = await axios.get(`${BASE_URL}/GetByThought/${thought}`);
            return response;
        }

        // Post
        const addThought = async (newThought: IThought) => {
            console.log({newThought})
            const response = await axios.post(BASE_URL, newThought);
            console.log(response);
        }

        // Update
        const updateThought = async (updateThought: IThought) => {
            const response = await axios.put(BASE_URL, updateThought);
            console.log(response);
        }

        // Delete
        const deleteThought = async (id: number) => {
            const response = await axios.delete(`${BASE_URL}/${id}`);
            console.log(response);
        }

        return {
            getAllThoughts,
            getThoughtById,
            getThoughtByText,
            addThought,
            updateThought,
            deleteThought
        }

    }
)();

export default Service;