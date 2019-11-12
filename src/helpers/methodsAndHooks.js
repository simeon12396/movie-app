import {useEffect} from 'react';

export const sliceText = (currentOverview) => {
    const slicedOverview = currentOverview.slice(0, 200);

    const newOverview = `${slicedOverview}...`;

    return newOverview;
};

export const useScrollEffect = () => {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 0) {
                document.querySelector('.scroll-to-top').classList.add('active-scroll');
                document.querySelector('.header').classList.add('header-scroll');
                document.querySelector('main').classList.add('main-scroll');
            } else {
                document.querySelector('.scroll-to-top').classList.remove('active-scroll');
                document.querySelector('.header').classList.remove('header-scroll');
                document.querySelector('main').classList.remove('main-scroll');
            }
        });
    }, []);
};

export const handleScrollToTop = () => {
    window.scrollTo(0,0);
};