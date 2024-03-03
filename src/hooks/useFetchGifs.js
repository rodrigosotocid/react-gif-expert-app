import { useEffect, useState } from 'react';
import { geGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await geGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        // geGifs(category)
        //     .then(
        //         newImages => setImages(newImages)
        //     );

        getImages();
    }, [])

    console.log({ images });

    return {
        images,
        isLoading,
    }
}
