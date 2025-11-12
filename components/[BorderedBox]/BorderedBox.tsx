import theme from "@/themes/pantone2025.json";

const BorderedBox: React.FC = () => {

  return (
      <div className="border-8 border-[#eee] p-4 mb-12">
        <h6 className={`${theme.styles.h6} text-white`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit laborum.
        </h6>
        <h2 className={`${theme.styles.h2} text-white`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit laborum.
        </h2>
      </div>
  );
}

export default BorderedBox;
