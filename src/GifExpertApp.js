
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    const [categorias, setCategorias] = useState(['Tortas']);


  return (
    <>
        <h1> Gif Expert App</h1>
        <AddCategory setCategorias={ setCategorias }  />
        <hr />

        <ol>
            {
              categorias.map( category =>
                  <GifGrid 
                    key={ category}
                    category={ category }
                  />
              )
            }
        </ol>

    </>

  )
};
