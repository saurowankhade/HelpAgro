import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse,faMagnifyingGlass, faEnvelope,faSeedling,faUserGroup,faPenToSquare,faPeopleGroup,faUser} from '@fortawesome/free-solid-svg-icons';

import app_logo from '../../assets/app_logo.png';


const Header = ()=>{
    return(
        <div className='w-fit flex flex-col items-center overflow-hidden px-10'>
            <div className='mt-8'>
                <img src={app_logo} alt="App Logo" onError={app_logo} className='w-20 h-20 rounded-full object-contain' />
            </div>
            <div className='mt-10'>
                <ul>
                    <li className='text-[18px] text-gray-700  flex items-center cursor-pointer p-3 group w-fit'><FontAwesomeIcon className='group-hover:text-gray-900 text-gray-600 w-5' title='Home' icon={faHouse} /><span className='pl-5 group-hover:text-gray-900'>Home</span></li>
                    <li className='text-[18px] text-gray-700  flex items-center cursor-pointer p-3 group w-fit'><FontAwesomeIcon className='group-hover:text-gray-900 text-gray-600 w-5' title='Search' icon={faMagnifyingGlass} /><span className='pl-5 group-hover:text-gray-900'>Search</span></li>
                    <li className='text-[18px] text-gray-700  flex items-center cursor-pointer p-3 group w-fit'><FontAwesomeIcon className='group-hover:text-gray-900 text-gray-600 w-5' title='Message' icon={faEnvelope} /><span className='pl-5 group-hover:text-gray-900'>Message</span></li>
                    <li className='text-[18px] text-gray-700  flex items-center cursor-pointer p-3 group w-fit'><FontAwesomeIcon className='group-hover:text-gray-900 text-gray-600 w-5' title='Govt. Scheme' icon={faSeedling} /><span className='pl-5 group-hover:text-gray-900'>Govt. Scheme</span></li>
                    <li className='text-[18px] text-gray-700  flex items-center cursor-pointer p-3 group w-fit'><FontAwesomeIcon className='group-hover:text-gray-900 text-gray-600 w-5' title='My Network' icon={faUserGroup} /><span className='pl-5 group-hover:text-gray-900'>My Network</span></li>
                    <li className='text-[18px] text-gray-700  flex items-center cursor-pointer p-3 group w-fit'><FontAwesomeIcon className='group-hover:text-gray-900 text-gray-600 w-5' title='Blogs' icon={faPenToSquare} /><span className='pl-5 group-hover:text-gray-900'>Blogs</span></li>
                    <li className='text-[18px] text-gray-700  flex items-center cursor-pointer p-3 group w-fit'><FontAwesomeIcon className='group-hover:text-gray-900 text-gray-600 w-5' title='Communities' icon={faPeopleGroup} /><span className='pl-5 group-hover:text-gray-900'>Communities</span></li>
                    <li className='text-[18px] text-gray-700  flex items-center cursor-pointer p-3 group w-fit'><FontAwesomeIcon className='group-hover:text-gray-900 text-gray-600 w-5' title='Profile' icon={faUser} /><span className='pl-5 group-hover:text-gray-900'>Profile</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;