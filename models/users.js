module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("users", {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      picture: DataTypes.STRING,
      birthDate: DataTypes.STRING,
      occupation: DataTypes.STRING,
      location: DataTypes.STRING,
      coachingInterests: DataTypes.STRING,
      maritalStatus: DataTypes.STRING,
      ratings:DataTypes.INTEGER,
      testimonials: DataTypes.TEXT,
      hobbies: DataTypes.TEXT,
      createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
    });
    return Users;
  };