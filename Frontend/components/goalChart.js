import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import addYears from 'date-fns/add_years';

const GoalChart = ({ goal }) => {

  let startDate = new Date(goal.added);
  let endDate = addYears(startDate, 1);
  startDate = startDate.toLocaleDateString();
  endDate = endDate.toLocaleDateString();
  //console.log('start => ', startDate);
  //console.log('end => ', endDate);

  const data = [
    {name: 'kovakoodaus', uv: 4000, pv: 2400, amt: 2400},
    {name: 'kovakoodaus', uv: 3000, pv: 1398, amt: 2210},
    {name: 'kovakoodaus', uv: 2000, pv: 9800, amt: 2290},
    {name: 'kovakoodaus', uv: 2780, pv: 3908, amt: 2000},
    {name: 'kovakoodaus', uv: 1890, pv: 4800, amt: 2181},
    {name: 'kovakoodaus', uv: 2390, pv: 3800, amt: 2500},
  ];

  return (
    <div className="chart-container">
      <ResponsiveContainer width='100%' height={300}>
        <LineChart 
                  data={data}
                  margin={{top: 0, right: 10, left: 0, bottom: 0}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      <style jsx>{`
        .chart-container {
          display: flex;
          justify-content: flex-end;
        }

        @media only screen and (max-width: 767px) {
          .chart-container {
            justify-content: flex-start;
          }
        }
      `}</style>
    </div>
  );
}

export default GoalChart;