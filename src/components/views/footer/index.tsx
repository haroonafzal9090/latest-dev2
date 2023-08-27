import Image from "next/image";
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import Amex from "@/components/assets/images/footer/amex.png"
import ApplePay from "@/components/assets/images/footer/apple-pay.png"
import DinerClub from "@/components/assets/images/footer/diners-club.png"
import Discover from "@/components/assets/images/footer/discover.png"
import Visa from "@/components/assets/images/footer/visa.png"
import GooglePay from "@/components/assets/images/footer/google-pay.svg"
import MasterCard from "@/components/assets/images/footer/mastercard.svg"
import Masestro from "@/components/assets/images/footer/maestro.svg"
import Link from "next/link";


function Footer() {
    return (
        <div className="bg-gray-800">
            <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-x-5 gap-y-10 text-white lg:p-24 md:p-10 px-8 py-12">
                {/* About */}
                <div className='lg:col-span-4 w-[90%] md:w-full'>
                    <h2 className='text-[16px] font-semibold'>About your store</h2>
                    <p className='pt-4'>
                        We dare to be different and we invite you to do the same. We'd love
                        you to join us on this colourful adventure of being you. You are
                        here to be yourself. Fully and unapologetically.
                    </p>
                    <p className='pt-4'>Now, let's show to the world what we are made of!</p>
                    {/* Icons */}
                    <div className='flex items-center gap-x-7 mt-8'>
                        <div>
                            <Link href={"/"} title="Facebook">
                                <AiFillFacebook className='h-8 w-8' />
                            </Link>
                        </div>
                        <div>
                            <Link href={"/"} title="Instagram">
                                <AiFillInstagram className='h-8 w-8' />
                            </Link>
                        </div>
                        <div>
                            <Link href={"/"} title="Youtube">
                                <BsYoutube className='h-8 w-8' />
                            </Link>
                        </div>
                    </div>
                    <p className='xl:pt-16 md:pt-8 md:flex hidden'>© 2023 Betty. Shopping Cart by Shopify</p>
                </div>
                {/* Quick Links */}
                <div className='w-[90%] md:w-full lg:col-span-2 xl:ml-5'>
                    <h2 className='text-[16px] font-semibold'>Quick links</h2>
                    <div className='leading-8 pt-4'>
                        <Link href={"/"} ><p>Search</p></Link>
                        <Link href={"/"} ><p>About Us</p></Link>
                        <Link href={"/"} ><p>Contact Us</p></Link>
                    </div>
                </div>
                {/* Shop */}
                <div className='w-[90%] md:w-full lg:col-span-3'>
                    <h2 className='text-[16px] font-semibold'>Shop</h2>
                    <div className='leading-8 pt-4'>
                        <Link href={"/"} ><p>All Collections</p></Link>
                        <Link href={"/"} ><p>Silicone Collection</p></Link>
                        <Link href={"/"} ><p>Leather Like Collection</p></Link>
                    </div>
                </div>
                {/* Stay in touch */}
                <div className='lg:col-span-3 w-[90%] md:w-full'>
                    <h2 className='text-[16px] font-semibold'>Let's stay in touch</h2>
                    <p className='pt-4'>
                        Sign up for exclusive offers, original stories, events and more.
                    </p>
                    <div className='py-8'>
                        <div className='flex items-center gap-x-3 border-b pb-2'>
                            <input type="text" className='px-2 focus:outline-none w-[90%] bg-transparent md:w-full' placeholder='Enter Email' />
                            <BsArrowRight size={20} />
                        </div>
                    </div>
                    {/* Desktop view of payment icons  */}
                    <div className='md:flex gap-x-3 md:justify-end lg:mt-[87px] mt-12 hidden'>
                        <Image src={Amex} alt='amex' width={40} height={40} />
                        <Image src={ApplePay} alt='apple-pay' width={40} height={40} />
                        <Image src={DinerClub} alt='diners-club' width={40} height={40} />
                        <Image src={Discover} alt='discover' width={40} height={40} />
                        <Image src={Visa} alt='visa' width={40} height={40} />
                        <Image src={GooglePay} alt='visa' width={40} height={40} />
                        <Image src={MasterCard} alt='visa' width={45} height={45} />
                        <Image src={Masestro} alt='visa' width={45} height={45} />
                    </div>
                    {/* Mobile view of payment icons*/}
                    <div className='mt-8 md:hidden'>
                        <div className='flex gap-x-3'>
                            <Image src={Amex} alt='amex' width={40} height={40} />
                            <Image src={ApplePay} alt='apple-pay' width={40} height={40} />
                            <Image src={DinerClub} alt='diners-club' width={40} height={40} />
                            <Image src={Discover} alt='discover' width={40} height={40} />
                        </div>
                        <div className='flex gap-x-3'>
                            <Image src={Visa} alt='visa' width={40} height={40} />
                            <Image src={GooglePay} alt='visa' width={40} height={40} />
                            <Image src={MasterCard} alt='visa' width={45} height={45} />
                            <Image src={Masestro} alt='visa' width={45} height={45} />
                        </div>
                    </div>
                    <div className='flex gap-x-4 lg:pt-4 pt-3 md:justify-end'>
                        <Link href={"/"}><p>Search</p></Link>
                        <Link href={"/"}><p >About us</p></Link>
                        <Link href={"/"}><p>Contact us</p></Link>
                    </div>
                    <p className='pt-16 md:hidden'>© 2023 Betty. Shopping Cart by Shopify</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;



