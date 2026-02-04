import Main from "@/components/html/{Main}/Main";
import H1 from "@/components/html/{H1}/H1";

export default function Page() {

  return (
    <Main>
      <H1
      id={`index_H1`}
      animations={[
        { 
          name: 'textReveal'
        }
      ]} 
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </H1>
    </Main>
  );
}
