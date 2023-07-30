import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

// Refs : https://sequelize.org/docs/v6/core-concepts/model-basics

export const ExampleTableName = 'examples';

@Table({
  tableName: ExampleTableName,
  timestamps: true,
})
export class Example extends Model {
  // primary key, auto increment
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER.UNSIGNED, // INTEGER
  })
  id?: number;

  // boolean
  @Column({
    type: DataType.BOOLEAN, // TINYINT(1)
    allowNull: false,
    defaultValue: true,
  })
  flag: boolean;

  // strings
  @Column({
    type: DataType.STRING(75), // varchar(75)
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING, // varchar(255)
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.TEXT, //  TEXT
    allowNull: true,
    defaultValue: '',
  })
  content: string;

  @Column({
    type: DataType.BLOB,
    allowNull: true,
    defaultValue: '',
  })
  image: string;

  // numbers
  @Column({
    type: DataType.INTEGER({ length: 2 }),
  })
  rate: number;

  // If your number is greater than > 9,007,199,254,740,992
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  aBigIntNumber: BigInt;

  @Column({
    type: DataType.FLOAT(12, 3),
  })
  aFloat: number;

  // http://software-product-development.blogspot.com/2008/07/net-double-vs-decimal.html
  // Double: not suitable for exactly number
  @Column({
    type: DataType.DOUBLE(24, 3),
  })
  aDouble: number;

  // Decimal: suitable for exactly number: financial data
  @Column({
    type: DataType.DECIMAL(24, 3),
  })
  aDecimal: number;

  // unsigned number
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  population: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED.ZEROFILL,
  })
  orderId: string;

  // date time
  @Column({
    type: DataType.DATEONLY,
  })
  birthDay: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: DataType.NOW,
  })
  myDate: Date;

  // TIME(fsp)	A time. Format: hh:mm:ss. The supported range is from '-838:59:59' to '838:59:59'
  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  zodiacHour: string;

  // YEAR    "A year in four-digit format. Values allowed in four-digit format: 1901 to 2155, and 0000.
  // Not Support

  // Enum: but should not use, everytime you need to add/remove enum value, must run migration
  @Column({
    type: DataType.ENUM,
    values: ['active', 'inactive', 'pending'],
  })
  status: string;

  @Column({
    type: DataType.JSON,
    allowNull: true,
    defaultValue: {},
  })
  settings: Object;
}
