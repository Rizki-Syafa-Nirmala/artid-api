const db = require("../models");
const Quiz = db.quizzes;

// Menambah Quiz
exports.create = async(req, res) => {
    try{
        const data = await Quiz.create(req.body)
        res.json({
            message: "Quiz berhasil ditambahkan",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

// Menampilkan semua quiz
exports.getAll = async(req, res) => {
    try{
        const quizzes = await Quiz.findAll()
        res.json({
            message: "Quiz berhasil ditampilkan",
            data: quizzes,
        })
    } catch (error){
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

// Mengupdate quiz sesuai id
exports.update = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findyPk(ID, { rejectOnEmpty: true})
        quiz.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Quiz berhasil di update",
            data: quiz,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error",
            data: null,
        });
    }
}

// Menghapus data sesuai id
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true})

        quiz.destroy()
        
        res.json({
            message: "Quiz berhasil dihapus"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error",
            data: null,
        });
    }
}

// Menampilkan quiz sesuai id
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message: `Quiz berhasil ditampilkan dengan id=${id}.`,
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
        message: error.message || "Error",
        data: null,
    });
    }
};

// Menampilkan quiz sesuai categoryId
exports.getByCategoryId = async (req, res)=> {
    const id = req.params.id
    try {
        const quizzes = await Quiz.findAll({
            where : {
                categoryId: id
            }
        })
        res.json({
            message: `Quiz berhasil ditampilkan dengan categoryId=${id}.`,
            data: quizzes
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error",
            data: null
        })
        
    }
}

// Menampilkan quiz sesuai levelId
exports.getByLevelId = async (rec, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            levelId: id
        }
    })
    res.json({
        message: `Quiz berhasil di tampilkan dengan LevelId=${id}. `,
    });
}