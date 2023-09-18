import Image from "next/image";
import profileImage from "../../../../../public/img/IMG_1583.webp";

export const ProfilePict = () => {
  return (
    <>
      <div
        className="bg-[url('/img/shape.png')] bg-[length:423px_610px] bg-no-repeat h-[610px]
          relative max-[640px]:bg-[length:350px_528px]"
      ></div>
      <Image
        src={profileImage}
        alt="Profile picture"
        width={400}
        height={520}
        className="mt-[-560px] rounded-md"
      />
    </>
  );
};
