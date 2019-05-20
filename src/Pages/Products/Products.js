import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';

import styles from './Products.css'
import Card from './Card.js'
import img from './img/img.png'
import century from './img/century.jpg'
import westport from './img/westport.jpg'
import sterling from './img/sterling.jpg'
import riviera from './img/riviera.jpg'

//century
import centuryimg0 from './img/century/0.jpg' 
import centuryimg1 from './img/century/1.jpg' 
import centuryimg2 from './img/century/2.jpg' 
import centuryimg3 from './img/century/3.jpg'

//sterling
import sterlingimg0 from './img/sterling/0.jpg' 
import sterlingimg2 from './img/sterling/1.jpg' 
import sterlingimg3 from './img/sterling/2.jpg' 
import sterlingimg4 from './img/sterling/3.jpg'

//sterlingbay
import sterlingbayimg0 from './img/sterlingbay/0.jpg' 

//riviera
import rivieraimg0 from './img/riviera/0.jpg' 

//westport
import westportimg0 from './img/westport/0.jpg'

//Pool Chemicals Object
import items from './poolchemicals'

//ingroundpools imgs
import ingroundpools0 from './img/ingroundpools/0.jpg'
import ingroundpools1 from './img/ingroundpools/1.jpg'
import ingroundpools2 from './img/ingroundpools/2.jpg'
import ingroundpools3 from './img/ingroundpools/3.jpg'
import ingroundpools4 from './img/ingroundpools/4.jpg'
import ingroundpools5 from './img/ingroundpools/5.jpg'
import ingroundpools6 from './img/ingroundpools/6.jpg'
import ingroundpools7 from './img/ingroundpools/7.jpg'
import ingroundpools8 from './img/ingroundpools/8.jpg'
import ingroundpools9 from './img/ingroundpools/9.jpg'

//FirePits
import FirePits0 from './img/FirePits/0.jpg'
import FirePits1 from './img/FirePits/1.jpg'
import FirePits2 from './img/FirePits/2.jpg'
import FirePits3 from './img/FirePits/3.jpg'
import FirePits4 from './img/FirePits/4.jpg'
import FirePits5 from './img/FirePits/5.jpg' //FirePit , Decks
import FirePits6 from './img/FirePits/6.jpg' 
import FirePits9 from './img/FirePits/8.jpg'
import FirePits10 from './img/FirePits/10.jpg'
import FirePits11 from './img/FirePits/11.jpg'
import FirePits12 from './img/FirePits/12.jpg'
import FirePits13 from './img/FirePits/13.jpg'
import FirePits14 from './img/FirePits/14.jpg'

//Decks
import Decks0 from './img/Decks/0.jpg'
import Decks1 from './img/Decks/1.jpg'
import Decks2 from './img/Decks/2.jpg'
import Decks3 from './img/Decks/3.jpg' 
import Decks4 from './img/Decks/4.jpg'
import Decks5 from './img/Decks/5.jpg'
import Decks6 from './img/Decks/6.jpg'
import Decks7 from './img/Decks/7.jpg'
import Decks8 from './img/Decks/8.jpg'
import Decks9 from './img/Decks/9.jpg'
import Decks10 from './img/Decks/10.jpg'
import Decks11 from './img/Decks/11.jpg'


//Concrete
import Concrete0 from './img/Concrete/0.jpg'
import Concrete1 from './img/Concrete/2.jpg'
import Concrete2 from './img/Concrete/2.jpg'
import Concrete3 from './img/Concrete/3.jpg'
import Concrete4 from './img/Concrete/4.jpg'
import Concrete5 from './img/Concrete/5.jpg'
import Concrete6 from './img/Concrete/6.jpg'
import Concrete7 from './img/Concrete/7.jpg'
import Concrete8 from './img/Concrete/8.jpg'
import Concrete9 from './img/Concrete/9.jpg'
import Concrete10 from './img/Concrete/10.jpg'
import Concrete11 from './img/Concrete/11.jpg'
import Concrete12 from './img/Concrete/12.jpg'
import Concrete13 from './img/Concrete/13.jpg'
import Concrete14 from './img/Concrete/14.jpg'

