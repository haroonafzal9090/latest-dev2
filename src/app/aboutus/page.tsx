import Image from "next/image";
import about_image from "../../components/assets/images/aboutus/about-image.jpg";
function Page() {
  return (
    <div>
      <div className="w-full flex flex-col px-6 py-8 lg:">
        {/* Heading-div */}
        <div className=" flex flex-col items-center py-6">
          <h1 className="font-normal text-2xl lg:text-5xl text-gray-800">
            About Us
          </h1>
          <div className="w-10 h-[2px] bg-gray-700 mt-5"></div>
        </div>

        {/* Image-div */}
        <div className="">
          <Image
            src={about_image}
            width={500}
            height={500}
            alt="about us"
            className="m-auto w-[700px]"
          />
        </div>

        {/* Paragraph div */}
        <div
          className="m-auto max-w-[700px] text-sm  lg:text-md text-gray-700 py-6
        flex flex-col gap-6"
        >
          <p>
            It started off as a small idea between four friends one day, when we
            realised there was a gap in the market that no one else seemed to be
            filling. When you see an opportunity like that, you have three
            choices.
          </p>

          <div>
            <li>
              {" "}
              Have a conversation about why no one has filled it and hope
              someone does one day.
            </li>
            <li>
              {" "}
              Have a conversation about how maybe you should all fill it one day
              - and then do something else.
            </li>
            <li>Stop doing what you're doing and fill that gap!</li>
          </div>

          <p>
            Needless to say, we chose option 3 and have never looked back. We
            run our business from a small but gorgeous space, based just outside
            London. We are extremely focused on customer satisfaction and we
            only use the finest and strongest materials, all of which are
            ethically sourced. We pride ourselves on how tough our products are,
            the quality being second to none. Having some fantastic
            collaborators who have helped us reach a point in our extraordinary
            journey has enabled our brand to grow, reflecting everything that we
            feel is important in the lives that we lead.
          </p>
          <p>
            We hope you enjoy browsing through our range of products. If you
            have any questions, please don't hesitate to contact us.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Page;
