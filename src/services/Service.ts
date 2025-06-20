import axios from 'axios';
import IThought from '../interfaces/IThought';

const Service = (
    () => {

        const url = 'http://localhost:5115/Thought'

        // Get
        const getAllThoughts = async () => {
            const response = await axios.get(url);
            return response;
        }

        const getThoughtById = async (id: number) => {
            const response = await axios.get(`${url}/${id}`);
            return response;
        }

        const getThoughtByText = async (thought: string) => {
            const response = await axios.get(`${url}/GetByThought/${thought}`);
            return response;
        }

        // Post
        const addThought = async (newThought: IThought) => {
            console.log({newThought})
            const response = await axios.post(url, newThought);
            console.log(response);
        }

        // Update
        const updateThought = async (updateThought: IThought) => {
            const response = await axios.put(url, updateThought);
            console.log(response);
        }

        // Delete
        const deleteThought = async (id: number) => {
            const response = await axios.delete(`${url}/${id}`);
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

