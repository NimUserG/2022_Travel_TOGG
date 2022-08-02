import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth:width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.AbortController('resize', handleResize);
        return() => window.AbortController('resize',handleResize);
    },[]);

    return windowDimensions;
}

