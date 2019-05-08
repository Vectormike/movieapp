import React, { useState } from 'react';
import {} from '../components/SearchBar/SearchBar';



function Search() {

    const [search, setSearch] = useState([]);

    async function searchMovie() {
        try {
            let data = await fetch();
            let searched = await data.json();
        } catch (error) {
            console.log(error);
        }
    }
}

export default Search;