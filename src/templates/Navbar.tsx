import LiTem from "../components/navigation/LiTem";
import { NavbarTwoColumns } from "../components/navigation/NavbarTwoColumns";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <NavbarTwoColumns logo={<Logo width={150} height={150} />}>
      <LiTem url="/mna" label="양도양수" />
      <LiTem url="/incorporation" label="법인설립" />
      <LiTem url="/registration" label="신규등록" />
      <LiTem url="/firmdiagnosis" label="기업진단" />
      <LiTem url="/clientservice" label="고객지원" />
    </NavbarTwoColumns>
  );
}
