import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import * as Constants from './constants.js';


export const pie_chart_options = {
	backgroundColor: '#f2f2f2',
	title: "KYC Application Reports",
	is3D: true,
	//fontSize: 12,
	fontName: "arial, sans-serif",
	chartArea: {left:5, top: 50,'width': '100%', 'height': '100%'},
	legend: { textStyle: {fontSize: 17}},
	titleTextStyle: {
       // color: <string>,   
        fontName: "arial, sans-serif", 
        fontSize: 24, 
        bold: true,  
        italic: false  
    }
}

function TableReports({reports})
{   
	const rows=[];
	reports.forEach(report => {
		rows.push( <TableRow report= {report} />);
	});
	return (
		<table>
			<tr>
				<th>Created</th>
				<th>Name</th>
				<th>Type</th>
				<th>Risc Score</th>
				<th>Status</th>
			</tr>
			<tbody>{rows}</tbody>
			
		</table>

	);
}

function TableRow({report})
{
return (
<tr>   
	<td> {  report.created_date }  <div className="time_format"> {report.created_time} </div> </td>
	<td>{report.Name} <div className="email_format">   {report.email}     </div>    </td>
	<td>{report.type}</td>
	<td> { report.risk_score != "Not calculated" ? <div> <FontAwesomeIcon icon={faCircleCheck}/> { report.risk_score } </div> :   report.risk_score } </td>
	<td>{report.status != "Approved"  ? <div> <FontAwesomeIcon icon={faEllipsis}/> { report.status } </div> : report.status } </td>
	
</tr>
);
}

function App() {
  return (
	<div className="dashboard">
	< span className="dashboard_title"  >Dashboard</span>
    <Chart className="chart"
	chartType="PieChart"
	data={Constants.pie_chart_data}
	options={pie_chart_options}
	width={"400px"}
	height={"300px"}
	/>
	<TableReports reports= {Constants.reports}/>
	</div>
  );
}

export default App;
