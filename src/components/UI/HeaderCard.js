import {useSelector} from 'react-redux';
import {getUserDetails} from '../../services/ApiService'

const HeaderCard = (props) => {
  const users = useSelector((state) => state.vote.users);
  const userDetails=getUserDetails(users,props.userId);

  return (
    <div className="p-2 border-b-4 border-gray-700 rounded-xl">
       <div className='flex bg-white w-full border-t-4 border-gray-600 rounded-lg overflow-hidden mx-auto'>
        <div className='w-2 bg-gray-500'></div>

        <div className='flex items-center px-2 py-1'>
            <img className='w-10 h-10 object-cover rounded-full' alt='User avatar' src={userDetails.avatarURL}/>
            
            <div className='mx-3'>
                <p className='text-gray-700 font-bold text-base'> {props.title} asks: </p>
            </div>
        </div>
        
    </div>

      
      <div className="w-100 bg-white flex">
       
        <div className="w-full pt-2 pr-4 justify-end">{props.children}</div>
        
      </div>
    </div>
  );
};
export default HeaderCard;
