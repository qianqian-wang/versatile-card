import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import {Button,Input,RecordCard} from "../components"
import * as ScrollArea from '@radix-ui/react-scroll-area';

const TAGS = ['RecordCard'];

const allComponents={
  Button: Button,
  Input: Input,
  RecordCard:RecordCard
}

const Index = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const AllComponent=allComponents[selectedTag]
  return (
    <div className='flex'>
      <ScrollArea.Root className="w-[500px] h-[full] rounded overflow-hidden shadow-[0_2px_10px] shadow-blackA4 bg-white">
        <ScrollArea.Viewport className="w-full h-full rounded">
          <div className="py-[15px] px-5">
            <div className="text-violet11 text-[15px] leading-[18px] font-medium">Components</div>
            {TAGS.map((tag) => (
              <div
                className={`text-mauve12 text-[13px] leading-[18px] mt-2.5 pt-2.5 border-t border-t-mauve6 ${selectedTag === tag ? 'text-black font-bold' : ''}`}
                key={tag}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="bg-blackA5" />
      </ScrollArea.Root>
      <div className='ml-12  mt-8'>
        {selectedTag && <AllComponent children="button"></AllComponent>}
      </div>
    </div>
  );
}

export default Index;
