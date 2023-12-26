import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, MaxLength, MinLength } from 'class-validator';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id?:number;

    @Column({unique:true})
    @IsEmail()
    email:string

    @Column()   
    @MinLength(4)
    @MaxLength(12)
    password:string;

}
