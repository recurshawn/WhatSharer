import React from 'react';

const CopyIcon = (props) => {

    return (
      <svg
        className="icon"
        onClick = {props.copy} 
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
    );
}


export default CopyIcon;

