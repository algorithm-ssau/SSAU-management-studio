import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createDir, getFiles, uploadFile} from "../../actions/file";
import FileList from "./fileList/fileList";
import './disk.css'
import Popup from './Popup';
import { setCurrentDir, setPopupDisplay } from '../../reducers/fileReducer';
import { useState } from 'react';
import Back from '..//..//assets/img/button_back.svg';

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const dirStack = useSelector(state => state.files.dirStack)
    const [dragEnter, setDragEnter] = useState(false)

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])

    function showPopupHandler(){
        dispatch(setPopupDisplay('flex'))
    }

    function backClickHandler(){
        const backDirId = dirStack.pop()
        dispatch(setCurrentDir(backDirId))
    }

    function fileUploadHandler(event) {
        const files = [...event.target.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    function dragEnterHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

    function dragLeaveHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }

    function dropHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
        setDragEnter(false)
    }


    return ( !dragEnter ?
        <div className="disk" onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            <div className="disk_btns">
                <button className="disk_back" onClick={() => backClickHandler()}> <img src={Back} alt="Back" /></button>
                <button className="disk_create" onClick={() => showPopupHandler()}>Создать новую папку</button>
                <div className="disk_upload">
                    <label htmlFor="disk_upload-input" className="disk_upload-label">Загрузить файл</label>
                    <input multiple={true} onChange={(event)=> fileUploadHandler(event)} type="file" id="disk_upload-input" className="disk_upload-input" />
                </div>

            </div>
            <FileList/>
            <Popup/>
        </div>
        :
        <div className="drop-area" onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            Перетащите файлы сюда
        </div>
    );
};

export default Disk;