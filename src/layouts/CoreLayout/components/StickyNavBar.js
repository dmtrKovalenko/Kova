import React from 'react'
import '../styles/StickyNavBar.scss'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import IconButton from 'material-ui/IconButton'
import LogoImg from '../../../assets/logo.png'
import SearchIcon from 'material-ui/svg-icons/action/search'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import Slogans from '../../../constants/MusicSlogans'

class StickyNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSmaller : false,
            isExpanded : false
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        if (window.scrollY > 70) {
            if (!this.state.isSmaller) {
                this.setState({
                    isSmaller : true 
                });
            }
        } else {
            this.setState({
                isExpanded : false,
                isSmaller : false,
            });
        }
    }

    showChildren() {
        if (this.state.isSmaller) {
            this.setState({isExpanded : !this.state.isExpanded});
        }
    }

    getHeaderClassList() { 
       const classList = [];

       if (this.state.isExpanded) {
           classList.push('expanded');
       }

       if (this.state.isSmaller) { 
           classList.push('smaller');
       }

       return classList.join(' ');
    }

    getRandomSlogan() {
        var index = Math.floor(Math.random() * (Slogans.length + 1));

        return Slogans[index];
    }
    
    render() {
        const headerClass = this.getHeaderClassList();
        const slogan = this.getRandomSlogan();

        return (
            <header className={headerClass}>
                <div>
                    <div className="top-bar">
                        <IconButton className="navigation-button">
                            <MenuIcon color={'#fff'}/>
                        </IconButton>

                        <IconButton className="search-button"
                                    onClick={this.showChildren.bind(this)}>
                             {
                                 this.state.isExpanded 
                                    ? (<CloseIcon color="fff"/>)
                                    : (<SearchIcon color={'#fff'}/>)
                             }
                       
                        </IconButton>
                    </div>

                    <img className="logo-img" src={LogoImg} />

                    <div className="logo-container">
                        <h1 className="logo">
                            Kova
                        </h1>
                        <h3 className="subheader">
                            {slogan}
                        </h3>
                    </div>

                    <div className="children">
                        {this.props.children}
                    </div>
                </div>
            </header>)
    }
}

export default StickyNavBar;