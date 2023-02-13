import React from 'react';
import Template from '../../components/Template';

const LearnDesign = () => {
    const Mentors = [
        {
            id: '1',
            name: 'Andrew Daniels',
            position: 'Head of Design @Flutterflow',
            note: '"Mentoring allows me to pass off the 9 years of experience and over 100 projects I have worked on to other people who want to learn how to solve problems through design. This mentorship is vastly important for new designers, learning what it is actually like in the industry instead of just reading from a book or putting together a sample project"',
            img: 'Images/andrew.webp'
        },
        {
            id: '2',
            name: 'Iker Fernandez',
            position: 'Lead Product Designer @Payfit',
            note: '"During my career, I have been fortunate to be mentored by people that had a huge positive impact professionally, but that also helped me grow as a person. I hope I can help others learn and reach their goals"',
            img: 'Images/iker.webp'
        },
        {
            id: '3',
            name: 'Allison Zadrozny',
            position: 'Design Lead @Bonsai.io',
            note: '”My mentors helped me to have confidence in both the way I think about design and my execution skills. I love that, in this place of my career, I have the opportunity to uplift others and help them distill their style - and, learn something in turn!”',
            img: 'Images/allison.webp'
        }
    ];
    return (
        <>
            <Template />
            <div className="grid">
                <div className="flex justify-between p-4 mt-9 mx-8 px-10">
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
            <div className="flex justify-between ml-[4em] mt-[4em]">
                <div className="w-[45%]">
                    <h1 className="font-bold text-7xl mb-4">
                        Learn design online with industry leaders
                    </h1>
                    <p className="w-[75%] text-gray-700 text-xl leading-relaxed">
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
                    <img
                        src="/Images/hiring.webp"
                        width="80%"
                        className="border rounded-3xl"
                    />
                </div>
            </div>
            <p className="ml-[5em] mt-[5em] text-[#4d44c6] text-[12px] font-bold">
                CERTIFIED COURSES{' '}
            </p>
            <div className=" ml-[4em] mt-[4em] flex justify-between">
                <div className="w-[40em]">
                    <p className="w-[12em] font-bold text-5xl mb-4">
                        Learn Product Design in 16 weeks
                    </p>
                    <p className="w-[42em]  text-[17px] leading-7">
                        Launch your Product Design career in just 16 weeks with
                        Dribbble’s zero-to-career-ready Product Design course!
                        Complete industry-relevant projects alongside a
                        handpicked mentor, master essential design tools and
                        practices, build an interview-ready portfolio, and get
                        connected to a vast network of hiring managers.
                    </p>
                    <div className="w-[45em]  grid grid-cols-3  gap-4 mt-[3em]">
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
                    <img
                        src="/Images/certifiedcourse.jpg"
                        width="80%"
                        className="border rounded-full"
                    />
                </div>
            </div>
            <div className="ml-[2em] mt-[7em] flex justify-around">
                <div className="w-[35em]">
                    <h1 className="font-bold text-2xl mb-[0.5em]">
                        Not sure if you’re ready?
                    </h1>
                    <p className="text-gray-700 text-sm font-normal leading-7">
                        Join our free info session and meet the team to get an
                        introduction to the field of Product Design and learn
                        whether this course is for you.
                    </p>
                </div>
                <div>
                    <div className="flex justify-between border rounded-xl border-gray-300 mb-[5em] p-6 w-[35em]">
                        <div className="">
                            <img
                                src="/Images/ready.jpg"
                                className="border h-[10em]  w-[16em] rounded-3xl"
                            />
                        </div>
                        <div>
                            {' '}
                            <div className="flex justify-between mb-3">
                                <p className="font-bold text-xl w-[8em]">
                                    Introduction to Product Design
                                </p>
                                <button className="bg-[#4bb7bf] w-[3.8em] h-[2.1em] text-sm font-medium p-1 rounded-2xl  text-white ">
                                    Free
                                </button>
                            </div>
                            <div className="flex justify-between mb-3 w-[11em]">
                                <span className="flex">
                                    <img src="Images/award.svg" width="20%" />
                                    <p className="text-gray-700 text-sm ml=4">
                                        info Session
                                    </p>
                                </span>
                                <span className="flex">
                                    <img
                                        src="Images/calendar.svg"
                                        width="30%"
                                    />{' '}
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
                <div className="grid gap-4 w-[41em]">
                    <p className="text-[14px] text-[#dad9f2] font-bold">
                        ABOUT OUR CERTIFIED COURSES
                    </p>
                    <p className="text-3xl font-bold">
                        Learn alongside industry leading mentors
                    </p>
                    <p className="text-[#dad9f2] mb-7">
                        You are not in this alone. As part of this course you’ll
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
                        You’ll meet with your mentor once a week in an intimate
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

                <div className="mt-[5em] flex justify-between">
                    {' '}
                    {Mentors.map((mentor) => (
                        <div>
                            {' '}
                            <img src={mentor.img} width="90%" />{' '}
                            <p className="my-2 font-bold text-xl">
                                {' '}
                                {mentor.name}{' '}
                            </p>{' '}
                            <p className="my-2 text-sm">{mentor.position}</p>{' '}
                            <p className="text-[#dad9f2] w-[21em]">
                                {mentor.note}
                            </p>{' '}
                        </div>
                    ))}{' '}
                </div>
                <div className="grid gap-4 mt-[8em]">
                    <p className="text-[#dad9f2] text-[12px] font-bold">
                        WHAT’S INCLUDED
                    </p>
                    <p className="text-3xl font-bold">
                        An immersive and interactive learning experience
                    </p>
                    <p className="text-[#dad9f2] w-[47em]">
                        Our courses are built with students’ experience in mind
                        - proven learning principles, mentorship,
                        community-based plus a year of Dribbble Pro; unlocking
                        all the tools you need to transform your career.
                    </p>
                    <div className="grid grid-cols-4 gap-5 justify-between mt-[3em]">
                        <div className="grid gap-3 rounded-lg bg-[rgba(255,255,255,0.06)] p-7">
                            <img src="/Images/key.svg" />
                            <p className='font-bold'>Expert educators</p>
                            <p className="text-[0.8em] w-[18em] leading-relaxed">
                                You’ll learn from the best in the design
                                industry; join MDS and the former hiring manager
                                at Google, for live and interactive sessions.
                            </p>
                        </div>
                        <div className="grid gap-3 rounded-lg bg-[rgba(255,255,255,0.06)] p-7">
                            <img src="/Images/users.svg" />
                            <p className='font-bold'>Live mentorship</p>
                            <p className="text-[0.8em] w-[18em] leading-relaxed">
                                You’ll join a small group of designers for
                                weekly live & interactive mentorship sessions.
                                All our mentors are hand picked and work at top
                                design companies.
                            </p>
                        </div>

                        <div className="grid gap-2 rounded-lg bg-[rgba(255,255,255,0.06)] p-7">
                            <img src="/Images/video.svg" />
                            <p className='font-bold'>Certification</p>
                            <p className="text-[0.8em] w-[18em] leading-relaxed">
                                You will be awarded a signed certificate on
                                completion of your course, and a badge to add to
                                your Dribbble profile.
                            </p>
                        </div>
                        <div className="grid gap-3 rounded-lg bg-[rgba(255,255,255,0.06)] p-7">
                            <img src="/Images/book-open.svg" />
                            <p className='font-bold'> Project-based learning</p>
                            <p className="text-[0.8em] w-[18em] leading-relaxed">
                                We believe product design is best learned by
                                doing. Students will get briefs and assignments
                                each week and receive feedback and advice.
                            </p>
                        </div>

                        <div className="grid gap-3 rounded-lg bg-[rgba(255,255,255,0.06)] p-7 ">
                            <img src="/Images/users.svg" />
                            <p className='font-bold'> Access to online community group</p>
                            <p className="text-[0.8em] w-[18em] leading-relaxed">
                                Connect, network and share your ideas with
                                designers from all around the world in an
                                exclusive student Slack group.
                            </p>
                        </div>

                        <div className="grid gap-3 rounded-lg bg-[rgba(255,255,255,0.06)] p-7">
                            <img src="/Images/video.svg" />
                            <p className='font-bold'>Permanent access to course material</p>
                            <p className="text-[0.8em] w-[18em] leading-relaxed">
                                Gain permanent access to video content, PDF
                                worksheets, templates, and reference material to
                                grow your career.
                            </p>
                        </div>
                        <div className="grid gap-3 rounded-lg bg-[rgba(255,255,255,0.06)] p-7">
                            <img src="/Images/book-open.svg" />
                            <p  className='font-bold w-[12em]'  > Connect with hiring companies</p>
                            <p className="text-[0.8em] w-[18em] leading-relaxed">
                                Get in front of Dribbble's vast network of
                                hiring managers who work for the most design
                                forward companies out there.
                            </p>
                        </div>
                        <div className="grid gap-3 rounded-lg bg-[rgba(255,255,255,0.06)] p-7">
                            <img src="/Images/key.svg" />
                            <p className='font-bold'> A Dribbble Pro subscription</p>
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
        </>
    );
};

export default LearnDesign;
