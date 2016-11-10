import { ApiService } from './api.service';

describe('Service: Api: isolated', () => {
  let service: ApiService;
  beforeEach(() => {
    service = new ApiService();
  });

  it('should create an instance', () => {
    expect(service).toBeDefined();
  });
});
