const API_key = '5591a5a8795a5c801d0c56f639f2fd4d';
const API_base = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_base}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_key}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?api_key=${API_key}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?api_key=${API_key}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_key}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_key}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_key}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_key}`)
            },
            {
                slug: 'documentaries',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_key}`)
            }
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?api_key=${API_key}`);
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?api_key=${API_key}`);
                    break;
                default:
                    info = null;
                    break;
            }
        }

        return info;
    }
}