import React from 'react';
import Noticia from './Noticia';

const ListaNoticias = ({noticias}) => {
    return (
        <div className="row">
            {noticias.map(noticia => (
                <Noticia 
                noticia={noticia}
                key={noticia.url}></Noticia>
            ))}
        </div>
    )
}
export default ListaNoticias;