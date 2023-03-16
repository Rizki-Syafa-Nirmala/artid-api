module.exports = (sequelize, Sequelize) => {
    const material = sequelize.define('materi', {
        title: {
            type: Sequelize.STRING,
        },
        cover: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.TEXT
        },
    });
    return material;
}