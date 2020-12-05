import { Field, ID, ObjectType } from 'type-graphql'
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity()
@ObjectType()
export class Post extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number

    @Field(() => String)
    @Column({ length: 256 })
    title: string

    @Field(() => String)
    @Column('text')
    body: string
}
