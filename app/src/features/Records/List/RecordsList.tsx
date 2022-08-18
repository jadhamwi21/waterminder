import { Select } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Loader from "../../../components/Loader/Loader";
import Transition from "../../../components/Transition/Transition";
import Typography from "../../../components/Typography/Typography";
import { FadeInOutVariants } from "../../../constants/variants";
import { useRecords } from "../../../hooks/useRecords";
import { RecordRow, RecordsListContainer } from "./RecordsList.styles";

type Props = {};

const RecordsList = (props: Props) => {
	const { records, loading, sort, sortChangeHandler } = useRecords();
	return (
		<Transition variants={FadeInOutVariants}>
			<RecordsListContainer>
				<Select
					value={sort}
					onChange={sortChangeHandler}
					width="20%"
					marginBottom="1em"
				>
					<option
						value={"By Date"}
						key={"By Date"}
						style={{ backgroundColor: "var(--white)" }}
					>
						By Date
					</option>
					<option
						value={"By Liters"}
						key={"By Liters"}
						style={{ backgroundColor: "var(--white)" }}
					>
						By Liters
					</option>
				</Select>
				<AnimatePresence exitBeforeEnter>
					<Transition variants={FadeInOutVariants} key={loading ? 1 : 0}>
						{loading ? (
							<Loader margin="4em 0" />
						) : (
							<>
								{" "}
								{records.length === 0 && (
									<Typography>No Records Found</Typography>
								)}
								{records.map((record) => (
									<RecordRow>
										<div>{record.timestamp}</div>
										<div>{record.liters}</div>
									</RecordRow>
								))}
							</>
						)}
					</Transition>
				</AnimatePresence>
			</RecordsListContainer>
		</Transition>
	);
};

export default RecordsList;