//Inground Pool Img Gallery
import AboveGroundPoolsGallery0 from './img/AboveGroundGallery/0.jpg'
import AboveGroundPoolsGallery1 from './img/AboveGroundGallery/1.jpg'
import AboveGroundPoolsGallery2 from './img/AboveGroundGallery/2.jpg'
import AboveGroundPoolsGallery3 from './img/AboveGroundGallery/3.jpg'
import AboveGroundPoolsGallery4 from './img/AboveGroundGallery/4.jpg'
import AboveGroundPoolsGallery5 from './img/AboveGroundGallery/5.jpg'
import AboveGroundPoolsGallery6 from './img/AboveGroundGallery/6.jpg'
import AboveGroundPoolsGallery7 from './img/AboveGroundGallery/7.jpg'
import AboveGroundPoolsGallery8 from './img/AboveGroundGallery/8.jpg'
import AboveGroundPoolsGallery9 from './img/AboveGroundGallery/9.jpg'
import AboveGroundPoolsGallery10 from './img/AboveGroundGallery/10.jpg'
import AboveGroundPoolsGallery11 from './img/AboveGroundGallery/11.jpg'
import AboveGroundPoolsGallery12 from './img/AboveGroundGallery/12.jpg'

import MyLink from '../../Layout/NavBar/Mobile/Modal/MyLink'
import Gallery from '../../Components/Gallery/Gallery.js'


