import { useCallback, useEffect } from "react";

const useInfiniteScroll = (fn) => {
    const onScroll = useCallback(() => {
        const bodyHeight = document.body.offsetHeight;
        const diff = 300;
        const viewport = window.visualViewport;
        const scrollPosition = viewport.pageTop + viewport.height;
        if (bodyHeight - scrollPosition <= diff) {
            fn();
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });
};

export default useInfiniteScroll;
