import React from 'react'
import ReactDOM from "react-dom";
import CommentApp from "../comments/CommentApp";

it('shows a comment box', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CommentApp/>, div)
    console.log(div.innerHTML)
    ReactDOM.unmountComponentAtNode(div)
})


