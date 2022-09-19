import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Intention } from './models/intention.models';
import { IntentionService } from './intention.service';

@Resolver()
export class IntentionResolver {
  constructor(private intentionService: IntentionService) {}
  
  @Query(() => [Intention], { nullable: 'items' })
  findAll() {
    return this.intentionService.findAll();
  }

  @Query(() => Intention)
  findOneById(@Args('id', { type: () => ID }) id: string) {
    return this.intentionService.findOneById(id);
  }
}
