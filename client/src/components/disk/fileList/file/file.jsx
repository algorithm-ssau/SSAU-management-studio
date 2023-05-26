import React from 'react';
import './file.css'
import dirLogo from '../../../../assets/img/dir.svg'
import fileLogo from '../../../../assets/img/file.svg'
import { useDispatch, useSelector } from 'react-redux';
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer';
import { downloadFile, deleteFile } from '../../../../actions/file';
import Download from '../../../../assets/img/button_download.svg';
import Delete from '../../../../assets/img/button_delete.svg';


const File = ({file}) => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

    function openDirHandler(file){
        if(file.type === 'dir') {
            dispatch(pushToStack(currentDir))
            dispatch(setCurrentDir(file._id))
        }
    }

    function downloadClickHandler(e) {
        e.stopPropagation() 
        downloadFile(file)
    }
    function deleteClickHandler(e){
        e.stopPropagation()
        dispatch(deleteFile(file))
    }
    return (
        <div className='file' onClick={()=> openDirHandler(file)}>
            <img src={file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file_image"/>
            <div className="file_name">{file.name}</div>
            <div className="file_date">{file.date.slice(0,10)}</div>
            <div className="file_size">{file.size}</div>
            {file.type !== 'dir' && <button onClick={(e) => downloadClickHandler(e)} className="file_btn file_download" >
                <img src={Download} alt="Download"/>
                </button>}
            <button onClick={(e)=> deleteClickHandler(e)} className="file_btn file_delete">
            <img src={Delete} alt="Delete"/>
            </button>
        </div>
    );

};

export default File;