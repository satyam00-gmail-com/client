import axios from 'axios';
import Iitems from '../Models/Iitems';



const baseUrl = process.env.REACT_APP_API_BASE_URL;

// function to get items from the backend
const getItems = async () => {
    const response = await axios.get<Iitems[]>( `${baseUrl}/items` );
    return response.data;
};

const postItem = async ( item : Omit<Iitems, 'id'> ) => {
    const response = await axios.post<Iitems>(
        `${baseUrl}/items`,
        item,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    return response.data;
};

export {
    getItems,
    postItem
};