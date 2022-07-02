import React from 'react'
import animateScroll from 'react-scroll/modules/mixins/animate-scroll'
import Anime from './Anime'

function AnimeList({animesGenre}) {
    const animeComponents = animesGenre.animes.map(anime => {
        return <Anime
                    key={anime.id}
                    anime={anime}
                    />
    })

    return (
        <>
          
            {animeComponents}
        
        
        </>
        
    )
};


export default AnimeList