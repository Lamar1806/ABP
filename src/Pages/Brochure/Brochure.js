import React, { Component } from 'react'

import century from './pdfs/abovegroundpools/century.pdf'

export default class Brochure extends Component {
  render() {
    
    return (
      <div style={{height: '100vh'}} >
        <embed src={century} width="100%" height="100%" 
        type="application/pdf"></embed>
      </div> 
    )
  }
}
