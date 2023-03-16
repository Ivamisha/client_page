import { FC } from "react";
import "./style.scss";
import { SearchBar } from "../UI";
import ProgressBar from "../UI/ProgressBar/ProgressBar";

const Header: FC = () => {
  return (
    <div className="header">
      <ProgressBar
        text="Новые звонки"
        colorText="20 из 30 шт"
        count={25}
        linearColor="red"
      />

      <ProgressBar
        text="Новые звонки"
        colorText="20 из 30 шт"
        count={25}
        linearColor="red"
      />

      <ProgressBar
        text="Новые звонки"
        colorText="20 из 30 шт"
        count={25}
        linearColor="red"
      />
      <SearchBar placeholder="ИП Сидорова Александра Михайловна" />
    </div>
  );
};
export default Header;
