import { Field, ID, ObjectType } from 'type-graphql'
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'
import { Comment } from '@models/comment.model'

@ObjectType()
@Entity('post')
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
