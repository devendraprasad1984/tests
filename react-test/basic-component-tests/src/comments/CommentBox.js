import React from "react";

const CommentBox=()=>{
    return (
        <div>
            <form>
                <h4>Add Comment</h4>
                <textarea/>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default React.memo(CommentBox)
