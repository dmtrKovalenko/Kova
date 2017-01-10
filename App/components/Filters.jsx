import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import '../content/css/filters.css';
import Filter from '../types/Filter.jsx';
import Immutable from 'Immutable';
import defaultSDK from '../soundCloudSDK.jsx';

let SDK = new defaultSDK();

const styles = {
    floatingLabelStyle :  {color : '#fff', fontWeight: 300, top:'23.5px'},
    floatingLabelFocusStyle : {color : '#fff', fontWeight: 'bold'},
    underlineFocusStyle :  { borderColor: 'rgba(255, 255, 255, 0.8)' },
    hintStyle : {color : 'rgba(255, 255, 255, 0.6)'},
    style : {height:'60px'},
    iconStyle : {marginTop:'3px', marginRight:'8px'},
    inputStyle : {marginTop: '3px', color: '#fff'}
}

class Filters extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isSearchBarCollapsed : false,
            wasOpenedFirstTime : false,
            dataSource: [],
        }
    }

    showSearchBar(){
        if (!this.state.wasOpenedFirstTime){
            this.state.wasOpenedFirstTime = true;
        }

        if(!this.state.isSearchBarCollapsed){
            setTimeout(() => this.searchInput.focus(), 200) 
        }

        this.setState({isSearchBarCollapsed : !this.state.isSearchBarCollapsed});
    }

    handleUpdateInput(value){
        SDK.searchTracks(new Filter(value, 10), 
            (tracks) => this.setState({dataSource : tracks.map((tr) => tr.title)}).bind(this));
    };

    setQuery(value){
        this.props.applyFilters(new Filter(value));
        this.searchInput.blur();
    }

    render() {
        let appbarClassName;

        if (this.state.wasOpenedFirstTime) {
            appbarClassName = this.state.isSearchBarCollapsed ? "app-bar active-search" : "app-bar";
        }

        return <AppBar className={appbarClassName}
                       title="Kova"
                       iconClassNameRight="muidocs-icon-navigation-expand-more"
                       zDepth = {2}
                       style = {{overflow:'hidden', position: 'fixed'}}
                       iconElementRight= {
                            <div className="search-icon">
                                <IconButton onClick={this.showSearchBar.bind(this)}
                                            style={styles.iconStyle}>
                                    <SearchIcon color={'#fff'} tooltip="Search"/>
                                </IconButton>
                            </div>}>

                        <div className="search-bar">
                            <AutoComplete
                                hintText="Start typing song title here"
                                dataSource={this.state.dataSource}
                                ref={(ref) => {this.searchInput = ref}} 
                                floatingLabelText="Search"
                                floatingLabelStyle={styles.floatingLabelStyle}
                                floatingLabelFocusStyle = {styles.floatingLabelFocusStyle}
                                underlineFocusStyle={styles.underlineFocusStyle}
                                hintStyle={styles.hintStyle}
                                style = {styles.style}
                                textFieldStyle = {styles.style}
                                inputStyle = {styles.inputStyle}
                                fullWidth={true}
                                onUpdateInput={(value) => this.handleUpdateInput(value)}
                                onNewRequest ={(value) => this.setQuery(value)}/>
                        </div>
               </AppBar>
    }
}

export default Filters;