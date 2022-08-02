import { authActions } from 'features/Auth/services/authSlice';
import { cartActions } from 'features/Cart/services/cartSlice';
import { User } from 'models';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
export interface UserSelectorMenuProps {
  user: User;
}
export function UserSelectorMenu({ user }: UserSelectorMenuProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function handleClickOutside(e: any) {
      if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
        setOpen(!open);
        return;
      }
      setOpen(false);
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [open]);
  const handleLogout = () => {
    dispatch(authActions.logout());
    dispatch(cartActions.removeAllCart());
    navigate('/');
  };
  return (
    <>
      <div className=" relative max-w-lg mx-auto" ref={dropdownRef}>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          {user.username}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {open && (
          <div className="absolute right-0  bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4">
            <div className="px-4 py-3">
              <span className="block text-sm font-medium text-gray-900 truncate">{user.email}</span>
            </div>
            <ul className="py-1" aria-labelledby="dropdown">
              <li>
                <a href="/#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                  Information bill
                </a>
              </li>
              <li>
                <a href="/#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                  Personal information
                </a>
              </li>
            </ul>
            <button
              className="text-sm w-full hover:bg-gray-100 text-gray-700 block px-4 py-2"
              onClick={handleLogout}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </>
  );
}
