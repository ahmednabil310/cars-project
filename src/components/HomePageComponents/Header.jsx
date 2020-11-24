import '../../styles/HomePageStyles/Header.css';


// the hook
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container-fluid header-container text-center">
      <h1 className="main-title">{t("WORRIED")}</h1>
      <h2 className="sub-title">{t("WHICH CAR TO CHOOSE")}</h2>
    </div>
  );
};

export default Header;
