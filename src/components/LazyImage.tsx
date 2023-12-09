import { Suspense, useState } from "react";
import { LazyImageProps } from "../Props";

const LazyImage = ({ className, src, alt }: LazyImageProps) => {
    const [path, setPath] = useState('/');

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <img
                className={className}
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setPath(path)}
            />
        </Suspense>
    );
};

export default LazyImage;