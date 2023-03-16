const { material } = require("../models");
const db = require("../models")
const material = db.material;

// Menambahkan materi 
exports.create = async(req, res) => {
    try{
        const data = await material.create(req.body)
        res.json({
            message: "Materi berhasil ditambahkan",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

// Menampilkan semua materi
exports.getAll = async(req, res) => {
    try{
        const material = await material.findAll()
        res.json({
            message: "Materi berhasil ditampilkan",
            data: quizzes,
        })
    } catch (error){
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

// Menampilkan materi sesuai id
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const material = await material.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message: `Materi berhasil ditampilkan dengan id=${id}.`,
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
        message: error.message || "Error",
        data: null,
    });
    }
};


// Mengupdate materi sesuai id
exports.update = async (req, res) => {
    const id = req.params.id
    try {
        const material = await material.findyPk(ID, { rejectOnEmpty: true})
        quiz.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Materi berhasil di update",
            data: material,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error",
            data: null,
        });
    }
}

// Menghapus materi sesuai id
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const material = await material.findByPk(id, { rejectOnEmpty: true})

        material.destroy()
        
        res.json({
            message: "Materi berhasil dihapus"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error",
            data: null,
        });
    }
}