import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faImage,faFaceSmile} from '@fortawesome/free-solid-svg-icons';

const Post = ()=>{
    return (
        <div className="border-y text-start h-fit py-2 sticky top-0 w-full bg-white z-50">
            <div>
                <textarea className=" w-full resize-none outline-none h-[100px] px-1" name="userInput" id="userInput" cols="30" rows="10" placeholder="Enter soemthing ..."></textarea>
            </div>
            <div className=' flex flex-wrap items-center  justify-between px-1 py-1 border-t'>
                <div className=''>
                <FontAwesomeIcon className='hover:text-[#4c7c33] text-[#4c7c33af] ml-3 cursor-pointer text-[18px]' icon={faImage} />
                <FontAwesomeIcon className='hover:text-[#4c7c33] text-[#4c7c33af] ml-3 cursor-pointer text-[18px]' icon={faFaceSmile} />
                </div>
           <button className='text-[16px] font-medium rounded-[20px] px-3 py-1 bg-[#194d0eae] hover:bg-[#194d0eea] text-white'>Post</button>
            </div>
        </div>
    );
};
export default Post;