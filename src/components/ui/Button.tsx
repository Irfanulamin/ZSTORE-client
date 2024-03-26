import { Button as NextUIButton } from "@nextui-org/button";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface CustomButtonProps {
  link: string;
  content: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ link, content }) => {
  return (
    <Link href={link}>
      <NextUIButton
        radius="full"
        className="bg-black text-white text-base flex items-center"
      >
        {content}
        <IoIosArrowForward />
      </NextUIButton>
    </Link>
  );
};

export default CustomButton;
