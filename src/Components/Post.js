import React , {useEffect , useState}from 'react'
import './Post.css'
import {Avatar} from '@material-ui/core'

import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
const Post = ( {profilePic, imgName, username, timestamp, message}) => {

    var [showw, setShoww] = useState(null);
    useEffect (() => {
        if (imgName != null ){
            setShoww("true");
            // const ele = <img src={`http://localhost:9000/retrive/images/single?name=${imgName}`} alt='images' />;
            console.log("this is showws value broooo",showw)
        }
        else {
            console.log("this post has no image")
        }
        
    },[timestamp])
  
    return (
        <div className= 'post'>
            <div className= "post__top">
                <Avatar src = {profilePic} className= 'post__avatar' />

                <div className="post__topInfo">
                    <h3>{username}</h3>
                    
                    <p>{new Date (parseInt(timestamp)).toUTCString()}</p>



                </div>

            </div>

            <div className="post__bottom">
                <p className="mess">{message}</p>
             <div  >
                {showw && <img src={`https://facebook-clo.herokuapp.com/retrive/images/single?name=${imgName}`} alt='images' className="postImg"  />}
            </div>
            </div>

            <div className="post__options">
                        <div className="post__option">
                            <ThumbUpIcon />
                            <p>Like</p>
                        </div>
                        <div className="post__option">
                            <ChatBubbleOutlineIcon />
                            <p>Comment</p>
                        </div>
                        <div className="post__option">
                            <NearMeIcon />
                            <p>Share</p>
                        </div>
                        <div className="post__option">
                            <AccountCircleIcon />
                            <ExpandMoreOutlined />
                            
                        </div>

                    </div>
            
        </div>
    )
}

export default Post
