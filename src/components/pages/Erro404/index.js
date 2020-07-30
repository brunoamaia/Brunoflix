import React from 'react'
import PageDefault from '../../PageDefault'

import ImgError from '../../../assests/img/pokerface.png'
import { Link } from 'react-router-dom'

function Error404 () {
    return(
        <PageDefault>
            <h1>A página solicitada não foi encontrada!</h1>
            <Link to='/'> VOLTE PARA A HOME </Link>
            <br></br> <br></br>

            <img style={{textAlign: "center", maxWidth: '90%'}} src={ImgError} alt=""/>
        </PageDefault>
    )
}

export default Error404