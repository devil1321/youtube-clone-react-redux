import React from 'react'

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
        <div>
            
        </div>
    )
}

export default Comment
