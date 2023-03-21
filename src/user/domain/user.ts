import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn({ name: "user_id" })
  id: number;

  @Column({ name: "nickname", unique: true, nullable: false, length: 50 })
  nickname: string;

  @Column({ name: "email", unique: true, nullable: false, length: 50 })
  email: string;
}
