import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { dummyInterviews } from '@/constants';
import InterviewCard from '@/components/InterviewCard';

const page = () => {
  return (
    <>
      <section className="card-cta flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-12 px-4 sm:px-8 py-6">
        <div className="flex flex-col gap-6 max-w-lg text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Get Interview-Ready with AI-Powered Practice & Feedback
          </h2>
          <p className="text-lg">
            Practice on real Interview questions & get instant feedback
          </p>
          <Button asChild className="btn-primary w-full sm:w-auto">
            <Link href={"/interview"}>Start an Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robot"
          width={300}
          height={300}
          className="block w-40 sm:w-60 md:w-80 lg:w-[400px]"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8 px-4 sm:px-8">
        <h2 className="text-xl sm:text-2xl font-semibold">YOUR INTERVIEWS</h2>
        <div className="interviews-section ">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8 px-4 sm:px-8">
        <h2 className="text-xl sm:text-2xl font-semibold">Take an Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
          <p className="text-center sm:col-span-2 lg:col-span-3">
            You haven&apos;t taken any interviews
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
