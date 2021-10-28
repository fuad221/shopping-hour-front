import React, { createContext} from 'react'

const Card = createContext()

const Context = ({childern}) => {
    return (
        <Card.Provider>
            {childern}
        </Card.Provider>
    )
}

export default Context
