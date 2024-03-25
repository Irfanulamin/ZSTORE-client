import { Button as NextUIButton } from "@nextui-org/button";
import Link from "next/link";

interface CustomButtonProps {
  link: string;
  content: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ link, content }) => {
  return (
    <Link href={link}>
      <NextUIButton radius="full" className="bg-black text-white text-base">
        {content}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </NextUIButton>
    </Link>
  );
};

export default CustomButton;
