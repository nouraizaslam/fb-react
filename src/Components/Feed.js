import React, { useState ,useEffect} from 'react'
import './Feed.css';

import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import axios from '../axios';


const Feed = () => {
    const [posts, setPosts] = useState([]);
    // const [file, setFile] = useState("");
    // const [buf,setbuf] = useState(null);

    useEffect (()=> {
      async  function fetchData(){


            const req = await axios.get("/retrieve/posts");
            setPosts(req.data);
            // posts.map(async e =>{
            //     if (e.imgName != null){
            //         await axios.get(`/retrive/images/single?name=${e.imgName}`, {
            //             responseType: 'arraybuffer'
            //         }).then(response =>  {
            //             const bf = Buffer.from(response.data, 'binary')
            //             console.log("this",bf)
            //         })
                        // const buff = Buffer.from(response.data, 'base64');
                        // // var image = new Image();
                        // // image.src = response.data
                        // // setFile(image.src)
                        // // document.body.appendChild(image)
                        // console.log(response)
                        // setFile("ths")

                        
                    
                    // const reqImg = await axios.get(`retrive/images/single?name=${e.imgName}`);
                    // const img = 'reqImg:image/jpg;base64';
                    // var imgStr = arrayBufferToBase64()
                    // console.log("this is ", reqImg.data)
                    // setFile(reqImg.data)
                    // console.log(file)
                    // if(reqImg != null){
                    //     setFile(reqImg)
                    //     console.log("this",file)
                    // }
                    // }
                    // console.log(file)
            // } )
            // if (posts.imgName != null){
            // const reqImg = await axios.get("retrive/image");
            // console.log("image is present")
            // }
            // console.log("only posts")
            // else
            // 
            // console.log(req.data);
        }
        // console.log(file)
        // setFile("tpplis")
        // console.log(file)
         // const req = await axios.get('/retrive/images/single?name=123864496_10224065396172886_4118383768244731819_n.jpg', {
            //     responseType: 'arraybuffer'
            // }).then(response => {
            //     const re = Buffer.from(response.data , 'binary').toString('base64')
            //     console.log(re)
            // })
            // // console.log(req)

        fetchData();



    });
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
        
            {
                posts.map(entry => (
                    <Post
                        profilePic = {entry.avatar}
                        message ={entry.text}
                        timestamp= {entry.timestamp}
                        imgName = {entry.imgName}
                        username = {entry.user}   
                                      
                    />
               )
             )
            }
            {/* <span>
            <img src={ axios.get('/retrive/images/single?name=123864496_10224065396172886_4118383768244731819_n.jpg') } alt='images' />
            </span> */}
        </div>
    )
}

export default Feed
