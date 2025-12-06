import TextReveal from "@/components/[TextReveal]/TextReveal";
import ThemeSelector from "@/components/[ThemeSelector]/ThemeSelector";
import Main from "@/components/[Main]/Main";
import H1 from "@/components/[H1]/H1";

export default function Page() {

  return (
    <Main>
      <ThemeSelector/>  
      <H1>
        <TextReveal>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </TextReveal>
      </H1>
    </Main>
  );
}
