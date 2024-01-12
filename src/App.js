
import './App.css';

import statistika from './stat/statistika';
import Honest from './stat/honest';
import NumberSets from './stat/numberSets';
import Odd from './stat/odd'
import Balance from './stat/balance';
import AlmostBalance from './stat/almostBalance';
import ElevenNine from './stat/elevenNine';

function App() {
  return (
    <div className="App">

      <table>
        <tr>
          <th className='table-header'>
            Количество матчей
          </th>
          <th className='table-header'>
            Количество сетов
          </th>
          <th className='table-header'>
            Количество четных сетов
          </th>
          <th className='table-header'>
            Количество балансов
          </th>
          <th className='table-header'>
            Количество нечетных сетов
          </th>
          <th className='table-header'>
            Около баланс
          </th>
          <th className='table-header'>
            11-9
          </th>
        </tr>
        <tr>
          <td>
            {statistika.length}
          </td>
          <td>
            {
              NumberSets(statistika)
            }
          </td>
          <td>
            {
              Honest(statistika)
            }
            
          </td>
          <td>
            {
              Balance(statistika)
            }
          </td>
          <td>
          {
            Odd(statistika)
          }
          </td>
          <td>
          {
            AlmostBalance(statistika)
          }
          </td>
          <td>
          {
            ElevenNine(statistika)
          }
          </td>
        </tr>
      </table>

    </div>
  );
}

export default App;
