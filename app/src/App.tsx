import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import Transition from "./components/Transition/Transition";
import { FadeInOutVariants } from "./constants/variants";
import Launch from "./features/Launch/Launch";
import Login from "./features/Login/Login";
import Main from "./features/Main/Main";
import RecordsList from "./features/Records/List/RecordsList";
import RecordsProgress from "./features/Records/Progress/RecordsProgress";
import Signup from "./features/Signup/Signup";
import { useAuthCheck } from "./hooks/useAuthCheck";
import { useMenuSetter } from "./hooks/useMenuSetter";
import { useRendererListen } from "./hooks/useRendererListen";
import { useTheme } from "./hooks/useTheme";
import "./styles/chakraui.css";
import "./styles/index.css";
import { setupSounds } from "./utils/utils";

export const { waterClickSound, waterPourSound } = setupSounds();

type Props = any;

const App = (props: Props) => {
	const { initialLoading } = useAuthCheck();
	useMenuSetter();
	useTheme();
	useRendererListen();
	const location = useLocation();
	console.log(location);
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				{initialLoading ? (
					<Route
						path="*"
						element={
							<Transition variants={FadeInOutVariants}>
								<Loader fullPage />
							</Transition>
						}
					/>
				) : (
					<>
						<Route path="/" element={<Launch />} />
						<Route path="signup" element={<Signup />} />
						<Route path="login" element={<Login />} />
						<Route element={<Header />}>
							<Route path="records">
								<Route path="list" element={<RecordsList />} />
								<Route path="progress" element={<RecordsProgress />} />
							</Route>
							<Route path="main" element={<Main />} />
						</Route>
					</>
				)}
			</Routes>
		</AnimatePresence>
	);
};

export default App;
