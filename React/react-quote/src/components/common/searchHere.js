import React, {Component} from 'react';

function searchHere(props) {
  return (
    <div>
      <input onChange={props.handleTextChange} type="text" />
    </div>
  )
}
 
export default searchHere;