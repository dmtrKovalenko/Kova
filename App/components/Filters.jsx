import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

const styles = {
    floatingLabelStyle :  {color : '#fff', fontWeight: 300, top:'23.5px'},
    floatingLabelFocusStyle : {color : 'rgba(255, 255, 255, 1)', fontWeight: 'bold'},
    underlineFocusStyle :  { borderColor: 'rgba(255, 255, 255, 0.8)' },
    hintStyle : {color : 'rgba(255, 255, 255, 0.6)'},
    textFieldStyle : {height:'55px'}
}

class Filters extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return <AppBar title="Kova"
                       iconClassNameRight="muidocs-icon-navigation-expand-more">
                    <TextField hintText="Start type song title here"
                               floatingLabelText="Search"
                               floatingLabelStyle={styles.floatingLabelStyle}
                               floatingLabelFocusStyle = {styles.floatingLabelFocusStyle}
                               underlineFocusStyle={styles.underlineFocusStyle}
                               hintStyle={styles.hintStyle}
                               style = {styles.textFieldStyle}/>
               </AppBar>
    }
}

export default Filters;