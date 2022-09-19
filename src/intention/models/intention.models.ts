import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum IntentionList {
  PRODUCT,
  SKILL,
  TECHNICH,
  CAREER,
}

registerEnumType(IntentionList, {
  name: 'IntentionList',
});

@ObjectType()
export class Intention {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field((type) => IntentionList)
  status: IntentionList;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}