import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import AppVersion from "./version";
import {Route} from "react-router-dom";

const CommentApp = () => {
    return (
        <div>
            <AppVersion/>
            <Route path={'/post'} component={CommentBox}/>
            <Route path={'/'} exact component={CommentList}/>
        </div>
    )
}

export default React.memo(CommentApp)
