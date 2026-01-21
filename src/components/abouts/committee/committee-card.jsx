import Link from "next/link";
import React, { useState } from "react";

const CommitteeCard = ({ data, classes }) => {
  const [showTable, setShowTable] = useState(false);

  const toggleTable = () => {
    setShowTable(!showTable);
  };
  return (
    <div
      className={`edu-course course-style-4 course-style-8 ${
        classes ? classes : ""
      }`}
    >
      <div className="inner">
        <div className="thumbnail">
          <Link href={`/course-details/${data?.id}`} legacyBehavior>
            <a>
              <img
                src={`/assets/images/course/course-06/${data?.img}`}
                alt="Course Thumb"
              />
            </a>
          </Link>
        </div>

        <div className="content">
          <h6 className="title">{data?.title}</h6>

          <p>{data?.short_desc}</p>
          <br />
          {data?.subtitle && <p>{data?.subtitle}</p>}

          <ul className="course-meta">
            <li>
              <i className="icon-25"></i>
              {data?.table_data?.length} Members
            </li>
          </ul>
          <br />
          <Link href="#" legacyBehavior>
            <a>
              <div onClick={toggleTable}>
                <span id="element1">More Info</span>
                <i className="icon-4" id="element2"></i>
              </div>
            </a>
          </Link>
        </div>
      </div>
      {showTable && (
        <div className="faq-accordion">
          <div className="accordion">
            <div className="accordion-item">
              <div
                id="tableContent"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  {/* Render your tableData here */}
                  <table>
                    <thead>
                      <tr>
                        <th>S. No</th>
                        {data.table_data.some((row) => row.Name) && (
                          <th>Name</th>
                        )}
                        {data.table_data.some((row) => row.Designation) && (
                          <th>Designation</th>
                        )}
                        {data.table_data.some((row) => row.Department) && (
                          <th>Department</th>
                        )}
                        {data.table_data.some((row) => row.Responsibility) && (
                          <th>Responsibility</th>
                        )}
                        {/* Add more headers as needed */}
                      </tr>
                    </thead>
                    <tbody>
                      {data.table_data.map((row, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          {data.table_data.some((row) => row.Name) && (
                            <td>{row.Name}</td>
                          )}
                          {data.table_data.some((row) => row.Designation) && (
                            <td>{row.Designation}</td>
                          )}
                          {data.table_data.some((row) => row.Department) && (
                            <td>{row.Department}</td>
                          )}
                          {data.table_data.some((row) => row.Responsibility) && (
                            <td>{row.Responsibility}</td>
                        )}
                          {/* Add more columns as needed */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommitteeCard;
