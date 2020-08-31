import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import '../../Style/style.css';
import PropType from "prop-type";
import { Container } from './Container';
import Form from './Form';



class Header extends Component {
    constructor(props) {
        super(props);

            this.state = {
                searchText: "",
            };
        }
       handleTextChange = (event) => {
            console.log(event.target.value);
                this.setState({
                    searchText : event.target.value,
                });
        } 
        search = (event) => {
            event.preventDefault();
            this.props.setSearchText(this.state.searchText);
          };

    render() {
        const triggerText = 'Login';
        const onSubmit = (event) => {
            event.preventDefault(event);
            console.log(event.target.name.value);
            console.log(event.target.email.value);
            };
        return (
            <div className="main-header">
                <div className="header clearfix">
                    <div className="navbar clearfix">
                        <div className="header_title ">
                            <span className="logo" >Sweet Breeze</span>
                            <input className="search-bar clearfix"  type="text" placeholder="search" value={this.state.searchText} onChange={(e)=>this.handleTextChange(e)} onSubmit={onSubmit} />
                            <ul className="clearfix">
                                <li>
                                    <Link to={routes.HOME} title="home">HOME</Link>
                                </li>
                                <li>
                                <Link to={routes.ABOUT} title="about">ABOUT US</Link>                                    
                                </li>
                                <Container triggerText={triggerText} onSubmit={onSubmit} />
                            </ul>
                        </div>    
                    </div>  
                </div>
            </div>
            

            
        );
    };
    
}

Header.propType = {
    setSearchText: PropType.func,
  };

export default Header;