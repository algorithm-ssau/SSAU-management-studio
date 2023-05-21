import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createDir, getFiles, uploadFile} from "../../actions/file";
import FileList from "./fileList/fileList";
import './disk.css'
import Popup from './Popup';
import { setCurrentDir, setPopupDisplay } from '../../reducers/fileReducer';

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const dirStack = useSelector(state => state.files.dirStack)

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


    return (
        <div className="disk">
            <div className="disk_btns">
                <button className="disk_back" onClick={() => backClickHandler()}>Назад</button>
                <button className="disk_create" onClick={() => showPopupHandler()}>Создать папку</button>
                <div className="disk_upload">
                    <label htmlFor="disk_upload-input" className="disk_upload-label">Загрузить файл</label>
                    <input multiple={true} onChange={(event)=> fileUploadHandler(event)} type="file" id="disk_upload-input" className="disk_upload-input" />
                </div>

            </div>
            <FileList/>
            <Popup/>
        </div>
    );
};

export default Disk;