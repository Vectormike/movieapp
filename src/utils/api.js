import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '779cb993a7038477d49a9deabe16ed77' 
    },
});
