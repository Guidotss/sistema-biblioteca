import { useFetch } from '../../hooks/useFetch'

export const BookById = (id) => {
    const { data } =  useFetch();
    if(data===undefined)return; 

    const book = data.find(item => item._id == id);
    return book;
}