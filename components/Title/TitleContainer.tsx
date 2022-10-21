import React from 'react'
import styled from '@emotion/styled'



const TitleText = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`
const Description = styled.h1`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
`
export default function TitleContainer() {
  return (
    <>
    <TitleText>
        Bem vindo ao projeto em grupo!
    </TitleText>

     <Description>
         Agora analisem o arquivo index.tsx na pasta pages
     </Description> 
  </>
  )
} 