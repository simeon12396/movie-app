import {useState, useEffect} from 'react';

export const useFetchDataFromTheMovieAPI = (url) => {
    const [moviesData, setData] = useState('');

    const [moviesError, setMoviesError] = useState('');

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data.results))
        .catch(error => setMoviesError(error));

    }, []);

    return (moviesError === '') ?  moviesData : moviesError;
};

export const useFetchPrimaryDataAboutMovie = (url) => {
    const [primaryData, setPrimaryData] = useState('');

    const [primaryError, setPrimaryError] = useState('');

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setPrimaryData(data))
        .catch(error => setPrimaryError(error));
    }, []);

    return (primaryError === '') ? primaryData : primaryError;
};

export const useFetchCastAndCrewAboutMovie = (url) => {
    const [staff, setStaff] = useState('');

    const [staffError, setStaffError] = useState('');

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setStaff(data))
        .catch(error => setStaffError(error));
    }, []);

    return (staffError === '') ? staff : staffError;
};

export const useFetchKeywordsAboutMovie = (url) => {
    const [keywords, setKeywords] = useState('');
    
    const [keywordsError, setKeywordsError] = useState('');

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setKeywords(data))
        .catch(error => setKeywordsError(error));
    }, []);

    return (keywordsError === '') ? keywords : keywordsError;
};
