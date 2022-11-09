import React from 'react';
import { ChatContext } from '../context/ChatContext';
import { useContext } from 'react';
import Input from './Input';
import Messages from './Messages';
import Add from '../images/attach.jpg';
import More from '../images/more.png';
import Cam from '../images/cam.jpg';

const Chat = () => {
    const { data } = useContext(ChatContext)
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    {/* <img src={Cam} alt=""></img>
                    <img src={Add} alt=""></img>
                    <img src={More} alt=""></img> */}
                    {/* <i classname ="chatIcons fa fa-camera" aria-hidden="true"></i> */}
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}
export default Chat;