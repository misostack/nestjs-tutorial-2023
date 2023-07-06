import { Column, DataType, Model, Table } from 'sequelize-typescript';

export const PetCategoryTableName = 'pet_categories';

@Table({
  tableName: PetCategoryTableName,
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
