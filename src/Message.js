import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './Message.css';

const Message = ()  =>{
    return (
        <div className='message'>
            <Avatar src='https://scontent.fblr4-1.fna.fbcdn.net/v/t1.0-9/57393159_2103831496394370_5160352186227490816_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=-b-n5uhXzyUAX_vQ3pD&_nc_ht=scontent.fblr4-1.fna&oh=4544d762c8d369b0a480c0cb32e07037&oe=5FB51651'/>
          <div className="message__info">
              <h4>@San_gowda
              <span className='message__timestamp'> 23rd Jan 2020</span>
              </h4>
              <p>Hi hello man!</p>
          </div>
        </div>
    )
}

export default Message
