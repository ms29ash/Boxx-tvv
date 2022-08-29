import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';


export default function ScrollToTop() {
    const { pathname } = useLocation() || {};
    useEffect(() => {

        const scrollToTop = () => {
            document.getElementById('scroll').scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
        scrollToTop();
    }, [pathname]);

    return null;
}