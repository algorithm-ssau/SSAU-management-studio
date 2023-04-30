const fileService = require('../services/file.service')
const User = require('../models/User')
const File = require('../models/File')


class FileController {
        async createDir(req, res) {
           try {
                const {name, type, parent} = req.body
                const file = new File({name, type, parent, user: user.id})
                const parentFile = await File.findOne({_id: parent})
                if (!parentFile) {
                    file.path = name
                    await fileService.createDir(file)
                } else {
                    file.path = '${parentFile.path}\\${file.name}'
                    await fileService.createDir(file)
                    parentFile.childs.push(file._id)
                    await parentFile.save()
                }
                await file.save()
                return res.json(file)

           } catch (e) {
                console.log(e)
                return res.status(400).json(e)
           } 

        }
}

module.exports = new FileController()