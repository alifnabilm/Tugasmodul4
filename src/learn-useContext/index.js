import { RootContext } from "../App";
import "./index.css";
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
    link: "https://www.instagram.com/mdf_muzifar/",
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
