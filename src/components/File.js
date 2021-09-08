import { CloudUpload, GetApp } from '@material-ui/icons'
import React from 'react'

function File() {
    return (
        <div style={{width:'100%',height:'50px',borderRadius:'63px',backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',
        border: '1px dashed #3F72AF',
        
        }}>
            <input type="file" style={{opacity:0,zIndex:2}} />
            <p style={{
                position: 'absolute',
                display: 'flex',
                alignItems:'center',
                justifyContent:'center',
                color: '#344FA1',
                fontSize:'14px',
                fontWeight:'bold'
            }}><GetApp style={{transform:'rotate(180deg)',margin:'0px 6px',boxSizing:'border-box'}} /> Upload any file type<span style={{opacity:0.5}}>(.jpg,.docx,.pptx)</span> </p>
        </div>
    )
}

export default File
