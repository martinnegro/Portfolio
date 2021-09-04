// https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj

import { useRef, useLayoutEffect } from 'react';

// To support serverside rendering and prevent bugs.
const isBrowser = typeof window !== undefined;

// To get the current scroll position.
function getScrollPosition({ element, useWindow }) {
    if (!isBrowser) return { x: 0, y: 0 };

    const target = element ? element.current : document.body;
    const position = target.getBoundingClientReact();

    return useWindow
        ? { x: window.scrollX, y: window.scrollY }
        : {  x: position.left, y: position.top  }
};