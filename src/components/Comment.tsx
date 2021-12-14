import React from 'react'
import { BiLike,BiDislike } from 'react-icons/bi'
import { FaChevronDown } from 'react-icons/fa'

interface CommentProps {
    comment:{
        id:string;
        snippet:{
            canReply:boolean;
            totalReplyCount:number;
            topLevelComment:{
                snippet:{
                    textDisplay:string;
                    authorDisplayName:string;
                    authorProfileImageUrl:string;
                    authorChannelId:string;
                    likeCount:number;
                    publishedAt:string;
                }
            }
        }
    }
}

const Comment:React.FC<CommentProps> = ({comment}) => {
    const { id } = comment
    const { canReply,totalReplyCount } = comment?.snippet
    const { textDisplay,authorDisplayName,authorProfileImageUrl,authorChannelId,likeCount,publishedAt } = comment?.snippet?.topLevelComment?.snippet
    
    return (
        <div className="comment">
            {authorProfileImageUrl && 
                <div className="comment__img">
                    <img src={authorProfileImageUrl} alt="" />
                </div>}
            <div className="comment__text">
                <h4>{authorDisplayName} <span>{publishedAt.slice(0,10)}</span></h4>
                <p dangerouslySetInnerHTML={{__html:textDisplay}}></p>
                <div className="comment__icons"><BiLike />{likeCount ? likeCount + " Likes" : "Like"} <BiDislike />  {canReply ? 'Reply' : ''}</div>
                {totalReplyCount > 0 ? <div><FaChevronDown />View {totalReplyCount} replies</div> : null}
            </div>
        </div>
    )
}

export default Comment
