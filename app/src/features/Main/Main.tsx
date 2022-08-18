import Transition from "../../components/Transition/Transition";
import { FadeInOutVariants } from "../../constants/variants";
import { selectSelectedPane } from "../../redux/selectors/mainSelectors";
import { useAppSelector } from "../../redux/store";
import { PaneType } from "../../ts/interfaces/main_interfaces";
import Cup from "./Cup/Cup";
import Drink from "./Drink/Drink";
import { MainFlexbox } from "./Main.styles";
import Start from "./Start/Start";

const displayPane = (pane: PaneType) => {
	if (pane === "Start") {
		return <Start />;
	} else {
		return <Drink />;
	}
};

type Props = {};

const Main = (props: Props) => {
	const selectedPane = useAppSelector(selectSelectedPane);

	return (
		<Transition variants={FadeInOutVariants}>
			<MainFlexbox>
				{displayPane(selectedPane)}
				<Cup />
			</MainFlexbox>
		</Transition>
	);
};

export default Main;
