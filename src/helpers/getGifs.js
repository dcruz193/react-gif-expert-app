export const getGifs =  async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=sl0VLkAx96zHJZizQY4YfJWIArSoaUU5&q=${category}&limit=10`;
    console.log(url);
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    console.log(gifs);
    return gifs;
}
