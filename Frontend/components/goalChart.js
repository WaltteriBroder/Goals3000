import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import addYears from 'date-fns/add_years';
import differenceInDays from 'date-fns/difference_in_days';
import addDays from 'date-fns/add_days';

const GoalChart = ({ goal }) => {
  
  let startDate = new Date(goal.added);
  let endDate = addYears(startDate, 1); // kovakoodataan goal vuoden mittaseks
  let lengthInDays = differenceInDays(endDate, startDate) - 1;
  let daily = Number(goal.quantity / lengthInDays);
  
  let data = [];
  for (let i = 1; i <= lengthInDays; i++) {
    data.push({
      name: `${addDays(startDate, i).toLocaleDateString()}`,
      target: daily*i,
      progress: 0
    });
  }

  return (
    <div className="chart-container">
      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={data}
                   margin={{top: 0, right: 10, left: 0, bottom: 0}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval="preserveStartEnd" minTickGap={10} />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="monotone" dataKey="target" stroke="#0366d6" dot={false} />
          <Line type="monotone" dataKey="progress" stroke="#82ca9d" dot={false} />
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

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="tooltip">
        <div className="label">
          {label}
        </div>
        <div style={{color: '#0366d6'}}>
          {`${payload[0].dataKey}: ${payload[0].value.toFixed(0)}`}
        </div>
        <div style={{color: '#82ca9d'}}>
          {`${payload[1].dataKey}: ${payload[1].value.toFixed(0)}`}
        </div>

        <style jsx>{`
          .tooltip {
            background-color: #fff;
            border: 1px solid #d1d5da;
            padding: 1rem;
          }

          .label {
            padding-bottom: .5rem;
          }
        `}</style>
      </div>
    );
  }

  else return null;
}

export default GoalChart;