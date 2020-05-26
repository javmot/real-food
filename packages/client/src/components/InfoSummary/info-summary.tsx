/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Flex, Box, Text } from "@real-food/theme";
import { InfoSummaryProps } from "./types";

const InfoSummary: FunctionComponent<InfoSummaryProps> = ({ data = [] }) => {
	if (!data.length) {
		return <></>;
	}

	return (
		<Flex>
			{data.map(({ count, measure }, idx) => (
				<Box
					key={measure}
					pr={4}
					sx={{
						textAlign: "center",
						...(idx !== 0 && {
							borderLeft: 1,
							pl: 4,
						}),
					}}
				>
					<Text variant="big">{count}</Text>
					<Text variant="small">{measure}</Text>
				</Box>
			))}
		</Flex>
	);
};

export default InfoSummary;
