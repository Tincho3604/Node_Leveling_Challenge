module.exports = (sequelize, Datatypes) => {
    const User = sequelize.define("Posts", {
        Título : {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    })
}