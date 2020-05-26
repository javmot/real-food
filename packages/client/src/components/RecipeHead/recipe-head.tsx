/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Grid, Box, Image, Heading } from "@real-food/theme";
import { RecipeHeadProps } from "./types";
import InfoSummary from "../InfoSummary";
import { getInfoSummaryProps } from "./utils";

const RecipeHead: FunctionComponent<RecipeHeadProps> = ({ recipe }) => (
	<Grid pt={4} columns={[1, 1, "2fr 3fr", "3fr 4fr"]}>
		<Box>
			<Heading mt={3} as="h1">
				{recipe.title}
			</Heading>
			<InfoSummary data={getInfoSummaryProps(recipe)} />
		</Box>
		<Box pt={3}>
			<Image
				alt={recipe.title}
				src="https://img.freepik.com/foto-gratis/ensalada-pechuga-pollo-parrilla-vegetales-frescos-tomates-pepinos-hojas-lechuga-ensalada-pollo-comida-sana_2829-4246.jpg?size=626&ext=jpg"
			/>
		</Box>
	</Grid>
);

export default RecipeHead;
