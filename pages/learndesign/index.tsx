import React from 'react';
import Template from '../../components/Template';
import Image from 'next/image';

const LearnDesign = () => {
    const Mentors = [
        {
            id: '1',
            name: 'Andrew Daniels',
            position: 'Head of Design @Flutterflow',
            note: '"Mentoring allows me to pass off the 9 years of experience and over 100 projects I have worked on to other people who want to learn how to solve problems through design. This mentorship is vastly important for new designers, learning what it is actually like in the industry instead of just reading from a book or putting together a sample project"',
            img: '/Images/andrew.webp'
        },
        {
            id: '2',
            name: 'Iker Fernandez',
            position: 'Lead Product Designer @Payfit',
            note: '"During my career, I have been fortunate to be mentored by people that had a huge positive impact professionally, but that also helped me grow as a person. I hope I can help others learn and reach their goals"',
            img: '/Images/iker.webp'
        },
        {
            id: '3',
            name: 'Allison Zadrozny',
            position: 'Design Lead @Bonsai.io',
            note: '”My mentors helped me to have confidence in both the way I think about design and my execution skills. I love that, in this place of my career, I have the opportunity to uplift others and help them distill their style - and, learn something in turn!”',
            img: '/Images/allison.webp'
        }
    ];
    return (
        <>
            {/*  <Template /> */}
            <div className="grid">
                <div className="flex justify-between lg:p-4 mt-9 mx-8 lg:px-10">
                    <div>
                        <ul className="grid grid-flow-col gap-8 overscroll-contain">
                            <li className="text-[0.90em] text-gray-500">
                                <a href="">Full-Time Job Board</a>
                            </li>
                            <li className="text-[0.90em] text-gray-500">
                                <a href="">FreeLance Job</a>
                            </li>
                            <li className="text-[0.90em] text-gray-500">
                                <a href="">Designer Search</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" lg:flex justify-around mt-[4em]">
                <div className="lg:w-[45%] m-8">
                    <h1 className="font-bold  text-4xl lg:text-7xl mb-4">
                        Learn design online with industry leaders
                    </h1>
                    <p className="lg:w-[75%] text-gray-700 text-xl leading-relaxed">
                        Ready to invest in your design career? Browse our
                        catalog of highly interactive, online design courses
                        taught by the best in the industry.
                    </p>
                    <div className="mt-4">
                        <button className="bg-pink-500 w-[10em] h-[3.1em] text-sm font-bold p-1 rounded-xl text-white">
                            Browse Course
                        </button>
                    </div>
                </div>
                <div className="">
                    <Image
                        height="10"
                        width="450"
                        src="/Images/hiring.webp"
                        alt=""
                        className="w-[90%] ml-[1em] lg:w-[28em] lg:m-[3em]  border rounded-3xl"
                    />
                </div>
            </div>
            <p className="ml-[5em] mt-[5em] text-[#4d44c6] text-[12px] font-bold">
                CERTIFIED COURSES{' '}
            </p>
            <div className=" mt-[4em] lg:flex justify-around grid justify-center">
                <div className="lg:w-[40em] m-8">
                    <p className="w-[70%] lg:w-[12em] font-bold text-4xl lg:text-5xl mb-4">
                        Learn Product Design in 16 weeks
                    </p>
                    <p className="lg:w-[42em]  text-[17px] leading-7">
                        Launch your Product Design career in just 16 weeks with
                        Dribbble&apos;s zero-to-career-ready Product Design course!
                        Complete industry-relevant projects alongside a
                        handpicked mentor, master essential design tools and
                        practices, build an interview-ready portfolio, and get
                        connected to a vast network of hiring managers.
                    </p>
                    <div className="lg:w-[45em]  grid lg:grid-cols-3  gap-4 mt-[3em]">
                        <p className="text-[#4d44c6]  font-bold">
                            Flexible learning<br></br>
                            <span className="text-gray-700 text-sm font-normal">
                                No need to quit your job with our mix of video &
                                live learning.
                            </span>
                        </p>
                        <p className="text-[#4d44c6] font-bold">
                            Mentorship<br></br>
                            <span className="text-gray-700 text-sm font-normal">
                                Attend live, weekly sessions with your design
                                mentor..
                            </span>
                        </p>
                        <p className="text-[#4d44c6] font-bold">
                            Industry relevant curriculum<br></br>
                            <span className="text-gray-700 text-sm font-normal">
                                Work on real-world projects and gain relevant
                                work experience.
                            </span>
                        </p>
                        <div className="mt-4">
                            <button className="bg-pink-500 w-[12em] h-[3.1em] text-sm font-bold p-1 rounded-xl text-white">
                                View course details
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        height="10"
                        width="370"
                        src="/Images/certifiedcourse.jpg"
                        alt=""
                        className="hidden lg:block border rounded-full"
                    />
                </div>
            </div>
            <div className="lg:ml-[2em] mt-[7em] lg:flex justify-around">
                <div className="lg:w-[35em] m-8">
                    <h1 className="font-bold text-2xl mb-[0.5em]">
                        Not sure if you&apos;re ready?
                    </h1>
                    <p className="text-gray-700 text-sm font-normal leading-7">
                        Join our free info session and meet the team to get an
                        introduction to the field of Product Design and learn
                        whether this course is for you.
                    </p>
                </div>
                <div>
                    <div className="lg:flex justify-between border rounded-xl border-gray-300 mb-[5em] m-6 lg:m-2  w-[20em] p-6 lg:w-[35em]">
                        <div className="">
                            <Image
                                src="/Images/ready.jpg"
                                height="10"
                                width="270"
                                alt=""
                                className="border h-[10em] lg:w-[16em] rounded-3xl"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between mb-3 mt-3">
                                <p className="font-bold text-xl w-[8em]">
                                    Introduction to Product Design
                                </p>
                                <button className="bg-[#4bb7bf] w-[3.8em] h-[2.1em] text-sm font-medium p-1 rounded-2xl  text-white ">
                                    Free
                                </button>
                            </div>
                            <div className="flex justify-between mb-3 w-[11em]">
                                <span className="flex">
                                    <Image
                                        src="Images/award.svg"
                                        height="10"
                                        width="18"
                                        alt=""
                                    />
                                    <p className="text-gray-700 text-sm ml=4">
                                        info Session
                                    </p>
                                </span>
                                <span className="flex">
                                    <Image
                                        src="Images/calendar.svg"
                                        height="10"
                                        width="18"
                                        alt=""
                                    />
                                    <p className="text-gray-700 text-sm">
                                        1 hour
                                    </p>
                                </span>
                            </div>
                            <button className="bg-gray-100 w-[16em] h-[3.1em] text-sm font-bold p-1 rounded-md text-black">
                                Learn More
                            </button>
                        </div>{' '}
                    </div>
                </div>
            </div>
            <div className="bg-[#0d0c22] text-white px-[3em] py-[5em] text-[16px]">
                <div className="grid gap-4 lg:w-[41em]">
                    <p className="text-[14px] text-[#dad9f2] font-bold">
                        ABOUT OUR CERTIFIED COURSES
                    </p>
                    <p className="text-3xl font-bold">
                        Learn alongside industry leading mentors
                    </p>
                    <p className="text-[#dad9f2] mb-7">
                        You are not in this alone. As part of this course you&apos;ll
                        be matched with a mentor from our network. Mentors are
                        hand-picked and have at least 4 years of product design
                        experience in reputable design forward companies. Learn
                        from the best in the space, create alongside them, and
                        receive weekly live & asynchronous feedback on
                        real-world projects.
                    </p>
                    <p className="text-2xl font-bold">The mentor network</p>
                    <p className="text-[#dad9f2]">
                        We have carefully curated a network of mentors who we
                        trust and admire for their design career. We will match
                        you with a mentor who is right for you, and who will
                        provide support and guidance throughout your course.
                    </p>
                    <p className="text-[#dad9f2]">
                        You&apos;ll meet with your mentor once a week in an intimate
                        group session to learn key design concepts, ask
                        questions, and discuss your projects. Your mentors will
                        also be available throughout the weeks via online
                        feedback and advice to take you from enrollment to
                        graduation.Not only will you meet with your mentor once
                        a week, in an intimate group session, to learn key
                        design concepts, ask questions and discuss your
                        projects, but they will also be available to you via
                        online feedback and advice to take you from enrollment
                        to graduation.
                    </p>
                </div>

                <div className="mt-[5em] flex justify-between overflow-scroll lg:overflow-hidden">
                    {Mentors.map((mentor, index) => (
                        <div key={index} className="mr-9">
                            <Image
                                src={mentor.img}
                                height="10"
                                width="370"
                                alt=""
                            />
                            <p className="my-2 font-bold text-xl">
                                {mentor.name}
                            </p>
                            <p className="my-2 text-sm">{mentor.position}</p>
                            <p className="text-[#dad9f2] w-[21em]">
                                {mentor.note}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="grid gap-4 mt-[8em]">
                    <p className="text-[#dad9f2] text-[12px] font-bold">
                        WHAT&apos;S INCLUDED
                    </p>
                    <p className="text-3xl font-bold">
                        An immersive and interactive learning experience
                    </p>
                    <p className="text-[#dad9f2] lg:w-[47em]">
                        Our courses are built with students&apos; experience in mind
                        - proven learning principles, mentorship,
                        community-based plus a year of Dribbble Pro; unlocking
                        all the tools you need to transform your career.
                    </p>
                    <div className="grid lg:grid-cols-4 gap-5 justify-between mt-[3em]">
                        <div className="grid gap-3 rounded-lg bg-[rgba(255,255,255,0.06)] p-7">
                            <Image
                                src="/Images/key.svg"
                                height="10"
                                width="20"
                                alt=""
                            />
                            <p className="font-bold">Expert educators</p>
                            <p className="text-[0.8em] w-[18em] leading-relaxed">
                                You&apos;ll learn from the best in the design
                                industry; join MDS and the former hiring manager
                                at Google, for live and interactive sessions.
                            </p>
                        </div>
                        <div className="grid gap-3 rounded-lg bg-[rgba(255,255,255,0.06)] p-7">
                            <Image
                                src="/Images/users.svg"
                                height="10"
                                width="20"
                                alt=""
                            />
                            <p className="font-bold">Live mentorship</p>
                            <p className="text-[0.8em] w-[18em] leading-relaxed">
                                You&apos;ll join a small group of designers for
                                weekly live & interactive mentorship sessions.
                                All our mentors are hand picked and work at top
                                design companies.
                            </p>
                        </div>

                        <div className="grid gap-2 rounded-lg bg-[rgba(255,255,255,0.06)] p-7">
                            <Image
                                src="/Images/video.svg"
                                height="10"
                                width="20"
                                alt=""
                            />
                            <p className="font-bold">Certification</p>

                            <p className="text-[0.8em] w-[18em] leading-relaxed">
                                You will be awarded a signed certificate on
                                completion of your course, and a badge to add to
                                your Dribbble profile.
                            </p>
                        </div>
                        <div className="grid gap-3 rounded-lg bg-[rgba(255,255,255,0.06)] p-7">
                            <Image
                                height="10"
                                width="20"
                                src="/Images/book-open.svg"
                                alt=""
                            />
                            <p className="font-bold"> Project-based learning</p>
                            <p className="text-[0.8em] w-[18em] leading-relaxed">
                                We believe product design is best learned by
                                doing. Students will get briefs and assignments
                                each week and receive feedback and advice.
                            </p>
                        </div>

                        <div className="grid gap-3 rounded-lg bg-[rgba(255,255,255,0.06)] p-7 ">
                            <Image
                                height="10"
                                width="20"
                                src="/Images/users.svg"
                                alt=""
                            />
                            <p className="font-bold">
                                Access to online community group
                            </p>
                            <p className="text-[0.8em] w-[18em] leading-relaxed">
                                Connect, network and share your ideas with
                                designers from all around the world in an
                                exclusive student Slack group.
                            </p>
                        </div>

                        <div className="grid gap-3 rounded-lg bg-[rgba(255,255,255,0.06)] p-7">
                            <Image
                                height="10"
                                width="20"
                                alt=""
                                src="/Images/video.svg"
                            />
                            <p className="font-bold">
                                Permanent access to course material
                            </p>
                            <p className="text-[0.8em] w-[18em] leading-relaxed">
                                Gain permanent access to video content, PDF
                                worksheets, templates, and reference material to
                                grow your career.
                            </p>
                        </div>
                        <div className="grid gap-3 rounded-lg bg-[rgba(255,255,255,0.06)] p-7">
                            <Image
                                height="10"
                                width="20"
                                alt=""
                                src="/Images/book-open.svg"
                            />
                            <p className="font-bold w-[12em]">
                                Connect with hiring companies
                            </p>
                            <p className="text-[0.8em] w-[18em] leading-relaxed">
                                Get in front of Dribbble&apos;s vast network of
                                hiring managers who work for the most design
                                forward companies out there.
                            </p>
                        </div>
                        <div className="grid gap-3 rounded-lg bg-[rgba(255,255,255,0.06)] p-7">
                            <Image
                                height="10"
                                width="20"
                                alt=""
                                src="/Images/key.svg"
                            />
                            <p className="font-bold">
                                A Dribbble Pro subscription
                            </p>
                            <p className="text-[0.8em] w-[18em] leading-relaxed">
                                With your course, you get one full year of
                                Dribbble Pro, which allows you to showcase your
                                work and get in front of potential hiring
                                managers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid gap-[4em] lg:ml-[5em]">
                <p className=" ml-6 lg:ml-1 font-bold text-4xl mt-[4em] ">
                    What our students are saying
                </p>
                <div className="grid lg:grid-cols-3 justify-center">
                    <div className="mb-4">
                        <p className="text-xl italic w-[16em] text-gray-700">
                            This is a great opportunity to work online and
                            in-depth with your design heroes. The instructors
                            are world-class, the community is amazing, and we&apos;re
                            inspired to add to our portfolios every week.
                        </p>
                        <div className="flex gap-3 mt-8">
                            <Image
                                height="10"
                                width="55"
                                alt=""
                                src="/Images/studentI.png"
                            />
                            <div>
                                <p className="text-md">Harley Berry</p>
                                <p className="text-sm text-gray-700">
                                    New York, NY
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <p className="text-xl italic w-[16em] text-gray-700">
                            Dribbble courses are always incredibly informative
                            for me. It was fascinating to hear from industry
                            experts and gain insight into their experience.
                        </p>
                        <div className="flex gap-3 mt-8">
                            <Image
                                src="/Images/studentII.png"
                                height="10"
                                width="55"
                                alt=""
                            />
                            <div>
                                <p className="text-md">Harley Berry</p>
                                <p className="text-sm text-gray-700">
                                    New York, NY
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-xl italic w-[16em] text-gray-700">
                            I found that the hands-on mentorship provides
                            transferrable skills, relevant advice, advanced
                            knowledge, and practical experience. This course has
                            been a valuable experience for my career.
                        </p>
                        <div className="flex gap-3 mt-8">
                            <Image
                                src="/Images/studentiii.png"
                                height="10"
                                width="55"
                                alt=""
                            />
                            <div>
                                <p className="text-md">Harley Berry</p>
                                <p className="text-sm text-gray-700">
                                    New York, NY
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" m-[1em] lg:m-[5em] grid gap-3">
                <p className="font-bold mt-4 lg:mt-0 text-4xl">
                    Workshops & Free Webinars
                </p>
                <p className="text-xl lg:w-[33em] text-gray-900">
                    Level up your design skills with our live and highly
                    interactive workshops —featuring must-have insights from
                    your favorite design leaders
                </p>
                <div className="grid lg:grid-cols-2 justify-between gap-9 mt-8">
                    <div className="grid gap-2">
                        <Image
                            src="/Images/workshop1.png"
                            height="10"
                            width="500"
                            alt=""
                            className="w-[90%] rounded-2xl"
                        />
                        <p className="text-[0.95em] lg:w-[27em] leading-relaxed">
                            It&apos;s time to start investing as much effort into
                            your business as you do with your creations. Editor
                            X and Dribbble are teaming up with web designer and
                            entrepreneur Brad Hussey to teach you how to land
                            your ideal web design clients, at scale
                        </p>

                        <div className="flex justify-around mb-3 lg:w-[21em]">
                            <span className="flex">
                                <Image
                                    src="Images/award.svg"
                                    height="10"
                                    width="18"
                                    alt=""
                                    className=" lg:mt-[-1.6em]"
                                />
                                <p className="text-sm ml-[0.24em]">Workshop</p>
                            </span>
                            <span className="flex">
                                <Image
                                    src="Images/calendar.svg"
                                    height="10"
                                    width="18"
                                    alt=""
                                    className=" lg:mt-[-1.6em]"
                                />
                                <p className=" text-sm ml-[0.14em]">
                                    Thursday, February 26, 2023
                                </p>
                            </span>
                        </div>
                        <div className="">
                            <ul className="flex">
                                <button
                                    type="button"
                                    className="border w-[8em] border-pink-500 text-pink-500 text-sm font-medium rounded-md outline-0 p-1 mr-8 h-[2.5em]"
                                >
                                    {' '}
                                    Register Now
                                </button>
                                <button
                                    type="button"
                                    className="bg-pink-500 w-[8em] border text-white  text-sm font-medium rounded-md outline-0 p-1  h-[2.5em]"
                                >
                                    {' '}
                                    Learn More
                                </button>
                            </ul>
                        </div>
                    </div>
                    <div className="grid mt-4 lg:mt-0">
                        <Image
                            src="/Images/workshop.png"
                            height="10"
                            width="500"
                            alt=""
                            className="w-[90%] rounded-2xl mb-6"
                        />
                        <p className="text-[0.95em] lg:w-[27em] leading-relaxed mb-6">
                            Join Aaron Draplin for an interactive, virtual
                            workshop you won&apos;t want to miss. With two available
                            sessions—the first tackling the DDC&apos;s design
                            optimization workflow and the second logo design the
                            DDC way, you&apos;ll have the opportunity to gain design
                            know-how that will help you make your creative work
                            more efficient, dialed-in, and impactful.
                        </p>
                        <div className="flex justify-around mb-3 w-[21em]">
                            <span className="flex">
                                <Image
                                    src="Images/award.svg"
                                    height="10"
                                    width="18"
                                    alt=""
                                />
                                <p className="text-sm lg:ml-[0.24em]">
                                    Workshop
                                </p>
                            </span>
                            <span className="flex">
                                <Image
                                    height="10"
                                    width="18"
                                    alt=""
                                    src="Images/calendar.svg"
                                />
                                <p className=" text-sm lg:ml-[0.14em]">
                                    Thursday, February 23, 2023
                                </p>
                            </span>
                        </div>
                        <div className="mt-8">
                            <ul className="flex">
                                <button
                                    type="button"
                                    className="border w-[8em] border-pink-500 text-pink-500 text-sm font-medium rounded-md outline-0 p-1 mr-8 h-[2.5em]"
                                >
                                    {' '}
                                    Register Now
                                </button>
                                <button
                                    type="button"
                                    className="bg-pink-500 w-[8em] border text-white  text-sm font-medium rounded-md outline-0 p-1  h-[2.5em]"
                                >
                                    {' '}
                                    Learn More
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex justify-around  mt-[9em] text-center">
                <div className="lg:w-[49%]">
                    <h1 className="font-bold text-4xl mb-4">
                        Have any questions?
                    </h1>
                    <p className="w-[] text-gray-700 text-md leading-relaxed">
                        We&apos;re here to help. Get in touch below to ask us
                        anything about Dribbble&apos;s course offerings
                    </p>

                    <div className="grid gap-3 rounded-xl bg-slate-100 p-[2em] mt-8">
                        <p className="font-bold text-xl">Send us a message</p>
                        <p className="text-gray-700 text-sm ">
                            A Dribbble Education team member is available to
                            answer any questions you have about the course.
                        </p>
                        <div className="mt-4">
                            <div>
                                <button className="mb-[1em] lg:mb-0 bg-pink-500 w-[10em] h-[3.1em] text-sm font-bold p-1 rounded-xl text-white">
                                    Get in touch
                                </button>
                                <button className="bg-slate-200 w-[12em] ml-4 h-[3.1em] text-sm font-bold p-1 rounded-xl ">
                                    Speak with an Advisor
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <Image
                        height="10"
                        width="450"
                        src="/Images/message.png"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default LearnDesign;
