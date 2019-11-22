import File from '../models/File'

class FileController {
  async store(req, res) {
   const { originalname: name, filename: path } = req.file
   const { id: avatar_id } = req.file

   const file = await File.create({
     name,
     path,
    avatar_id,
   })

   return res.json(file)
  }
}

export default new FileController()
