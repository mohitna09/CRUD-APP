import axios from 'axios';

const API_URL = 'http://localhost:3002/users'

export const addUser = async (data) => {
    try{
    return await axios.post(API_URL, data)
    } catch(error)
     {
        console.log('Error while calling addUser api', error.message);
    }
}

export const getUsers = async () => {
    try{
        return await axios.get(API_URL);
    } 
    catch (error)
    {
     console.log('Error while getting getUsers api', error.message);
    }
}

export const getUser = async (data) => {
    try{
        return await axios.get(`${API_URL}/${data}`);
    } 
    catch (error)
    {
     console.log('Error while getting getUser api', error.message);
    }
}

export const editUser = async (data, id) => {
    try{
        return await axios.put(`${API_URL}/${id}`, data);
    } 
    catch (error)
    {
     console.log('Error while getting getUser api', error.message);
    }
}

export const deleteUser = async (id) => {
    try{
        return await axios.delete(`${API_URL}/${id}`);
    } 
    catch (error)
    {
     console.log('Error while calling deleteUser api', error.message);
    }
}