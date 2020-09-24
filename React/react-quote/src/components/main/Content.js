import React, { Component,Fragment } from 'react';
import PropType from 'prop-types';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1});
    }

    render() {
        const { title, description, author, text } = this.props.info;
        return (
            <div>
                <div className="card-container">
                    <div className="card-grid clearfix">
                        <div className="card">
                            <h2>{title}</h2>
                            <p className="poem_line">{description.split("\n").map((item)=>
                            {return (<Fragment>{item} <br/>
                            </Fragment>)})}</p>
                            <p className="txt-quote">{text}</p>
                            <p className="author">-{author}</p>
                            <div className="like-btn clearfix">
                                <span>{this.state.count}</span>
                                <button onClick={this.increment}>Like</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        );
    }
} 

Content.PropType = {
    info: PropType.shape({
        id: PropType.number,
        title: PropType.string,
        description: PropType.string,
        author: PropType.string
    })
}

export default Content;