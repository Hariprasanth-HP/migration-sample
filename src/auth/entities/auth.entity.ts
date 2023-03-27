import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  name: number;

  @Column()
  age: string;
}
