import React from 'react'
import { ItemListContainer } from '../components/ItemListContainer'
import { ItemCount } from '../components/ItemCount'
export const Catalogo = () => {
    return (
        <div>
            <ItemListContainer>
                <ItemCount/>
            </ItemListContainer>
        </div>
    )
}
