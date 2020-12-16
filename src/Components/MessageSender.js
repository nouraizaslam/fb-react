import { Avatar , Input, Button , IconButton } from '@material-ui/core';
import React , { useState }from 'react'
import {useStateValue} from './StateProvider';

import './MessageSender.css';

import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import axios from '../axios'


const MessageSender = () => {
    const [{user} , dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [image, setImage] = useState(null);
//image upload by selecting image 
    const handleChange =(e) => {
        if (e.target.files[0]) {
           setImage(e.target.files[0])
        }
    }
//post upload by pressing enter
  async function handleSubmit (e) {
    e.preventDefault();
    
    let data = new FormData();
       data.append('file', image);
        console.log(data)
    if ( image != null && input == ''){
        await axios.post("/upload/post" , 
             {
                 user: user.displayName, 
                 imgName: image.name,
                 text: null,
                 avatar: user.photoURL,
                 timestamp: new Date().getTime()
                  }).then(() => { setInput('')})
         let data = new FormData();
         data.append('file', image);
         await axios.post("/upload/image",data ).then(()=> {}).then(()=> { console.log("image done")})
            
    } 
    else if (input != '' && image == null){
        await axios.post("/upload/post" , 
             {
                 user: user.displayName, 
                 imgName: null,
                 text: input,
                 avatar: user.photoURL,
                 timestamp: new Date().getTime()
                  }).then(()=> {setInput('')}).then(() => {console.log("input done")})

    }else if (input != '' && image != null) {
        await axios.post("/upload/post" , 
        {
            user: user.displayName, 
            imgName: image.name,
            text: input,
            avatar: user.photoURL,
            timestamp: new Date().getTime()
             }).then(() => { setInput('')});
        let data = new FormData();
        data.append('file', image);
        await axios.post("/upload/image",data ).then(()=> { setImage(null)}).then(() => {console.log("image and input done")})
    }

    }

    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input 
                    type="text" 
                    className='messageSender__input' 
                    placeholder = "What's on your mind?" 
                    value = {input} 
                    onChange={(e) => setInput(e.target.value) }
                    
                    />
                    
                    <input 
                    placeholder="Select image"
                    type="file" 
                    className= 'messageSender__fileSelector' 
                     onChange= {handleChange}  
                    />
                    
                    <IconButton 
                    onClick= {handleSubmit} 
                    type='submit'>
                        Post
                    </IconButton>

                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style = {{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style = {{ color: 'green'}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style= {{ color: 'orange'}} />
                    <h3>Feeling / Activity</h3>

                </div>
            </div>
            
        </div>
    )
}

export default MessageSender
