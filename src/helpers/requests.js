import {useState, useEffect} from 'react';

export const useFetchDataFromTheMovieAPI = (url) => {
    const [moviesData, setData] = useState('');

    const [error, setError] = useState('');

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(moviesData => setData(moviesData.results))
        .catch(error => setError(error))
    }, []);

    return (error === '') ?  moviesData : error;
};


