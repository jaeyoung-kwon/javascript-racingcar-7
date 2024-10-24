import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const carInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    Console.print(carInput);
  }
}

export default App;