export default class Products extends Component {
    constructor(props){
        super(props);
        
    }
    state={
        selectedCategory: this.props.location.pathname.split('/')[2],
        AboveGroundPoolsGallery:[
            AboveGroundPoolsGallery0,
            AboveGroundPoolsGallery1,
            AboveGroundPoolsGallery2,
            AboveGroundPoolsGallery3,
            AboveGroundPoolsGallery4,
            AboveGroundPoolsGallery5,
            AboveGroundPoolsGallery6,
            AboveGroundPoolsGallery7,
            AboveGroundPoolsGallery8,
            AboveGroundPoolsGallery9,
            AboveGroundPoolsGallery10,
            AboveGroundPoolsGallery11,
            AboveGroundPoolsGallery12,
        ],
        AboveGroundPools:
        [            
            {
                title:'Century',
                imgs: [centuryimg0,centuryimg1,centuryimg2,centuryimg3],
                options: [],
                description: `<p>
                <br/><br/>• <b>A vailable in an array of exciting sizes:</b> 
                <br/><br/>• <b>Round:</b> 12', 15', 18', 21', 24', 27', 30'
                <br/><br/>• <b>Oval:</b> 12' x 20', 12' x 24', 16' x 24', 16' x 28', 16' x 32',
                18' x 34', 21' x 41'
                <br/><br/>• <b>Rugged, baked enamel steel, 9" wrap-around top rails
                and verticals</b> in a creamy tan.
                <br/><br/> • <b>Sophisticated, taupe-colored resin top connectors.</b>
                <br/><br/> • 52", hot-dipped galvanized copper bearing steel wall
                in a soft elegant Century pattern.
                <br/><br/>• C ompac Supports on all Ovals.
                <br/><br/>• C orrugated pool wall for flexibility and vertical strength.
                <br/><br/>• Staggered bolt wall closure provides maximum strength
                and wall stability.
                <br/><br/>• L arge, pre-punched skimmer and eyeball return
                openings eliminate sharp edges that could cut the liner
                during installation.
                <br/><br/>• <b>20 Year Limited Warranty on all pool components.</b>
                The first two years of the pool product warranty, and
                the first three years of the liner warranty, are covered
                100% against manufacturer defects. Remainder of each
                warranty is prorated.
                </p>`
            },
            {
                title:'Westport',
                imgs:[westportimg0],
                options: [],
                description: `
                Quality Features
                <br/><br/><b>Available Sizes:</b>
                <br/><br/><b>Round:</b> 16', 18', 21', 24', 27', 30'
                <br/><br/><b>Oval:</b> 12' x 20', 12' x 24', 16' x 24', 16' x 28', 16' x 32',
                18' x 34', 21' x 41'
                <br/><br/>• Rugged 7" resin top rails and 7" resin verticals in a silvertone
                color.
                <br/><br/>• 52", hot-dipped galvanized copper bearing steel wall
                in a geometric pattern.
                <br/><br/>• Compac Supports on all ovals.
                <br/><br/>• Large, pre-punched skimmer and eyeball return
                openings eliminate sharp edges that could cut the
                liner during installation.
                <br/><br/>• Staggered bolt wall closure provides maximum strength
                and wall stability.
                <br/><br/>• Corrugated pool wall for flexibility and vertical strength.
                <br/><br/>• 20 Year Limited Warranty on all pool components.
                The first two years of the pool product warranty, and
                the first three years of the liner warranty, are covered
                100% against manufacturer defects. Remainder of
                each warranty is prorated.
                `
            },  
            {
                title:'Sterling',
                imgs: [sterlingimg0,sterlingimg2,sterlingimg3,sterlingimg4],
                options: [],
                description: `<p>
                <br/><br/>• <b>A vailable in an array of exciting sizes:</b> 
                <br/><br/>• <b>Round:</b> 12', 15', 18', 21', 24', 27', 30'
                <br/><br/>• <b>Oval:</b> 20' x 12', 24 x 12', 28' x 16', 32' x 16', 34' x 18',
                41' x 21'
                <br/><br/>• <b>Rugged, baked enamel steel, 9" wrap-around top rails
                and verticals</b> in a creamy tan.
                <br/><br/> • <b>Sophisticated, taupe-colored resin top connectors.</b>
                <br/><br/> • 52", hot-dipped galvanized copper bearing steel wall
                in a soft elegant Century pattern.
                <br/><br/>• C ompac Supports on all Ovals.
                <br/><br/>• C orrugated pool wall for flexibility and vertical strength.
                <br/><br/>• Staggered bolt wall closure provides maximum strength
                and wall stability.
                <br/><br/>• Large, pre-punched skimmer and eyeball return
                openings eliminate sharp edges that could cut the liner
                during installation.
                <br/><br/>• <b>20 Year Limited Warranty on all pool components.</b>
                The first two years of the pool product warranty, and
                the first three years of the liner warranty, are covered
                100% against manufacturer defects. Remainder of each
                warranty is prorated.
                </p>`
            },  
            {
                title:'Sterling Bay',
                imgs: [sterlingbayimg0],
                options: [],
                description: `
                • <b>Available in an array of exciting sizes:</b>
                <br/><br/>• <b>Round:</b> 12', 15', 18', 21', 24', 27', 30' 
                <br/><br/>• <b>Oval:</b> 12' x 20', 12' x 24', 16' x 28', 16' x 32', 18' x 34', 21' x 41'
                <br/><br/>• Beautifully Crafted Resin Top Rails. The 9" curved,
                extruded top-rail system with injectionmolded
                top connectors give a smooth finish to this
                captivatingly-beautiful pool.
                <br/><br/>• Rugged, baked enamel steel, 9" verticals in a
                silver tone.
                <br/><br/>• Sophisticated, silver-toned colored resin top
                connectors.
                <br/><br/>• 52", hot dipped galvanized copper bearing steel
                wall in a soft elegant Sterling Bay pattern.
                <br/><br/>• All oval pools come with space-saver side supports.
                <br/><br/>• Corrugated pool wall for flexibility and vertical strength.
                <br/><br/>• Staggered bolt wall closure provides maximum strength and wall stability.
                <br/><br/>• Large, prepunched skimmer and eyeball return
                openings eliminate sharp edges that could cut the liner during installation.
                <br/><br/>• 20 year limited warranty on all pool components. The first two years of the pool product warranty,
                and he first three years of the liner warranty, are covered 100% against manufacturer defects.
                Remainder of each warranty is prorated.
                `
            },  
            {
                title:'Riviera',
                imgs: [rivieraimg0],
                options: [],
                description: `
                • <b>A vailable in an array of exciting sizes:</b>
                <br/><br/>• <b>Round:</b> 16', 18', 24'
                <br/><br/>• Sturdy, silvertone-gray, baked enamel 4" top rails and
                durable 3" vertical supports ensure excellent durability
                and product longevity.
                <br/><br/>• 48", hot-dipped galvanized copper bearing steel wall
                in a beautiful Riviera pattern.
                <br/><br/>• Large, pre-punched skimmer and eyeball return
                openings eliminate sharp edges that could cut the liner
                during installation.
                <br/><br/>• Staggered bolt wall closure provides maximum strength
                and wall stability.
                <br/><br/>• Corrugated pool wall for flexibility and vertical strength.
                <br/><br/>• 20 Year Limited Warranty on all pool components.
                The first two years of the pool product warranty, and
                the first three years of the liner warranty, are covered
                100% against manufacturer defects. Remainder of each
                warranty is prorated.
                `
            },           
        ],
        InGroundPools:
        [
            {
                title:'In Ground Pools',
                imgs: [
                    ingroundpools6,
                    ingroundpools7,
                    ingroundpools0, 
                    ingroundpools1, 
                    ingroundpools2,
                    ingroundpools3,
                    ingroundpools4,
                    ingroundpools5,
                    ingroundpools8,
                    ingroundpools9,
                ],
                options: [],
                description: ''
            },
        ],
        FirePits:
        [
            {
                title:'Outdoor Kitchens / Firepits',
                imgs: [
                    FirePits0, 
                    FirePits1, 
                    FirePits2, 
                    FirePits3, 
                    FirePits4, 
                    FirePits5, 
                    FirePits6,
                    FirePits9,
                    FirePits10,
                    FirePits11,
                    FirePits12,
                    FirePits13,
                    FirePits14,
                ],
                options: [],
                description: ''
            },
        ],
        Decks:[
            {
                title:'Decks',
                imgs: [
                    Decks0, 
                    Decks1, 
                    Decks2, 
                    Decks3, 
                    Decks4, 
                    FirePits5, 
                    Decks5, 
                    Decks6,
                    Decks7,
                    Decks8,
                    Decks9,
                    Decks10,
                    Decks11,
                ],
                options: [],
                description: ''
            },
        ],
        Concrete:[
            { 
                title:'Concrete',
                imgs: [
                    // FirePits13,
                    Concrete0,
                    Concrete2,
                    Concrete3,
                    Concrete4,
                    Concrete5,
                    Concrete6 ,
                    Concrete7,
                    Concrete8,
                    Concrete9,
                    Concrete10,
                    Concrete12,
                    Concrete13,
                    Concrete14,
                ],
                options: [],
                description: ''
            },
        ],
        PoolChemicals: [...items]
    }

