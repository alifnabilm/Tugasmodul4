import { RootContext } from "../App";
const dataContext = [
   {
    nama: "Shafiyah Huyai",
    link: "https://www.instagram.com/huyaiiou/",
  },
  {
    nama: "Alif Nabil Musyafa",
    link: "",
  },
  {
    nama: "Yusuf Hammadi",
    link: "",
  },
  {
    nama: "M. Dzikrullah Farhan",
    link: "",
  },
];
export default function Index() {
  return (
<RootContext.Consumer>
        {(value) => {
          value.isiData(dataContext);
        }}
      </RootContext.Consumer>
  );
}
