import { ReactNode, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getGenerations } from "../queries";

interface NavPros {
  title: string,
  children: ReactNode,
}
function Navbar( { title, children }: NavPros ) {
  const { status, error, data: generations } = useQuery({
    queryKey: ['generations'],
    queryFn: () => getGenerations()
  })

  console.log(generations?.data.results);
  

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">{ title }</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost rounded-btn capitalize">Gerações</label>
              <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li><a>Item 1</a></li> 
                <li><a>Item 2</a></li>
                {
                  generations?.data.results.map((elem: {name: string}) => <li key={elem.name}><a>{elem.name}</a></li>)
                }
              </ul>
            </div>
              <li>
                <a>Navbar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        { children }
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar