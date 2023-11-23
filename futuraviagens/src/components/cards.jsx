"use client"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import { useState } from 'react';

export default function Card({viagem}){

    const poster = "https://image.tmdb.org/t/p/w500/" + viagem.poster_path 
    const [favorito, setFavorito] = useState(false)


    function favoritar(){
        setFavorito(true)
    }
    function  desfavoritar(){
        setFavorito(false)
    }
    return(
        <div className="flex flex-col items-center w-48 relative">
            {
                favorito ? 
                <FavoriteIcon  onClick={desfavoritar} className='text-red-700 cursor-pointer absolute top-2 right-2' />: 
                <FavoriteBorderIcon onClick={favoritar} className='absolute cursor-pointer top-2 right-2' />

            }
            <img className="rounded" src="https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2021/09/como-chegar-em-porto-de-galinhas-1024x546.png" alt="" />
                <span className="text-lg font-bold line-clamp-1">{viagem.title}</span>
                
                <div>
                    <i></i>
                    <span>{viagem.vote.average.toFixed(1)}</span>
                </div>
                <a href="" className="bg-amber-400 text-black w-full rounded py-1">detalhes</a>
                
        </div>


    )
}