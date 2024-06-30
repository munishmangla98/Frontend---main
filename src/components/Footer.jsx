// import React from "react";
import Writebolgs from "./Writebolgs"

function Footer() {
  return (
    <>
      <div>
        <hr />
        <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
          <nav className="grid grid-flow-col gap-4">
            <a href="/">Home</a>
            <a href="/Allblogs">Blogs</a>
            <a href="/UserProfile">User Profile</a>
            <a onClick={() => document.getElementById("my_modal_4").showModal()}>Write Blogs</a>
            <Writebolgs />

          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a href="https://www.linkedin.com/in/munish-mangla">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.5c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0zM7.08 20.5H3.56V9h3.52v11.5zM5.32 7.65c-1.12 0-1.82-.75-1.82-1.69 0-.96.72-1.69 1.85-1.69 1.12 0 1.82.73 1.83 1.69-.01.94-.71 1.69-1.86 1.69zM20.5 20.5h-3.51v-5.5c0-1.38-.49-2.32-1.72-2.32-.94 0-1.5.65-1.74 1.27-.09.22-.11.53-.11.84v5.71h-3.51s.05-9.28 0-10.24h3.51v1.45c.47-.73 1.3-1.76 3.16-1.76 2.3 0 4.03 1.49 4.03 4.69v5.86z"></path>

                </svg>
              </a>
              <a href="https://youtu.be/DfQ63PRcgkQ?si=_1ttcmmcUlxwUBnv" target="_blank">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="https://github.com/munishmangla98">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                 <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23.955-.265 1.98-.398 3-.403 1.02.005 2.045.138 3 .403 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.21.697.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>


                </svg>
              </a>
            </div>
          </nav>
          <aside>
            {/* <p>Copyright © 2024 - All right reserved by Munish Mangla</p> */}
            <p>Copyright © 2024 - All right reserved by Munish Mangla</p>

          </aside>
        </footer>
      </div>
    </>
  );
}

export default Footer;
