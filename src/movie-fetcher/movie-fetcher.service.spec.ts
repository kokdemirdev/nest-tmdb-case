import { Test, TestingModule } from '@nestjs/testing';
import { MovieFetcherService } from './movie-fetcher.service';

describe('MovieFetcherService', () => {
  let service: MovieFetcherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieFetcherService],
    }).compile();

    service = module.get<MovieFetcherService>(MovieFetcherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
