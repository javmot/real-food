import React from "react";
import { Styled, Box } from "@real-food/theme";
import { StepsSectionProps } from "./interfaces";
import withQueryData from "../../lib/with-query-data";

const StepsSection = ({ steps = [] }: StepsSectionProps) => {
	return (
		<Box>
			<Styled.h1 as="h2">{steps.length} Steps</Styled.h1>
			{steps.map((step) => (
				<Box key={step.id}>
					<Styled.h3>{step.title}</Styled.h3>
					{step.img && <img src={step.img} alt={step.title} />}
					<Styled.p>{step.description}</Styled.p>
				</Box>
			))}
		</Box>
	);
};

export default withQueryData(StepsSection);
