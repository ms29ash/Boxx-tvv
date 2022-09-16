import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';


export default function ScrollToTop() {
    const { pathname } = useLocation() || {};
    useEffect(() => {

        const scrollToTop = () => {
            const scroll = document.getElementById('scroll')
            if (scroll) {

                scroll.scrollTo({
                    top: 0,
                    behavior: "auto"
                });
            };
        }
        scrollToTop();
    }, [pathname]);

    return null;
}