    componentDidMount(){
        let selectedCategory = this.props.location.pathname.split('/')[2];
           
    }

    renderOptions(){
        let productUrls=[
            'AboveGroundPools',
            'InGroundPools',
            'FirePits',
            'Decks',
            'Perola',
            'Concrete',
            'PoolChemicals',
        ]
        return productUrls.map((p, i)=>{
            let displayTxt = ''
            let index = 0;
            for(let char of p){
                if(index != 0 && char == char.toUpperCase()){
                    displayTxt += ' ' + char;
                }else{
                    displayTxt += char;
                }
                console.log(char);
                index ++;
            }
            return <option key={i} value={p}>{displayTxt}</option>
        })
    }

    renderCards(category){
        let array = [];

        switch (category){
            case 'AboveGroundPools':
                array = [...this.state.AboveGroundPools]
                break;
            case 'InGroundPools':
                array = [...this.state.InGroundPools]
                return <Redirect                              
                            to={
                                {
                                    pathname: `${this.props.location.pathname}/${array[0].title}`,
                                    state: {
                                        title: array[0].title,
                                        imgs: array[0].imgs, 
                                        options: array[0].options, 
                                        description: array[0].description
                                    }
                                }
                        }/>
                break;
            case 'FirePits':
                array = [...this.state.FirePits]
                return <Redirect                              
                            to={
                                {
                                    pathname: `${this.props.location.pathname}/${array[0].title}`,
                                    state: {
                                        title: array[0].title,
                                        imgs: array[0].imgs, 
                                        options: array[0].options, 
                                        description: array[0].description
                                    }
                                }
                        }/>
                break;
            case 'Decks':
                array = [...this.state.Decks]
                return <Redirect                              
                            to={
                                {
                                    pathname: `${this.props.location.pathname}/${array[0].title}`,
                                    state: {
                                        title: array[0].title,
                                        imgs: array[0].imgs, 
                                        options: array[0].options, 
                                        description: array[0].description
                                    }
                                }
                        }/>
                break;
            case 'Perola':
                array = [...this.state.Perola]
                return <Redirect                              
                            to={
                                {
                                    pathname: `${this.props.location.pathname}/${array[0].title}`,
                                    state: {
                                        title: array[0].title,
                                        imgs: array[0].imgs, 
                                        options: array[0].options, 
                                        description: array[0].description
                                    }
                                }
                        }/>
                break;
            case 'Concrete':
                array = [...this.state.Concrete]
                return <Redirect                              
                            to={
                                {
                                    pathname: `${this.props.location.pathname}/${array[0].title}`,
                                    state: {
                                        title: array[0].title,
                                        imgs: array[0].imgs, 
                                        options: array[0].options, 
                                        description: array[0].description
                                    }
                                }
                        }/>
                break;
            case 'PoolChemicals':
                array = [...this.state.PoolChemicals]
                break;
            default:
                console.log('Category not found')
                break;
        }

        if(category === 'InGroundPools'){
            console.log('return')
            
        }
        
        return array.map((e,index)=>{
            return (
                <Card
                key={index}
                title={e.title}
                img={e.imgs[0]}
                imgs={e.imgs}
                options={e.options}
                sizes={e.sizes}
                description={e.description}
                location = {this.props.location}
            /> 
            )
        })
    }
    renderIngroundPoolGallery(category, header){
        if(category === 'AboveGroundPools')
        return (
            <div className={styles.poolGallery}>
                <Gallery 
                    title={header + ' Gallery'} 
                    imgs={[...this.state.AboveGroundPoolsGallery]}
                />
            </div>
        )
    }

    render() {
        window.scroll(0,0)
        let category = this.props.location.pathname.split('/')[2]
        let header = '';
        let index = 0;
        for(let char of category){
            if(char == char.toUpperCase() && index != 0){
                header += ' ' + char
            }else{
                header += char
            }                
            index++;
        }
        return (        
            <div className={styles.container}>
                {/* <h2 className={styles.h2}>Product Category</h2> */}
                
                <h2 className={styles.h2}>{header}</h2>
 
                {/* <select onChange={this.categoryChange} value={this.state.selectedCategory}>
                    <option value=''>Select a Category</option>
                    {this.renderOptions()}
                </select> */}
                <div className={styles.innerContainer}>
                    {this.renderCards(category)}          
                </div>

                {this.renderIngroundPoolGallery(category, header)}
                

            </div>        
        )
    }
}
