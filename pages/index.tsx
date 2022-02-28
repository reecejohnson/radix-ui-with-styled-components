import AccordionExample from "../lib/components/accordion-example";
import styled from "styled-components";
import TabExample from "../lib/components/tab-example";

const Grid = styled.div`
  display: grid;
  gap: 10rem;
`;

export default function Index() {
  return (
    <Grid>
      <AccordionExample />
      <TabExample />
    </Grid>
  );
}
