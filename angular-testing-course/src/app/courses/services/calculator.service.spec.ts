import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let loggerSpy: any;
  let calculator: CalculatorService;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
    calculator = new CalculatorService(loggerSpy);
  });

  it('Should add two numbers', () => {
    const result = calculator.add(2, 2);

    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
  it('Should subtract two numbers', () => {
    const result = calculator.subtract(2, 2);

    expect(result).toBe(0);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
