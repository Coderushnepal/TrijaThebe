import React, { Component } from 'react';
import Content from './Content';

function contentList(info) {
    let contents = info.filteredAuthor.map((content, i) => {
        return <Content key={i} title={content.title} description={content.description} author={content.author} />
    })
    return (
        <div>
            {contents}
        </div>
    )
}

export default contentList;