module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("exercise", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      reps: {
        type: Sequelize.INTEGER
      },
      sets: {
        type: Sequelize.INTEGER
      },
      weight:{
        type: Sequelize.INTEGER
      }
    });
    return Tutorial;
  };