const fs = require('fs')
const File = require('../models/File')
const config = require('config')
const { resolve } = require('path')
const { rejects } = require('assert')

class FileService{

    createDir(file) {
        // было вот так const filePath = `${config.get(file.path)}\\${file.user}\\${file.path}`
        const filePath = `${config.get('filePath')}\\${file.user}\\${file.path}`
        return new Promise (((resolve, reject) => {
            try {
                //было вот так if (!fs.existsSync(file)) {
                if (!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath)
                    return resolve({message: 'File was created'})
                } else {
                    return reject({message: 'File already exist'})
                }

            } catch (e) {
                return reject( {message: 'File error'})
            }
        }))

    }

}

module.exports = new FileService()