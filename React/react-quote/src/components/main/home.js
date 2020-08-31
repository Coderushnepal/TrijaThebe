import React, {Component} from 'react';
import Header from '../common/header';
import Content from './Content';
import Footer from '../common/footer';
import { dummyContentsData } from '../../constants/dummyData';


class home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: [],
            searchName: ''
        };
    }
    handleTextChange = (event) => {
        console.log(event.target.value);
            this.setState({
                searchName : event.target.value,
            });
    }


    fetchContents = async () => {
        setTimeout(() => {
            this.setState({
                contents: dummyContentsData,
            });
        }, 0);
    };


    componentDidMount() {
        this.fetchContents();
    }

    render(){
        let filteredAuthor = this.state.contents.filter((content) => {
            return content.author.toLowerCase().includes(this.state.searchName.toLowerCase())
        })
        return ( 
            <div>
                <Header />
                <div className="main-container">
                    <div ref={(r) => (this.scrollParentRef = r)}>
                        {this.state.contents.map((contents) => (
                        <Content key={contents.id} info={contents} />
                        ))} 
                        <contentList filteredAuthor={this.filteredAuthor} />  
                        </div>
                </div>
                <Footer />
            </div>    
        );
    }
}

export default home;