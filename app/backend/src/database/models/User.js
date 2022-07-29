const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Users',
  });

  User.associate = (models) => {
    User.hasMany(models.Task, { foreignKey: 'userId', as: 'tasks' });
  }

  return User;
};

module.exports = User;