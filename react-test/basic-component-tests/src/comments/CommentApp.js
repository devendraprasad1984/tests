import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import AppVersion from "./version";

const CommentApp = () => {
    return (
        <div>
            <AppVersion/>
            <CommentBox/>
            <CommentList/>
        </div>
    )
}

export default React.memo(CommentApp)
