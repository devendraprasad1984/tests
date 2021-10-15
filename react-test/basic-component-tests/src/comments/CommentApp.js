import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

const CommentApp = () => {
    return (
        <div>
            <CommentBox/>
            <CommentList/>
        </div>
    )
}

export default React.memo(CommentApp)
