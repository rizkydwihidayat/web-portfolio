import Link from "next/link";
import Image from "next/image";

import instagram from "../../../../../public/img/Instagram.png";
import dribbble from "../../../../../public/img/Dribbble.png";
import linkedIn from "../../../../../public/img/LinkedIn.png";

export const SocialMediaComponent = () => {
  return (
    <>
      <div className="grid grid-cols-3 w-[125px] gap-2">
        <div>
          <Link
            href="https://instagram.com/rizkydwihid?igshid=YTQwZjQ0NmI0OA=="
            target="_blank"
          >
            <Image src={instagram} alt="IG icon" width={24} height={24} />
          </Link>
        </div>
        <div>
          <Link href="https://dribbble.com/rdhidayat" target="_blank">
            <Image src={dribbble} alt="dribbble icon" width={24} height={24} />
          </Link>
        </div>
        <div>
          <Link
            href="https://www.linkedin.com/in/rizky-dwi-hidayat/"
            target="_blank"
          >
            <Image src={linkedIn} alt="linkedIn icon" width={24} height={24} />
          </Link>
        </div>
      </div>
    </>
  );
};
