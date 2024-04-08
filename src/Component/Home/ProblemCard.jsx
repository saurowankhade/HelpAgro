import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faRegularBookmark, faComment} from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faSolidBookmark, faArrowUp,faEllipsisVertical, faShareNodes} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const ProblemCard = ()=>{
    const [upVoteColor , setupVoteColor] = useState("text-[#4c7c33af]");
    const [bookMark,setBookMark] = useState(true);

    const [upVoteCount , setUpVoteCount] = useState(0);

    return (
        <div className='border p-6'>
            <div className="flex flex-row justify-between ">
               <div className="flex cursor-pointer">
                <div>
                    <img className="w-10 h-10 rounded-full" src="https://dqy38fnwh4fqs.cloudfront.net/UHQ799L9G8RR6MO3OOL79KJL9KAQ/hq799l9g8rr6mo3ool79kjl9kaq-profile.webp" alt="user-profile" />
                    </div>
                <div className="ml-4 ">
                    <h3 className="text-[#212121] text-[14px]">Saurabh Wankhade</h3>
                    <span className="text-[#6A737D] text-[14px]">@saurowankhade</span>
                    <span className="text-[#6A737D] ml-2 text-[14px]">3m</span>
                </div>
                </div>
                <div>
                <FontAwesomeIcon className=' cursor-pointer' icon={faEllipsisVertical} />
                </div>
            </div>

            <div className='mt-4'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quo omnis quaerat hic pariatur odio rerum molestiae ipsam facilis ex a tenetur neque ipsa cupiditate corporis nostrum nisi, quae illum!</p>
            </div>

            <div className=' flex justify-between mt-5 '>
            <span><FontAwesomeIcon className={' text-[20px]  cursor-pointer rounded-full  '+upVoteColor}  icon={faArrowUp} onClick={()=>{
                setupVoteColor(upVoteColor === "text-[#4c7c33af]" ? "text-[#4c7c33]" : "text-[#4c7c33af]");
                setUpVoteCount(upVoteColor==="text-[#4c7c33af]" ? upVoteCount+1 : upVoteCount-1);

                }} /> <span className='ml-2 text-[#555353]'>{upVoteCount}</span></span>

            <FontAwesomeIcon className='text-[20px] cursor-pointer text-gray-500  hover:text-black ' icon={faComment} />
            <FontAwesomeIcon className={'text-[20px] cursor-pointer text-gray-500 hover:text-black '+(bookMark ? "text-gray-500" : "text-black")} icon={bookMark ? faRegularBookmark : faSolidBookmark} onClick={()=>{setBookMark(!bookMark)}} />

            <FontAwesomeIcon className='text-[20px] cursor-pointer text-gray-500 hover:text-[#507cc9] ' icon={faShareNodes} />

            </div>


        </div>
    );

};

export default ProblemCard;