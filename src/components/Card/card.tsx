import Image from "next/image";
import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  description?: string;
  image?: { src: string; url: string; alt: string };
  title?:
    | string
    | {
        text: string;
        url: string;
      };
}

export const Card = (props: CardProps) => {
  const { children, description, image, title } = props;
  console.log("props", props);
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      {image && (
        <a className="block px-4 pt-4" href={image.url}>
          <Image alt={image.alt} src={image.src} />
        </a>
      )}
      <div className="p-6">
        {title && (
          <h4
            className={`mb-3 text-xl font-semibold text-black  dark:text-white ${
              typeof title === "object"
                ? "hover:text-primary dark:hover:text-primary"
                : ""
            } `}
          >
            {typeof title === "string" ? (
              title
            ) : (
              <a href={title.url}>{title.text}</a>
            )}
          </h4>
        )}
        {description && <p>{description}</p>}
        {children}
      </div>
    </div>
  );
};
