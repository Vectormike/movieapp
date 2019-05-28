import React, { Component } from 'react';
import '../styles/Searched.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
class Searched extends Component {
    
    render() {
        return (
            <div>
                <div className="fr ma4 wrapper">
                    <input
                        id="search"
                        type="search"
                        placeholder="Search movie..."
                    />
                    <FontAwesomeIcon icon={faSearch} size="1x" />
                
                </div>
            </div>
        )
    }
}

export default Searched;