import React from 'react';
import {  Paper } from '@material-ui/core'
import yout from '../api/yout.svg'
//import { display } from '@material-ui/system';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


class SearchBar extends React.Component {

    state = {
        SearchTerm: '',
    }
    handleChange = (event) => {
        console.log(event.target.value,'ok');

        this.setState({ searchTerm: event.target.value});
    }

    handleSubmit = (event) => {
        const { searchTerm }  = this.state;
        const { onFormSubmit }  = this.props;
        event.preventDefault();
        onFormSubmit(searchTerm); 
    }


    render() {
        return(
            <Paper elevation={2} style={{padding: '25px',display:'flex', justifyContent:'space-between', background:'black'}}>
               
                    <img src={yout} alt="youtube" style={{width:'40px', marginRight:'0px' }}/>

                    <form onSubmit={this.handleSubmit} onChange={this.handleChange} > 
                        <OutlinedInput className="place" id="outlined-adornment-weight" placeholder='Search ....' style={{fontWeight: '400',lineHeight: '15px',width: '60vw', height:'40px', boxSizing:'border-box', marginLeft:'0px', background:'rgba(255, 255, 255, .8', }}/>
                    </form>                

                     <AccountCircleIcon  style={{fontSize:'40px', color:'white' }}/>
     
            </Paper>
        )
    }
}

export default SearchBar;