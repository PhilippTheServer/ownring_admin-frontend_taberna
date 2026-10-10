import { environment } from './environment';
import { environment as production } from './environment.prod';

describe('OwnRing error reporting', () => {
  it('opts in for both environment configurations', () => {
    expect(environment.errorReporting.enabled).toBe(true);
    expect(production.errorReporting.enabled).toBe(true);
    expect(environment.apiBaseUrl + environment.errorReporting.endpoint).toBe(
      '/api/v1/telemetry/errors',
    );
  });
});
