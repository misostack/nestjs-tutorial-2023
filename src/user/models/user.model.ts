import { Column, DataType, Model, Table } from 'sequelize-typescript';

export const UserTableName = 'users';
export enum UserType {
  Admin = 1,
  Customer = 2,
}
export enum UserStatus {
  active = 2,
  pending = 1,
  inactive = 0,
}

@Table({
  tableName: UserTableName,
})
export class User extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id?: string;

  @Column({
    type: DataType.STRING(320),
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.SMALLINT.UNSIGNED,
    allowNull: false,
  })
  userType: UserType;

  @Column({
    type: DataType.SMALLINT.UNSIGNED,
    allowNull: true,
    defaultValue: UserStatus.pending,
  })
  status: UserStatus;
}
