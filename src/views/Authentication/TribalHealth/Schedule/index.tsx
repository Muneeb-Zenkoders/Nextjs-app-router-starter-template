// 'use client';
// import React, { Fragment } from 'react';
// import ReactCalendar from '../ReactCalendar';
// import {
//   Command,
//   CommandDialog,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
//   CommandShortcut,
// } from '@/components/ui/command';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// const Dashboard = () => {
//   return (
//     <Fragment>
//       <div className='flex'>
//         <div className='w-1/4 p-4'>
//           {/* Shadcn Component on the left */}
//           <Command>
//             <CommandInput placeholder='Type a command or search...' />
//             <CommandList>
//               <CommandEmpty>No results found.</CommandEmpty>
//               <CommandGroup heading='Suggestions'>
//                 <CommandItem className='flex justify-between'>
//                   <Checkbox />
//                   <Avatar>
//                     <AvatarImage src='https://xsgames.co/randomusers/avatar.php?g=male' />
//                     <AvatarFallback>CN</AvatarFallback>
//                   </Avatar>
//                   Calendar
//                 </CommandItem>
//                 <CommandItem className='flex justify-between'>
//                   <Checkbox />
//                   Search Emoji
//                 </CommandItem>
//                 <CommandItem className='flex justify-between'>
//                   <Checkbox />
//                   Calculator
//                 </CommandItem>
//               </CommandGroup>
//               <CommandSeparator />
//             </CommandList>
//           </Command>
//         </div>
//         <div className='flex-1 p-4'>
//           {/* Calendar on the right */}
//           <ReactCalendar />
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Dashboard;

// 'use client';
// import React, { Fragment, useEffect, useState } from 'react';
// import ReactCalendar from '../ReactCalendar';
// import {
//   Command,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
//   CommandEmpty,
// } from '@/components/ui/command';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// const Dashboard = () => {
//   const [users, setUsers] = useState<any[]>([]);

//   // Fetch data from Random User API
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch(
//           'https://randomuser.me/api/?results=15&nat=us,gb&gender=male',
//         );
//         const data = await response.json();

//         // Extract relevant user data (first name, last name, and large image)
//         const fetchedUsers = data.results.map((user: any) => ({
//           firstName: user.name.first,
//           lastName: user.name.last,
//           largeImage: user.picture.large,
//         }));
//         setUsers(fetchedUsers);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);
//   return (
//     <Fragment>
//       <div className='flex'>
//         <div className='w-1/4 p-4'>
//           {/* Shadcn Component on the left */}
//           <Command>
//             <CommandInput placeholder='Find Staff...' />
//             <CommandList>
//               <CommandEmpty>No results found.</CommandEmpty>
//               <CommandGroup heading='Users'>
//                 {userData.map((user, index) => (
//                   <CommandItem
//                     key={index}
//                     className='flex items-center'
//                   >
//                     <Checkbox className='mr-4' />
//                     <Avatar className='mr-2'>
//                       <AvatarImage src={user.picture.large} />
//                       <AvatarFallback>
//                         {user.name.first[0]}
//                         {user.name.last[0]}
//                       </AvatarFallback>
//                     </Avatar>
//                     <span>
//                       {user.name.first} {user.name.last}
//                     </span>
//                   </CommandItem>
//                 ))}
//               </CommandGroup>
//               <CommandSeparator />
//             </CommandList>
//           </Command>
//         </div>
//         <div className='flex-1 p-4'>
//           {/* Calendar on the right */}
//           <ReactCalendar />
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Dashboard;

// 'use client';
// import React, { Fragment, useState, useEffect } from 'react';
// import ReactCalendar from '../ReactCalendar';
// import {
//   Command,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
//   CommandEmpty,
// } from '@/components/ui/command';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { IUserData } from '@/types/Interfaces/userData';

// const Schedule = ({ userData }: { userData: IUserData }) => {
//   return (
//     <Fragment>
//       <div className='flex'>
//         <div className='w-1/4 p-4'>
//           {/* Shadcn Component on the left */}
//           <Command>
//             <CommandInput placeholder='Type a command or search...' />
//             <CommandList>
//               <CommandEmpty>No results found.</CommandEmpty>
//               <CommandGroup heading='Users'>
//                 {users.map((user, index) => (
//                   <CommandItem
//                     key={index}
//                     className='flex items-center'
//                   >
//                     <Checkbox style={{ marginRight: '1rem' }} />
//                     <Avatar className='mr-2'>
//                       <AvatarImage src={user.largeImage} />
//                       <AvatarFallback>
//                         {user.firstName[0]}
//                         {user.lastName[0]}
//                       </AvatarFallback>
//                     </Avatar>
//                     <span>
//                       {user.firstName} {user.lastName}
//                     </span>
//                   </CommandItem>
//                 ))}
//               </CommandGroup>
//               <CommandSeparator />
//             </CommandList>
//           </Command>
//         </div>
//         <div className='flex-1 p-4'>
//           {/* Calendar on the right */}
//           <ReactCalendar />
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Schedule;

'use client';
import React, { Fragment } from 'react';
import ReactCalendar from '../ReactCalendar';
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandEmpty,
} from '@/components/ui/command';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { StateProps } from '@/types/Interfaces/userData';
// Updated the interface to match the structure of the API response

const Schedule = ({ userData }: { userData: StateProps }) => {
  // Assuming userData is an array of user objects from the API response

  return (
    <Fragment>
      <div className='flex'>
        <div className='w-1/4 p-4'>
          {/* Shadcn Component on the left */}
          <Command>
            <CommandInput placeholder='Find Staff...' />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading='Users'>
                {userData.results.map((user, index) => (
                  <CommandItem
                    key={index}
                    className='flex items-center'
                  >
                    <Checkbox style={{ marginRight: '1rem' }} />
                    <Avatar className='mr-2'>
                      <AvatarImage src={user.picture.large} />
                      <AvatarFallback>
                        {user.name.first[0]}
                        {user.name.last[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span>
                      {user.name.first} {user.name.last}
                    </span>
                  </CommandItem>
                ))}
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

export default Schedule;
