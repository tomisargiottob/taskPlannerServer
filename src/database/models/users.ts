import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import connection from "..";


class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
}
User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize: connection,
    tableName: 'users',
    paranoid: true,
  }
)

export default User