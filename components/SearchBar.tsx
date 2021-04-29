import React, { useState } from 'react'

const SearchBar = ({ onCitySearch }) => {
    const [city, setCity] = useState('')

    const onSearchSubmit = city => {
        onCitySearch(city);
        setCity('');
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl mb-3">Daytech Weather App</h1>
            <form onSubmit={ e => e.preventDefault() } className="flex">
                <input 
                    className="w-1/2 border border-gray-300 rounded-md"
                    type="text"
                    value={city}
                    onChange={ e => setCity(e.target.value) }
                />
                <button 
                    className="ml-2 py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    type="button"
                    onClick={ () => onSearchSubmit(city) }
                >
                    ค้นหา
                </button>
            </form>
        </div>
    );
}

export default SearchBar