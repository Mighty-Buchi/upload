import React, { useState } from 'react'
import './Upload.css'

const Upload = () => {

    const [Thumbnail,setThumbnail]= useState('No File Uploaded')
    const [sourceName,setSourceName] = useState('No File Uploaded')

    return (
        <div className='upload'>
            <h2>Upload Files</h2>
            <form >
                <div className="main-container">

                    <div className="left">
                        <label htmlFor="auth-key">Authorization key</label><br />
                        <input type="password" name='auth.key' placeholder='**************' /><br />

                        <label htmlFor="title">Title</label><br />
                        <input type="text" name='title' placeholder='Day 001' /><br />

                        <label htmlFor="">Description</label><br />
                        <textarea name="description" cols={40} rows={6} placeholder='Description'></textarea>
                    </div>
                    <div className="right">
                        <label htmlFor="tag">Tags (comma seperated)</label><br />
                        <input type="text" name='date' placeholder='Tags (comma seperated)' /><br />

                        
                        <label htmlFor="date">Date</label><br />
                        <input
                            type="text" name="date" placeholder="DD/MM/YYYY"
                            onFocus={(e) => (e.target.type = 'date')}
                            onBlur={(e) => (e.target.type = 'text')}
                        /><br />

                        <label htmlFor="drop-down">Software</label><br />
                        <select name="drop-down">
                            <option value="Sketch">Sketch</option>
                            <option value="Figma">Figma</option>
                            <option value="Framer">Framer</option>
                        </select>
                        <div className="upload-container" >
                            <div className="upload1">
                                <label htmlFor="">Thumbnail image</label><br />
                            <div className="uploadbtn" onClick={()=> document.getElementById('thumbnail').click()}>Upload File</div>
                            <input type="file" style={{display:"none"}} onChange={(e)=> setThumbnail(e.target.files[0]?.name || 'No file uploaded')}/>
                            <div className="filename">{Thumbnail}</div>
                            </div>

                           <div className="upload1">
                             <label htmlFor="">Source File</label><br />
                            <div className="uploadbtn" onClick={()=> document.getElementById('source').click()}>Upload File</div>
                            <input type="file" style={{display:"none"}} onChange={(e)=> setSourceName(e.target.files[0]?.name || 'No file uploaded')}/>
                            <div className="filename">{sourceName}</div>
                           </div>
                        </div>
                    </div>

                </div>
                <div className="btn"><button>Submit</button></div>
            </form>
        </div >
    )
}

export default Upload
