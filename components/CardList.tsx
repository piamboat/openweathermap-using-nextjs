import React from 'react'
import CardItem from './CardItem'
import CardNone from './CardNone'

const CardList = ({ cards, onClearSubmit }) => {
    let listOfCards = <CardNone /> 
    if (cards.length > 0) {
        listOfCards = cards.map( card => {
            return <CardItem key={card.id} card={card} />
        })
    }

    return (
        <div>
            <div className="flex justify-between ml-6 mr-6">
                <div>
                    Recent Search: {cards.length}
                </div>
                <button 
                        className="ml-2 py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        type="button"
                        onClick={ () => onClearSubmit() }
                    >
                    Clear
                </button>            
            </div>
            {listOfCards}
        </div>
    );
}

export default CardList