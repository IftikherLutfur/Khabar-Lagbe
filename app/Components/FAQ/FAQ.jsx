"use client"
import React from 'react';
import { ChevronDownIcon } from "lucide-react";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import img from '../Pictures/48ebc1dd59c5e12e128113991e086f82.png'
import Image from 'next/image';

const FAQ = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold text-white mt-6'>FAQ</h1>
            <Image
            className='absolute left-20'
            src={img}
            alt='banner'
            height={350}
            />
            <p className="text-center text-white">Frequently ask question</p>
            <div className=" w-full py-5 px-4">
      <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
        <Disclosure as="div" className="p-6" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
              What is your refund policy?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            If you're unhappy with your purchase, we'll refund you in full.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
              Do you offer technical support?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">No.</DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
              Do you offer technical support?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">No.</DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
              Do you offer technical support?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">No.</DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
              Do you offer technical support?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">No.</DisclosurePanel>
        </Disclosure>
      </div>
    </div>
    
        </div>
    );
};

export default FAQ;