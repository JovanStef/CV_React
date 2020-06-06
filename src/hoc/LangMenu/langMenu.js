import React from 'react';
import {Link} from 'react-router-dom'
import './langMenu.css';
import Thumbnails from '../../components/widgets/Thumbnails/thumbnails';

const LangMenu =(props)=> {
    const colors = props.colorMode()
    const data = props.data 

    const createLangMenu=(arr)=>{
         return arr.map((item,i)=>{
            return(
                <Link key={i} onClick ={()=>props.loadDB(`${item.key}`)} to={`/${item.key}`}><Thumbnails colors={colors} data={item} imgType={'flags'} direction={'left'}/></Link>
            )
        })
    }
    
    return (
        <div className={"lang-menu-wrapper"}>
            {createLangMenu(data)}
        </div>
    )
}

export default LangMenu
