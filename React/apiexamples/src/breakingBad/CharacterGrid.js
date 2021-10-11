import React from 'react'
import CharacterItem from './CharacterItem'


const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <p>Loading</p>
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  )
}

export default CharacterGrid