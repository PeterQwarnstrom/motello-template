import { useUser } from 'motello-client';
import React, { useRef } from 'react';

export default function User() {
  const { selectedUser, recentUsers, actions } = useUser();

  const ref = useRef<HTMLInputElement>(null);

  const handleSelectUser = (id: string) => {
    actions.selectUser(id);
  };

  const handleCreate = () => {
    if (!ref?.current) return;
    actions.addUser(ref.current.value);
    ref.current.value = '';
  };

  return (
    <div className="p-4 shadow-xl ring-1 ring-gray-900/5 rounded-lg mb-6">
      <h5 className="font-medium leading-tight text-xl mt-0 mb-2 text-blue-600">Select User</h5>
      <div className="bg-white rounded-lg border border-gray-200 w-full text-gray-900 mb-6">
        {recentUsers.map((p, i) => {
          var c =
            p.id === selectedUser?.id
              ? 'bg-blue-600 text-white'
              : 'hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500';
          var d = i === 0 ? 'rounded-t-lg' : '';
          var e = i === recentUsers.length - 1 ? 'rounded-b-lg' : '';

          return (
            <button
              type="button"
              aria-current={p.id === selectedUser?.id ? true : false}
              className={`text-left px-6 py-2 border-b border-gray-200 w-full cursor-pointer ${c} ${d} ${e}`}
              onClick={() => handleSelectUser(p.id)}
            >
              {p.name}
            </button>
          );
        })}
      </div>
      <h5 className="font-medium leading-tight text-xl mt-0 mb-2 text-blue-600">Create User</h5>
      <div className="mb-3 xl:w-full">
        <input
          type="text"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="userName"
          placeholder="Enter your name"
          ref={ref}
          onKeyUp={(e) => (e.key === 'Enter' ? handleCreate() : null)}
        />
      </div>
    </div>
  );
  /*{

      <h5 className="font-medium leading-tight text-xl mt-0 mb-2 text-blue-600">Selected User:</h5>
      <div className="mb-6">{!!selectedUser ? JSON.stringify(selectedUser, null, 4) : 'None selected'}</div>

      <h5 className="font-medium leading-tight text-xl mt-0 mb-2 text-blue-600">Available Users:</h5>
      <div className="mb-6">
        <ul>
          {recentUsers
            .filter((p) => p.id !== selectedUser?.id)
            .map((p) => (
              <li key={p.id} onClick={() => handleSelectUser(p.id)}>
                <div>
                  <strong>{p.name}</strong> ({p.id})
                </div>
              </li>
            ))}
        </ul>
      </div>
      <h5 className="font-medium leading-tight text-xl mt-0 mb-2 text-blue-600">Create User:</h5>
      <input ref={ref} placeholder="Enter user name"></input>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
} */
}
