import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-regular-svg-icons';

import News from './News/News';

const SearchProfile = ()=>{
    return (
        <div className='fixed h-full w-[380px] border-r-[1px]  '>
            <div className='flex items-center w-full border p-2 shadow-sm justify-between '>
            <div className="flex rounded-[30px] flex-row border-2 items-center p-1 w-full">
            <FontAwesomeIcon className=' text-gray-400' icon={faMagnifyingGlass} />
            <input className='outline-none ml-2' type="text" name="searchText" id="searchText" placeholder='Search...' />
            </div>

            <div className='cursor-pointer ml-2'>
            <FontAwesomeIcon className=' w-8 h-6 rounded-full object-contain text-gray-800' icon={faBell} />
            </div>
            <div className='cursor-pointer ml-2'>
                <img className='w-10 h-10 rounded-full object-contain' src="https://dqy38fnwh4fqs.cloudfront.net/UHQ799L9G8RR6MO3OOL79KJL9KAQ/hq799l9g8rr6mo3ool79kjl9kaq-profile.webp" alt="user-Profile" />
            </div>
            </div>
            <div className='overflow-y-scroll sticky h-full w-full box-content no-scrollbar'>
                <News />
            </div>

        </div>
    );
};

export default SearchProfile;