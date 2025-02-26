import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

const {nanoid} = require('nanoid');

@Entity('User')
export class User {
        @PrimaryColumn()
        id: string;
        @Column()
        name: string;
        @Column()
        email: string;
        @Column()
        dob: string;
    
        @BeforeInsert()
        generateId(){
            this.id = `user_${nanoid()}`;
        }
}
