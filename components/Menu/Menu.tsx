import React from 'react'
import styled from '@emotion/styled'

const Grid = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;

` 

const Card = styled.div` 
 
 
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;

`

export default function Menu() {
  return (
    
    <Grid>
          <Card >
            <h2>Achei o erro!</h2>
            <p>Encontre o erro  &rarr;</p>
          Existe um erro neste arquivo. Veja que este bloco aparece diferente na tela.
          </Card>



          <Card>
            <h2>Crie um repositório </h2>
            <p>Após concluir o trabalho suba o código no github do grupo</p>
          </Card>

          <Card>
            <h2>Evite componentes demais &rarr;</h2>
            <p>Crie somente componentes essenciais.</p>
          </Card>

          <Card>
            <h2>Trabalho em grupo &rarr;</h2>
            <p>
              Ajude para que todos do grupo participe, envolva-se.
            </p>
         </Card> 
        </Grid>

  )
}
