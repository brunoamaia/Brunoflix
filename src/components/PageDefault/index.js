// a PageDefault é um template (modelo) que será utilizado várias vezes
import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer'


import styled from 'styled-components'

const Main = styled.main`
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`


// Forma de pegar os componentes "abrindo os elementos"
function PageDefault( {children} ) {
    return (
        <>
            <Menu />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

export default PageDefault