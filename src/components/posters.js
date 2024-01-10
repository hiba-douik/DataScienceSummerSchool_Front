import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import { useState, useEffect } from "react";

function Posters() {
  const [app, setApp] = useState(null);
  const [filteredApp, setFilteredApp] = useState(null);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8081/application/getAllApplications"
        );

        if (!response.ok) {
          throw new Error("not okeey");
        }

        const result = await response.json();
        setApp(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleDownloadClick = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8081/application/download/${id}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const fileData = await response.blob();
      const blobUrl = URL.createObjectURL(fileData);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `file_${id}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    filterApplications(e.target.value);
  };
  const filterApplications = (query) => {
    const lowercaseQuery = query.toLowerCase();
    const filteredData = app.filter(
      (application) =>
        application.firstName.toLowerCase().includes(lowercaseQuery) ||
        application.lastName.toLowerCase().includes(lowercaseQuery) ||
        application.namePoster.toLowerCase().includes(lowercaseQuery)
    );
    setFilteredApp(filteredData.length > 0 ? filteredData : null);
  };
  return (
    <>
      <Header />
      <Breadcrumb />

      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="et_pb_module et_pb_text et_pb_text_2 et_pb_text_align_left et_pb_bg_layout_light"
      >
        <div className="et_pb_text_inner">
          <div
            id="tablepress-3_wrapper"
            className="dataTables_wrapper no-footer"
          >
            <div id="tablepress-3_filter" class="dataTables_filter">
              <label>
                Search:
                <input
                  onChange={handleChange}
                  value={searchInput}
                  type="search"
                  class=""
                  placeholder=""
                  aria-controls="tablepress-3"
                />
              </label>
            </div>

            <table
              id="tablepress-3"
              className="tablepress tablepress-id-3 tablepress-responsive dataTable no-footer dtr-inline"
              role="grid"
              aria-describedby="tablepress-3_info"
              style={{
                width: "940px",
              }}
            >
              <thead>
                <tr className="row-1 odd" role="row">
                  <th
                    className="column-1 sorting_asc"
                    tabIndex="0"
                    aria-controls="tablepress-3"
                    rowSpan="1"
                    colSpan="1"
                    style={{ width: "413px" }}
                    aria-label="Title: activate to sort column descending"
                    aria-sort="ascending"
                  >
                    Title
                  </th>

                  <th
                    className="column-4 sorting"
                    tabIndex="0"
                    aria-controls="tablepress-3"
                    rowSpan="1"
                    colSpan="1"
                    style={{ width: "106px" }}
                    aria-label="Name: activate to sort column ascending"
                  >
                    Name
                  </th>
                  <th
                    className="column-5 sorting"
                    tabIndex="0"
                    aria-controls="tablepress-3"
                    rowSpan="1"
                    colSpan="1"
                    style={{ width: "72px" }}
                    aria-label="URL: activate to sort column ascending"
                  >
                    URL
                  </th>
                </tr>
              </thead>
              <tbody className="row-hover">
                {filteredApp
                  ? filteredApp.map((application) => (
                      <tr className="row-5 odd" role="row" key={application.id}>
                        <td className="column-1" tabIndex="0">
                          {application.namePoster}
                        </td>
                        <td
                          className="column-2"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {application.firstName} {application.lastName}
                        </td>
                        <td className="column-5">
                          <Link
                            to={`http://localhost:8081/application/download/${application.id}`}
                            target="_blank"
                            onClick={(e) => {
                              e.preventDefault();
                              handleDownloadClick(application.id);
                            }}
                          >
                            Download
                          </Link>
                        </td>
                      </tr>
                    ))
                  : app &&
                    app.map((application) => (
                      <tr className="row-5 odd" role="row" key={application.id}>
                        <td className="column-1" tabIndex="0">
                          {application.namePoster}
                        </td>
                        <td
                          className="column-2"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {application.firstName} {application.lastName}
                        </td>
                        <td className="column-5">
                          <Link
                            to={`http://localhost:8081/application/download/${application.id}`}
                            target="_blank"
                            onClick={(e) => {
                              e.preventDefault();
                              handleDownloadClick(application.id);
                            }}
                          >
                            Download
                          </Link>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Posters;
