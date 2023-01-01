import React from 'react';
import './../utils/voiceSearchModal.css';

const VoiceSearch=()=>{
    return(
        <div className="container-fluid d-flex align-items-center justify-content-center text-white voiceModal">
         
         <div className="col-md-4 bg-light voice-search">
            <div className="border-bottom w-100 d-flex align-items-center justify-content-between">
            <h3>voiceModal</h3>
            <i className="fa fa-times btn btn-sm"></i>
            </div>
         </div>
        </div>
    )
}

export default VoiceSearch; 