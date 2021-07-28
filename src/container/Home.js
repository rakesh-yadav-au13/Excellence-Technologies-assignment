import React, { useState, useEffect } from "react";
import Paginations from "../components/Paginations";

const Home = () => {
  const [userData, setUserData] = useState();
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const dataUrl = `https://reqres.in/api/users?page=${pageNo}`;
    fetch(dataUrl, { method: "Get" })
      .then((res) => res.json())
      .then((result) => {
        if (result.data) {
          setUserData(result);
        }
      });
  }, [pageNo]);

  const renderPage = () => {
    if (userData) {
      return Array(userData.total_pages)
        .fill()
        .map((_, i) => {
          return (
            <li key={i} class="page-item">
              <button onClick={() => setPageNo(i + 1)} class="page-link">
                {i + 1}
              </button>
            </li>
          );
        });
    }
  };
  return (
    <div className="container">
      <div className="home">
        <div className="row">
          {userData &&
            userData.data.map((user) => {
              return <Paginations key={user.id} user={user} />;
            })}
        </div>
        <div className="btns_bar">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <button
                  name="incriment"
                  onClick={() => {
                    if (pageNo > 1) {
                      setPageNo(pageNo - 1);
                    }
                  }}
                  class="page-link"
                >
                  Previous
                </button>
              </li>
              {renderPage()}
              <li class="page-item">
                <button
                  name="decriment"
                  onClick={() => {
                    if (pageNo < userData.total_pages) {
                      setPageNo(pageNo + 1);
                    }
                  }}
                  class="page-link"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Home;
