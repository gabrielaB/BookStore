const CAROUSEL_BREAKPOINTS = {
    xxx: 10000,
    xxl: 1700,
    xl: 1300,
    l: 900,
    m: 769,
    s: 650
};

import {
    AUTHOR_TRANSTITION,
    CAROUSEL_TRANSITION
} from '../constants/constants';

export const RESPONSIVE_CAROUSEL_CONFIG = {
    xxx: {
        authors: {
            boxesOnSlide: 6,
            boxWidth: 150, //px
            carouselHeight: 100, //px
            transitionDuration: AUTHOR_TRANSTITION //ms
        },
        books: {
            boxesOnSlide: 4,
            boxWidth: 300, //px
            carouselHeight: 320, //px
            transitionDuration: CAROUSEL_TRANSITION //ms
        }
    },
    xxl: {
        authors: {
            boxesOnSlide: 5,
            boxWidth: 150, //px
            carouselHeight: 100, //px
            transitionDuration: AUTHOR_TRANSTITION //ms
        },
        books: {
            boxesOnSlide: 3,
            boxWidth: 300, //px
            carouselHeight: 320, //px
            transitionDuration: CAROUSEL_TRANSITION //ms
        }
    },
    xl: {
        authors: {
            boxesOnSlide: 4,
            boxWidth: 150, //px
            carouselHeight: 100, //px
            transitionDuration: AUTHOR_TRANSTITION //ms
        },
        books: {
            boxesOnSlide: 2,
            boxWidth: 300, //px
            carouselHeight: 320, //px
            transitionDuration: CAROUSEL_TRANSITION //ms
        }
    },
    l: {
        authors: {
            boxesOnSlide: 3,
            boxWidth: 150, //px
            carouselHeight: 100, //px
            transitionDuration: AUTHOR_TRANSTITION //ms
        },
        books: {
            boxesOnSlide: 1,
            boxWidth: 300, //px
            carouselHeight: 320, //px
            transitionDuration: CAROUSEL_TRANSITION //ms
        }
    },
    m: {
        books: {
            boxesOnSlide: 2,
            boxWidth: 300, //px
            carouselHeight: 320, //px
            transitionDuration: CAROUSEL_TRANSITION //ms
        }
    },
    s: {
        books: {
            boxesOnSlide: 1,
            boxWidth: 300, //px
            carouselHeight: 320, //px
            transitionDuration: CAROUSEL_TRANSITION //ms
        }
    }
};

export const getCarouselConfig = (width, type) => {
    const keys = Object.keys(CAROUSEL_BREAKPOINTS);
    let size;
    keys.forEach((key) => {
        if (CAROUSEL_BREAKPOINTS[key] > width) {
            size = key;
        }
    });
    return { ...RESPONSIVE_CAROUSEL_CONFIG[size][type] };
};