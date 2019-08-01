import React from 'react';
//import MessageInfo from './MessageInfo/MessageInfo.js';
import {FormTextarea, FormInput} from 'shards-react';
import copy from 'clipboard-copy';
import "./MessageArea.css";

const MessageArea = (props) => {
    return(
    <div>
        
        <FormTextarea 
            rows="5"
            onChange={props.change}
            //value = {props.msg}
        ></FormTextarea>
        <div className="Share">
            <a href= {props.generateurl()}>
            <svg  
                width = "30px" 
                xmlns="http://www.w3.org/2000/svg" 
                aria-hidden="true" 
                focusable="false" 
                data-prefix="fas" 
                data-icon="share" 
                class="svg-inline--fa fa-share fa-w-16" 
                role="img" 
                viewBox="0 0 512 512">
                    <path className="button"
                        fill="#075e54" 
                        d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"/>
            </svg>
            </a>
            <p>Share this message on WhatsApp right now!</p>
        </div>

        <div className="Copy">
            <FormInput value={props.generateurl()}/>
            <svg onClick = { () => {
                    copy(props.generateurl())
                    }
                }
                xmlns="http://www.w3.org/2000/svg" 
                aria-hidden="true" 
                focusable="false" 
                data-prefix="fas" 
                data-icon="copy" 
                class="svg-inline--fa fa-copy fa-w-14" 
                width ="30px" 
                role="img" 
                viewBox="0 0 448 512">
                    <path 
                        className="button"
                        fill="#075e54" 
                        d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"/>
            </svg>
            <p>Copy URL/link to message</p>
        </div>
        <div className="Banner Code">
            <h3>'Share on WhatsApp' Banner</h3>
            <a href={props.generateurl()}><img src="https://blog.oppedahl.com/wp-content/uploads/2017/01/whatsapp-share.png" width="140" height="75" title="Share on WhatsApp" alt="Share on WhatsApp"/></a>
            <p>Embed this on your website!</p>
            <FormInput
                value={props.bannercode()}
            />
            <svg onClick = { () => {
                    copy(props.bannercode())
                    }
                }
                xmlns="http://www.w3.org/2000/svg" 
                aria-hidden="true" 
                focusable="false" 
                data-prefix="fas" 
                data-icon="copy" 
                class="svg-inline--fa fa-copy fa-w-14" 
                width ="30px" 
                role="img" 
                viewBox="0 0 448 512">
                    <path 
                        className="button"
                        fill="#075e54" 
                        d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"/>
            </svg>
            <p>Copy Embed code</p>
            </div>
    </div>
    );
}

export default MessageArea;