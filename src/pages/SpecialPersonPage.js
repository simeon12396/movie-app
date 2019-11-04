import React, {useState} from 'react';
import HeaderComp from '../components/HeaderComp.js';
import '../scss/pages/SpecialPerson.scss';
import {useFetchSpecialPerson} from '../helpers/requests.js';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';

const SpecialPersonPage = (props) => {
    const apiKey = 'ce30a4e46c4adcde72216d273f3f7ba0';
    const personId = props.match.params.id;
    const imageUrlApi = 'http://image.tmdb.org/t/p/original';
    const fetchPersonInformation = useFetchSpecialPerson(`https://api.themoviedb.org/3/person/${personId}?api_key=${apiKey}&language=en-US`);
    const fetchPersonImages = useFetchSpecialPerson(`https://api.themoviedb.org/3/person/${personId}/images?api_key=${apiKey}`);
    const [currentPage, setCurrentPage] = useState(1);

    if(fetchPersonInformation && fetchPersonImages) {

        const photosPerPage = 8;
        const indexOfLastPhoto = currentPage * photosPerPage;
        const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
        const currentPhotos = fetchPersonImages.profiles.slice(indexOfFirstPhoto, indexOfLastPhoto);
        const arrOfPages = [];

        const eachPhoto = currentPhotos.map((photo, index) => {
            return(
                <img src={`${imageUrlApi}${photo.file_path}`} key={index} />
            );
        });

        for(let i = 1; i <= Math.round(fetchPersonImages.profiles.length / photosPerPage); i++) {
            arrOfPages.push(i);
        };
        
        const loopThroughPages = arrOfPages.map((page, index) => {
            return(
                <PageItem key={index} onClick={() => {setCurrentPage(page)}}>{page}</PageItem>
            );
        });

        const knownAs = fetchPersonInformation.also_known_as.map((nickname, index) => {
            return(
                <span key={index} className="person-nickname">{nickname}</span>
            );
        });
    
        const genderType = () => (fetchPersonInformation.gender === 2) ? (<span>Male</span>) : (<span>Female</span>);

        const hasDeathDay = () => (fetchPersonInformation.deathday === null) ? (<span>-</span>) : (<span>{fetchPersonInformation.deathday}</span>);
        
        return(
            <div className="special-person-page">
                <HeaderComp/>
                <main>
                    <div className="person container">
                        <div className="person-left-side">
                            <img src={`${imageUrlApi}${fetchPersonInformation.profile_path}`} className="person-img" />

                            <h3>Personal Info</h3>

                            <div className="person-box">
                                <h5>Known for</h5>
                                <span>{fetchPersonInformation.known_for_department}</span>
                            </div>

                            <div className="person-box">
                                <h5>Gender</h5>
                               {genderType()}
                            </div>

                            <div className="person-box">
                                <h5>Also known as</h5>
                                <div className="person-nicknames-flex">
                                 {knownAs}
                                </div>
                            </div>

                            <div className="box">
                                <h5>Birthday</h5>
                                <span>{fetchPersonInformation.birthday}</span>
                            </div>

                            <div className="box">
                                <h5>Death day</h5>
                                {hasDeathDay()}
                            </div>

                            <div className="box">
                                <h5>Place of birthday</h5>
                                <span>{fetchPersonInformation.place_of_birth}</span>
                            </div>
                        </div>
                        <div className="person-right-side">
                            <h3>{fetchPersonInformation.name}</h3>
                            <p>{fetchPersonInformation.biography}</p>

                            <div className="person-photos">
                                <h3>Photos</h3>

                                <div className="person-photos-flex">
                                    {eachPhoto}
                                </div>
                            </div>

                            <div className="person-pagination mt-2">
                                <Pagination className="flex justify-content-center">
                                    {loopThroughPages}
                                </Pagination>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    } else {
        return null;
    };
};

export default SpecialPersonPage;