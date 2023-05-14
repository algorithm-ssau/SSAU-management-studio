import axios from 'axios'


export function getFiles(dirID) {
    return async dispatch => {
        try {
            const response = await axios.get('http://localhost:5000/api/file${dirID ? "?parent="+dirID : ""}', {
                headers: {Authorization: "Bearer ${localStorage.getItem('token')}"}
            })
            console.log(response.data)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

}