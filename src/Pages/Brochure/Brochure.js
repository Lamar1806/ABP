import React, { Component } from 'react'
import styles from './Brochure.css'

//images above ground pools
import centuryimg0 from '../Products/img/century/0.jpg' 

import sterlingimg0 from '../Products/img/sterling/0.jpg' 

import sterlingbayimg0 from '../Products/img/sterlingbay/0.jpg' 

import rivieraimg0 from '../Products/img/riviera/0.jpg' 

import westportimg0 from '../Products/img/westport/0.jpg'

//imgs for outdoor kitchen
import bullprebuiltoutdoorkitchens from './pdfs/OutDoorKitch/bull outdoor kitchen collection.PNG'
import bullgrillcover from './pdfs/OutDoorKitch/bull grill cover.PNG'
import bullgrillcomponants from './pdfs/OutDoorKitch/bull grill components.PNG'


//pdfs outgroundpools
import century from './pdfs/abovegroundpools/century.pdf'
import rivera from './pdfs/abovegroundpools/rivera.pdf'
import sterling from './pdfs/abovegroundpools/sterling.pdf'
import sterling_bay from './pdfs/abovegroundpools/sterling_bay.pdf'
import westport from './pdfs/abovegroundpools/westport.pdf'

//pdfs kitchen
import bullprebuiltoutdoorkitchensPdf from './pdfs/OutDoorKitch/bullprebuiltoutdoorkitchens.pdf'
import bullgrillcoverPdf from './pdfs/OutDoorKitch/1.pdf' 
import bullgrillcomponantsPdf from './pdfs/OutDoorKitch/0.pdf'


const brochureCard = (pdf,img, key) => {
  return (   
    <div key={key} className={styles.cardContainer}>
      <a href={pdf} download>
        <img className={styles.brochureCardImg} src={img} alt=""/>
      </a>
    </div>
  );
}

export default class Brochure extends Component {
    state={
      outgroundpools:[
        { 
          pdf: century,
          img: centuryimg0,
        },
        { 
          pdf: sterling,
          img: sterlingimg0,
        },
        { 
          pdf: sterling_bay,
          img: sterlingbayimg0,
        },
        { 
          pdf: rivera,
          img: rivieraimg0,
        },
        { 
          pdf: westport,
          img: westportimg0,
        },
      ],
      kitchen:[
        { 
          pdf: bullprebuiltoutdoorkitchensPdf,
          img: bullprebuiltoutdoorkitchens,
        },
        { 
          pdf: bullgrillcoverPdf,
          img: bullgrillcover,
        },
        { 
          pdf: bullgrillcomponantsPdf,
          img: bullgrillcomponants,
        },
      ],
    }

    renderOutGroundPools(){
      return this.state.outgroundpools.map((x,index)=>{
          return brochureCard(x.pdf, x.img, index);
      })
    }
    renderKitchen(){
      return this.state.kitchen.map((x,index)=>{
          return brochureCard(x.pdf, x.img, index);
      })
    }
    render() {
      window.scroll(0,0)
      return (
        <div className={styles.container}> 
          <h1 className={styles.marginBottom}>Brochures</h1>
          <h2 className={styles.marginBottom}>Out Ground Pools</h2>

          <div className={styles.innerContainer}>
            {this.renderOutGroundPools()}
          </div>

          <h2 className={styles.marginBottom}>Outdoor Kitchen</h2>
          <div className={styles.innerContainer}>
            {this.renderKitchen()}
          </div>

          
        </div> 
      )
    }
}
