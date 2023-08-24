import Image,{ StaticImageData } from "next/image";
export type Product=
{
    id:number;
    // category:string;
    heading:string;
    year:string|number;
    paragraph:string;
    image:string | StaticImageData;
}