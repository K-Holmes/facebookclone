import React from "react";
import { Avatar } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ProfilePic from './Ducks.JPG';
import ImageOne from './PostOne.webp';
import ImageTwo from './PostTwo.webp';
import ImageThree from './PostThree.webp';
import Bella from './Bella.png';
import Pierce from './Pierce.png';
import Ralph from './Ralph.png';
import Divider from '@mui/material/Divider';

const itemData = [
    {
      img: ImageOne,
      title: 'Breakfast',
    },
    {
      img: ImageTwo,
      title: 'Coffee',
    },
    {
      img: ImageThree,
      title: 'Basketball',
    },
  ];

export default function Activitybar() {
    return (
         <><div className="rightBar"><div>
            <p className = "bottomPadRemove">Online Friends</p>
            <Avatar className = "onlineUsers" alt="Remy Sharp" src={ProfilePic}/>
        </div>
            <div>
                <p className="bottomPadRemove">Latest Photos</p>
                <ImageList className = "imageListPad" sx={{ width: 250, height: 75 }} cols={3} rowHeight={75}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy" />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
            <div>
                <p>Latest Conversations</p>
                <div className = "convoGrid">
                  <div>
                      <Avatar alt="Trevor" src = {Pierce} className="padRight"/>
                  </div>
                  <div className = "removePadding">
                      <strong>New Quest</strong>
                      <p className = "removePadding shrinkText"><p className="removePadding boldText">Pierce Fletcher-</p> We've been hired
                      on an escort-type quest, we meet at <small>...</small></p>
                      <Divider />
                  </div>
                  <div>
                      <Avatar alt="Cheese" src= {Ralph}/>
                  </div>
                  <div className = "removePadding">
                      <strong>Weapons Practice</strong>
                      <p className = "removePadding shrinkText"><p className="removePadding boldText">Ralph Butler-</p> I need some help with
                      my training, are you free? <small>...</small></p>
                      <Divider />
                  </div>
                  <div>
                      <Avatar alt="Token" src= {Bella}/>
                  </div>
                  <div className = "removePadding">
                      <strong>Knighting Ceremony</strong>
                      <p className = "removePadding shrinkText"><p className="removePadding boldText">Bella Ashdown-</p> Hi there! I finally
                      graduated the Knight's Academy <small>...</small></p>
                  </div>
                </div>

            </div></div></>
    )
}