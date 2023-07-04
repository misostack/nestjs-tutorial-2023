import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'pet_categories',
})
export class PetCategory extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id?: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  name: string;
}
