import { Test, TestingModule } from '@nestjs/testing';
import { IntentionResolver } from './intention.resolver';

describe('IntentionResolver', () => {
  let resolver: IntentionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntentionResolver],
    }).compile();

    resolver = module.get<IntentionResolver>(IntentionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
