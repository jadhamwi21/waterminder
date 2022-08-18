import { useRecords } from "../../../hooks/useRecords";
import Chart from "react-apexcharts";
import { RecordsProgressContainer } from "./RecordsProgress.styles";
import Loader from "../../../components/Loader/Loader";

type Props = {};

const RecordsProgress = (props: Props) => {
	const { records, loading } = useRecords();

	const chartOptions: ApexCharts.ApexOptions = !loading && {
		stroke: {
			curve: "smooth",
			colors: ["var(--blue)"],
		},
		markers: {
			size: 4,
		},
		tooltip: {
			fillSeriesColor: true,
			x: {
				show: false,
			},
		},
		xaxis: {
			title: {
				text: "Date",
				style: { fontWeight: 500 },
			},
		},
		yaxis: {
			title: {
				text: "Liters",
				style: { fontWeight: 500 },
			},
		},
		chart: {
			fontFamily: "Roboto, sans-serif !important",
			foreColor: "var(--black)",
			toolbar: {
				show: true,
				tools: {
					download: false,
					selection: false,
					pan: true,
					zoom: false,
					zoomin: true,
					zoomout: true,
				},
			},
		},
	};

	const chartSeries = !loading && [
		{
			name: "Liters",
			data: records.map((record) => ({
				x: record.timestamp,
				y: record.liters,
			})),
		},
	];

	console.log(records);
	return (
		<RecordsProgressContainer>
			{loading ? (
				<Loader />
			) : (
				<Chart
					type="line"
					options={chartOptions}
					series={chartSeries}
					width="600px"
					height="400px"
				/>
			)}
		</RecordsProgressContainer>
	);
};

export default RecordsProgress;
