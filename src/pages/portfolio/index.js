import React from 'react'
import {Title} from '../../components/';
import {Grid,Row,Column} from 'carbon-components-react';
import './style.css';
export default function Portfolio() {
  return (
    <div className='portfolio'>
      <Grid>
        <Row>
          <Column>
            <Title />
          </Column>
        </Row>
      </Grid>
    </div>
  )
}
