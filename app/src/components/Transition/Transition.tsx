import React from "react";
import { motion, Variants } from "framer-motion";
type Props = {
	children: React.ReactNode;
	variants: Variants;
};

const Transition = ({ children, variants }: Props) => {
	return (
		<motion.div
			initial="hidden"
			animate="enter"
			exit="exit"
			variants={variants}
			transition={{ duration: 0.16, ease: "linear" }}
			style={{
				backgroundColor: "var(--white)",
				width: "100%",
				display: "grid",
				placeItems: "center	",
			}}
		>
			{children}
		</motion.div>
	);
};

export default Transition;
