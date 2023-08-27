import { StaticImageData } from "next/image";

export interface Ibuttons {
  text: string;
  href: string;
}
//blog detail page content-types
export interface blogTypes {
  id: string;
  image: StaticImageData;
  secondImage: StaticImageData;
  thirdImage?: any;
  title: string;
  time: string;
  heading: string;
  subheading?: string;
  paragraphOne?: string;
  paragraphTwo?: string;
  paragraphThree?: string;
  paragraphFour?: string;
  paragraphFive?: string;
  paragraphSix?: string;
  paragraphSeven?: string;
  facebookLink?: string;
  twitterLink?: string;
  pintrestLink?: string;
}

//type of collection slider located in home page
export interface collectionDataProps {
  id: number;
  image: StaticImageData;
  title: string;
  quantity: number;
  link: string;
}
export interface collectionArray {
  data: collectionDataProps[];
}
//type of tate , leather and shoulder bags located in home page
export interface CarouselProps {
  id: string;
  image: {
    id: number;
    img: StaticImageData;
  }[];

  title: string;
  price: number;
  disPrice?: number;
  icon?: string[];
  review?: number;
  color?: string;
  sale?: string;
  questionsAndAnswers?: {
    id: number;
    question: string;
    answer: string;
  }[];
  checkAvailableAddress?: {
    id: number;
    firstStore: string;
    street: string;
    road: string;
    country: string;
    secondStore: string;
    secondStreet: string;
    secondRoad: string;
    secondCountry: string;
  }[];
}
//type used in detail page of home slider components
export interface CarouselArray {
  data: CarouselProps[];
  link?: string;
  title: string;
}
//type used for product component present in detail page of products
export interface FaqArrayProps {
  dataArray: CarouselProps[];
}
//same. used in detail page of products
export interface FaqProps {
  id: number;
  question: string;
  answer: string;
}
//for product availability in detail page of products
export interface prodAvl {
  selectSize: string;
  data: CarouselProps[];
}
