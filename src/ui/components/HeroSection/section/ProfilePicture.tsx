import Image from "next/image";
import profileImage from "../../../../../public/img/IMG_1583.webp";

export const ProfilePict = () => {
  return (
    <>
      <div
        className="bg-[url('/img/shape.png')] bg-[length:423px_610px] bg-no-repeat h-[610px]
          relative max-[640px]:bg-[length:350px_520px] min-[1280px]:bg-[length:340px_500px]
          min-[1440px]:bg-[length:425px_610px]"
      ></div>
      <Image
        src={profileImage}
        alt="Profile picture"
        className="mt-[-560px] rounded-md max-[640px]:w-[330px] max-[640px]:w-[330px]
        min-[1280px]:w-[320px] min-[1280px]:h-[420px] min-[1440px]:w-[400px] min-[1440px]:h-[520px]"
      />
    </>
  );
};
