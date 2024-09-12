'use client';
import React, { Fragment } from 'react';
import ReactCalendar from '../ReactCalendar';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { Checkbox } from '@/components/ui/checkbox';

const Dashboard = () => {
  return (
    <Fragment>
      <div className='flex'>
        <div className='w-1/4 p-4'>
          {/* Shadcn Component on the left */}
          <Command>
            <CommandInput placeholder='Type a command or search...' />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading='Suggestions'>
                <CommandItem className='flex justify-between'>
                  <Checkbox />
                  Calendar
                </CommandItem>
                <CommandItem className='flex justify-between'>
                  <Checkbox />
                  Search Emoji
                </CommandItem>
                <CommandItem className='flex justify-between'>
                  <Checkbox />
                  Calculator
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
            </CommandList>
          </Command>
        </div>
        <div className='flex-1 p-4'>
          {/* Calendar on the right */}
          <ReactCalendar />
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
