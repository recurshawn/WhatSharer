import React from 'react';
import '../App.css';

const ShareIcon = (props) => {
    return(
        <div className="ShareIcon container">
            <div className="row">
                <div className="col"></div>
                <div className="col-1">
                        
                        <svg
                            float="rightalign"
                            width = "50px" 
                            xmlns="http://www.w3.org/2000/svg" 
                            aria-hidden="true" 
                            focusable="false" 
                            role="img" 
                            viewBox="0 0 24 24"
                        > 
                            <path 
                                className="button icon"
                                fill="#075e54" 
                                d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
                            />
                        </svg>
                    
                   
                </div>
                <div className="col"></div>

            </div>
            
        </div>

       

    );
}
export default ShareIcon;