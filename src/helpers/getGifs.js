export const geGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Tl5lEo448R9uRVreW5mhBeQ8dIfZF5Ok&q=${category}&limit=5`;
    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }));
    // console.log({ gifs });
    return gifs;
}