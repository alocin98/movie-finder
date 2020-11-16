import { SafeResurlPipe } from './safe-resurl.pipe';

describe('SafeResurlPipe', () => {
  it('create an instance', () => {
    const pipe = new SafeResurlPipe();
    expect(pipe).toBeTruthy();
  });
});
