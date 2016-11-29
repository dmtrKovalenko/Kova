import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import '../content/css/filters.css';
import Filter from '../types/Filter.jsx';

const styles = {
    floatingLabelStyle :  {color : '#fff', fontWeight: 300, top:'23.5px'},
    floatingLabelFocusStyle : {color : 'rgba(255, 255, 255, 1)', fontWeight: 'bold'},
    underlineFocusStyle :  { borderColor: 'rgba(255, 255, 255, 0.8)' },
    hintStyle : {color : 'rgba(255, 255, 255, 0.6)'},
    textFieldStyle : {height:'55px'},
    iconStyle : {marginTop:'3px', marginRight:'8px'},
    inputStyle : {marginTop: '3px', color: '#fff'}
}

class Filters extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isSearchBarCollapsed : false,
            wasOpenedFirstTime : false,
        }
    }

    showSearchBar(){
        if (!this.state.wasOpenedFirstTime){
            this.state.wasOpenedFirstTime = true;
        }

        this.setState({isSearchBarCollapsed : !this.state.isSearchBarCollapsed});
    }

    setQuery(event){
        if (event.key == 'Enter'){
            this.props.filter.query = event.currentTarget.value;
            this.props.applyFilters(this.props.filter);
        }
    }

    render() {
        let searchBarClassName = "search-bar animated ";
        let iconClassName = "search-icon animated ";

        if (this.state.wasOpenedFirstTime) {
            searchBarClassName += this.state.isSearchBarCollapsed ? "animated bounceInRight" : "animated bounceOutRight";
            iconClassName += this.state.isSearchBarCollapsed ? "animated searchInRight" : "animated searchOutRight";
        } else {
            searchBarClassName += "hidden";
        }

        return <AppBar className="app-bar"
                       title="Kova"
                       iconClassNameRight="muidocs-icon-navigation-expand-more"
                       zDepth = {2}
                       style = {{overflow:'hidden'}}
                       iconElementRight={
                            <div className={iconClassName}>
                                <IconButton onClick={this.showSearchBar.bind(this)}
                                            style={styles.iconStyle}>
                                    <SearchIcon color={'#fff'} tooltip="Search"/>
                                </IconButton>
                            </div>}>

                            <div className={searchBarClassName}>
                                <TextField 
                                    hintText="Start type song title here"
                                    floatingLabelText="Search"
                                    floatingLabelStyle={styles.floatingLabelStyle}
                                    floatingLabelFocusStyle = {styles.floatingLabelFocusStyle}
                                    underlineFocusStyle={styles.underlineFocusStyle}
                                    hintStyle={styles.hintStyle}
                                    style = {styles.textFieldStyle}
                                    inputStyle = {styles.inputStyle}
                                    onKeyPress = {this.setQuery.bind(this)}/>
                            </div>
               </AppBar>
    }
}

export default Filters;