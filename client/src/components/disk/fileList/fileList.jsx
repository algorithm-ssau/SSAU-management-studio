import React from 'react';
import './FileList.css'
import { useSelector } from 'react-redux';
import File from './file/file';

const FileList = () => {

    //const files = useSelector(state => state.files.files).map(file => <File/>)
    const files = [{_id:1, name: 'direc', type: 'dir', size: '5gb', date: '15.05.2023'},
    {_id:1, name: 'direc2', type: 'dir', size: '5gb', date: '15.05.2023'},].map(file => <File file={file} key={file.id}/>)
   
    return (
        <div className='fileList'> 
            <div className="fileList_header">
                <div className="fileList_name">Название</div>
                <div className="fileList_date">Дата</div>
                <div className="fileList_size">Размер</div>
            </div>
            {files}
        </div>
    );

};

export default FileList;