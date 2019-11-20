import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, Unique, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { IsBase64, IsBoolean, IsEmail } from "class-validator";

@Entity()
export class User extends BaseEntity
{
	/**** Database Columns ****/
    @PrimaryGeneratedColumn("uuid")
    _id : string;

    @CreateDateColumn({ type: "timestamp" })
    createdAt : Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt : Date;

    @Column()
    @IsEmail()
    email : string;

    @Column({ length: 18})
    discordId : string;

    @Column({ length: 32 })
    username : string;

    @Column({ length: 4})
	discriminator : string;
	
	@Column({ length: 64 })
	@IsBase64()
    avatarHash : string;
    
    @Column({ default: false })
    @IsBoolean()
    isSuperAdmin : boolean;
}