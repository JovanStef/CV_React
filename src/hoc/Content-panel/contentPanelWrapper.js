import React from 'react';
import './contentPanel.css';
// import {Route , Switch , Redirect} from 'react-router-dom';
import ContentPanel from'./contentPanel';
import Badges from '../../components/widgets/Badges/badges'

const contact=(colors)=>{
    return (
        <div className="contact-wrapper" style={{color:colors.light}}>
            <a href="tel:+38977892059" ><Badges data={{icon:'phone.png' , name:'+38977892059'}} path={'Contact'} colors={colors}/></a>
            <a href="mailto:jov.box@outlook.com" ><Badges data={{icon:'mail.png' , name:'jov.box@outlook.com'}} path={'Contact'} colors={colors}/></a>
            <a href="https://github.com/JovanStef/" target="blank"><Badges data={{icon:'github.png' , name:'github.com/JovanStef'}} path={'Contact'} colors={colors}/></a>
            <a href="https://www.linkedin.com/in/jovan-stefanovski-7b16b8192/" target="blank"><Badges data={{icon:'linkedin.png' , name:'linkedin.com'}} path={'Contact'} colors={colors}/></a>
        </div>
    )
}
const about=(content)=>{
    return(
    <div>{content}<div className={"certificate"}><img alt="certificate" src="images/CA_CERTIFICATE.jpg"/></div></div>
    )
}

const ContentPanelWrapper = (props) => {
    const web = {type:props.contentIcons.web , path:'Web'}
    const graphics={type:props.contentIcons.graphic , path:'Graphics'}
    const content = props.data.content
    let colors=props.colorMode()
    let headers = props.data.header.menu
    return (
        <div className={"content-panel-wrapper"}>
            <ContentPanel colors={colors} headers={headers[0]} badges={web} content={content.web}></ContentPanel>
            <ContentPanel colors={colors} headers={headers[1]} badges={graphics} content={content.graphics}></ContentPanel>
            <ContentPanel colors={colors} headers={headers[2]} badges={'about'} content={about(content.about)}></ContentPanel>
            <ContentPanel colors={colors} headers={headers[3]} badges={'contact'} content={contact(colors)}></ContentPanel>
        </div>
    )
}

export default ContentPanelWrapper