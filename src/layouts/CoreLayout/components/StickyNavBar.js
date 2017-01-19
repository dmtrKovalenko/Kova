import React from 'react'
import '../styles/StickyNavBar.scss'
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import LogoImg from '../../../assets/logo.png';

class StickyNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            wasExpanded:false
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        if (window.scrollY > 30) {
            if(!this.state.wasExpanded) {
                this.headerRef.classList.add('smaller');
                this.setState({wasExpanded:true})
            }
        } else {
            this.headerRef.classList.remove('smaller');
            this.setState({wasExpanded:false})
        }
    }

    render() {
        return (
            <header ref={ref => this.headerRef = ref}>
                <div>
                    <div className="left-navigation">
                        <IconButton className="navigation-button">
                            <MenuIcon color={'#fff'}/>
                        </IconButton>
                    </div>

                    <img className="logo-img" src={LogoImg} />

                    <div className="logo-container">
                        <h1 className="logo">
                            Kova
                        </h1>
                        <h3 className="subheader">
                            Let good music flow into your heart and enrich your soul.
                        </h3>
                    </div>
                </div>
            </header>)
    }
}

export default StickyNavBar;