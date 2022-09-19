import { Injectable, NotFoundException } from '@nestjs/common';
import { Intention } from './models/intention.models';

@Injectable()
export class IntentionService {
    private intentions: Intention[] = [];

    findAll(): Intention[] {
        return this.intentions;
    }

    findOneById(id: string): Intention {
      const result = this.intentions.find((intention) => id === intention.id);
      if (!result) {
        throw new NotFoundException();
      }
      return result;
    }
}
