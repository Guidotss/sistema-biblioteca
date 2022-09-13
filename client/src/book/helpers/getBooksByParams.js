import { useFetch } from '../../hooks/index';

export const getBooksByTitle = (title='') => {
    const { data } = useFetch();
    if(data === undefined)return; 

    title = title.toLowerCase().trim();

    if(title === '')return [];

    return data.filter(item => item.title.toLowerCase().includes(title));

}