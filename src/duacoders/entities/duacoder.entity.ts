import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Duacoder {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({unique:true})
  dni:string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  department: string;
  @Column()
  job: string;
  @Column()
  skills: string;
  @Column()
  photo: string;
  @Column()
  omeletPreference: string;
  @Column({type: 'datetime', nullable:true})
  birthDate: Date;
  @Column({type: 'datetime', default: ()=>'CURRENT_TIMESTAMP'})
  createAt: Date;
  
}
