/** @jsx jsx */
import { jsx, Styled, Box, Select, Textarea, Grid } from "theme-ui";
import Button from "../components/Button";
import MaterialField from "../components/MaterialField";
import Field from "../components/Field";
import Variants from "./variants";

export default () => (
  <div>
    <Styled.h2>Buttons</Styled.h2>
    <Variants as={Button} type="buttons" text="Button" />
    <Box sx={{ width: ["full", "full", 8, 5] }}>
      <Styled.h2>Form Fields</Styled.h2>
      <MaterialField label="Material" name="material" />
      <Grid gap={[3, 3, 3, 7]} py={5} columns={2}>
        <Field label="Email" name="email2" />
        <Field as={Select} label="Greeting" name="greeting">
          <option>Hello</option>
          <option>Hi</option>
          <option>Beep</option>
          <option>Boop</option>
        </Field>
      </Grid>
      <Field as={Textarea} label="Description" rows={8} name="description" />
      <Button mt={4}>Submit</Button>
      <Styled.h2>Status</Styled.h2>
      <Field label="Focus" name="error" status="focus" />
      <Box mt={5}>
        <Field
          label="Error"
          name="error"
          status="error"
          error="This is one error"
        />
      </Box>
    </Box>
  </div>
);
