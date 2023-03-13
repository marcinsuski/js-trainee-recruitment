import { useEffect, useRef, useState } from "react";

const useOnScreen = (options) => {
    const [visible, setVisible] = useState(false);

    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        // return () => {
        //     if (ref.current) {
        //         observer.unobserve(ref.current);
        //     }
        // };
    }, [ref, options]);

    return [ref, visible];
};

export default useOnScreen;
