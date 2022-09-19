import { Module } from '@nestjs/common';
import { IntentionService } from './intention.service';
import { IntentionResolver } from './intention.resolver';

@Module({
  providers: [IntentionService, IntentionResolver]
})
export class IntentionModule {}
