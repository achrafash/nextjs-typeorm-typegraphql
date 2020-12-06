import { Field, ID, Int, ObjectType } from 'type-graphql'
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@ObjectType()
@Entity('comment')
export class Comment extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number

    @Field(() => Int)
    @Column({ name: 'post_id' })
    postId!: number

    @Field(() => String)
    @Column('text')
    body: string
}
