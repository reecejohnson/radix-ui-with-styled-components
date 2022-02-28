import * as Accordion from "@radix-ui/react-accordion";
import styled, { css, keyframes } from "styled-components";

const RootAccordion = styled(Accordion.Accordion)<{ collapsible: boolean }>`
  max-width: 20em;
  font-family: "sans-serif";
`;

const AccordionItem = styled(Accordion.AccordionItem)`
  border-bottom: 1px solid white;
`;

const AccordionHeader = styled(Accordion.Header)`
  margin: 0;
`;

const AccordionTrigger = styled(Accordion.AccordionTrigger)`
  width: 100%;
  text-align: inherit;
  box-sizing: border-box;
  appearance: none;
  border: none;
  padding: 10px;
  background-color: black;
  color: white;
  font-family: inherit;
  font-size: 1.2em;
  --shadow-color: crimson;

  &:focus {
    outline: none;
    box-shadow: inset 0 -5px 0 0 var(--shadow-color);
    color: red;
  }

  &[data-disabled] {
    color: blue;
  }

  &[data-state="open"] {
    background-color: red;
    color: white;

    &:focus {
      --shadow-color: #111;
      color: black;
    }
  }
`;

const open = keyframes`
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
`;

const close = keyframes`
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
`;

const animatedContentClass = css`
  overflow: hidden;
  &[data-state="open"] {
    animation: ${open} 300ms ease-out;
  }
  &[data-state="closed"] {
    animation: ${close} 300ms ease-out;
  }
`;

const AccordionContent = styled(Accordion.AccordionContent)`
  line-height: 1.5;
  ${animatedContentClass};
`;

const AccordionContentItem = styled.div`
  padding: 1rem;
`;

export default function AccordionExample() {
  return (
    <div>
      <h1>Accordion</h1>
      <RootAccordion type="single" collapsible>
        <AccordionItem value="one">
          <AccordionHeader>
            <AccordionTrigger>One</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <AccordionContentItem>
              Per erat orci nostra luctus sociosqu mus risus penatibus, duis
              elit vulputate viverra integer ullamcorper congue curabitur
              sociis, nisi malesuada scelerisque quam suscipit habitant sed.
            </AccordionContentItem>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="two">
          <AccordionHeader>
            <AccordionTrigger onClick={() => console.log("two clicked")}>
              Two
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <AccordionContentItem>
              Cursus sed mattis commodo fermentum conubia ipsum pulvinar
              sagittis, diam eget bibendum porta nascetur ac dictum, leo tellus
              dis integer platea ultrices mi.
            </AccordionContentItem>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="three" disabled>
          <AccordionHeader>
            <AccordionTrigger>Three (disabled)</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <AccordionContentItem>
              Sociis hac sapien turpis conubia sagittis justo dui, inceptos
              penatibus feugiat himenaeos euismod magna, nec tempor pulvinar eu
              etiam mattis.
            </AccordionContentItem>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="four">
          <AccordionHeader>
            <AccordionTrigger>Four</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <AccordionContentItem>
              Odio placerat <a href="#">quisque</a> sapien sagittis non sociis
              ligula penatibus dignissim vitae, enim vulputate nullam semper
              potenti etiam volutpat libero.
              <button>Cool</button>
            </AccordionContentItem>
          </AccordionContent>
        </AccordionItem>
      </RootAccordion>
    </div>
  );
}
