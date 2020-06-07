import React, { Component } from 'react';
import axios from 'axios';
import { URL , elementPositionHandler } from '../../helpers';
import './layout.css';

//COMPONENTS
import Header from '../../components/Header/header';
import LangMenu from '../LangMenu/langMenu';
import LightSwitch from '../../components/widgets/LightSwitch/lightSwitch';
import { MenuMobile } from '../../components/Header/Menu/menu';
import Misc from '../../components/misc/misc';
import ContentPanelWrapper from '../Content-panel/contentPanelWrapper';
import Weather from '../../components/Weather/weather';
import UnitConv from '../../components/UnitConverter/unitConverter';

class Layout extends Component {

    state = {
        data: {
            author: { name: '', surname: '' },
            background: '',
            colors: {
                light: '',
                dark: ''
            },
            flag: {
                icon: '',
                label: ''
            },
            misc: {
                weather: '',
                unit: ''
            },
            header: {
                image: '',
                menu: [{}, {}, {}, {}, {}]
            },
            content: {
                web: "",
                graphics: "",
                about: "",
                contact: []
            }
        },
        isDarkMode: false,
        lang: [],
        contentIcons:{
            web:[],
            graphics:[]
        },
        weather:{
            temp:'',
            icon:'',
            city:'',
            change:false
        }

    }

    componentDidMount() {
        axios.get(`${URL}/${this.props.match.params.id}`)
            .then((response) => {
                this.setState({
                    data: response.data
                })
            })
        axios.get(`${URL}/lang`)
            .then((response) => {
                let arr = []
                for (const prop in response.data) {
                    arr.push(response.data[prop])
                }
                this.setState({
                    lang: arr
                })
            })
            axios.get(`${URL}/contentIcons`)
            .then((response)=>{
                this.setState({
                    contentIcons:response.data
                })
            })
            const urlGeo = `http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=e5a46efb7eb8c41236961878afa2d0f9`;
            axios.get(urlGeo).then((response)=>{
                let data = JSON.parse(response.request.response)
                this.setState({
                    weather:{
                       temp :Math.floor(data.main.temp),
                icon:data.weather[0].icon,
                city:data.name
                    }
                })
            })
            window.addEventListener('scroll',elementPositionHandler)
    }

    loadDB = (id) => {
        axios.get(`${URL}/${id}`)
            .then((response) => {
                this.setState({
                    data: response.data
                })
            })
        this.props.match.params.id = id;
    }

    weatherHandler=(city)=>{
        city = city.toLowerCase().split('.')
        const urlGeo = `http://api.openweathermap.org/data/2.5/weather?q=${city[0]}&units=metric&APPID=e5a46efb7eb8c41236961878afa2d0f9`;
        axios.get(urlGeo).then((response)=>{
            let data = JSON.parse(response.request.response)
            this.setState({
                weather:{
                    temp:Math.floor(data.main.temp),
                    icon:data.weather[0].icon,
                    city:data.name,
                    change:true
                }
            })
        }).catch((e)=>{

            let oldState={...this.state.weather}
            this.setState({
                weather:{
                    ...oldState,
                    change:false
                }
            })
        })
    }

    toggleColorMode = () => {
        let lightMode = {
            light: this.state.data.colors.light,
            dark: this.state.data.colors.dark,
            background: 'rgba(255,255, 255, 0.5)',
            icon: 'moon-light.png'
        }

        let darkMode = {
            light: 'white',
            dark: 'black',
            background: 'rgba(0, 0, 0, 0.5)',
            icon: 'sun-light.png'
        }

        let colorMode = this.state.isDarkMode ? darkMode : lightMode;
        return colorMode
    }

    switchColorMode = () => {
        this.setState({
            isDarkMode: !this.state.isDarkMode
        })
    }

    render() {

        
        return (
            <div className="master" style={{ background: `url("images/photos/${this.state.data.background}")` }}>
                <div className="master" style={{ background: this.toggleColorMode().background }}>
                    <Header colorMode={this.toggleColorMode} data={this.state.data} loadDB={this.loadDB} />
                    <LightSwitch colorMode={this.toggleColorMode} switchColorMode={this.switchColorMode} />
                    <LangMenu colorMode={this.toggleColorMode} data={this.state.lang} loadDB={this.loadDB} />
                    <MenuMobile colorMode={this.toggleColorMode} data={this.state.data} />
                    <Misc colorMode={this.toggleColorMode} data={this.state.data} handler={this.weatherHandler}/>
                    <ContentPanelWrapper colorMode={this.toggleColorMode} data={this.state.data} contentIcons={this.state.contentIcons}loadDB={this.loadDB} />
                    <Weather colorMode={this.toggleColorMode} data={this.state.weather} currentCity={this.state.data.background} handler={this.weatherHandler}/>
                    <UnitConv/>
                </div>
            </div>
        )
    }
}

export default Layout;