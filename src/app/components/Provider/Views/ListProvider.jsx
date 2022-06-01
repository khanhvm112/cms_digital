import React, { useEffect, useState } from "react";
import ReactPagination from "react-paginate";
import { Link } from "react-router-dom";
import AddProvider from "./AddProvider";
function ListProvider(props) {
  let perPage = 10;
  let totalProvider = 100;
  let totalPage = totalProvider / perPage;
  const [listProvider, setListProvider] = useState([]);
  const [listService, setListService] = useState([]);
  const [listProvince, setListProvince] = useState([]);
  let [request, setRequest] = useState({
    keyword: "",
    subServiceId: -1,
    provinceId: null,
    status: -1,
    page: 0,
    pagesize: 20,
  });
  const handlePageClick = (data) => {
    // console.log(data.selected);
    // let currentPage = data.selected + 1;
    // console.log(currentPage);
    setRequest({ ...request, page: data.selected });
    // console.log(request);
    window.scrollTo(0, 0);
  };
  const fetchListService = () => {
    fetch(`http://192.168.100.105:8080/digital-cms/api/listService`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        keyword: "",
        serviceID: null,
        status: null,
        page: 0,
        pagesize: 15,
      }),
    })
      .then((res) => res.json())
      .then((response) => setListService(response.data))
      .catch((error) => console.log(error));
  };
  const fetchListProvince = () => {
    fetch(`http://192.168.100.105:8080/digital-cms/api/listProvince`)
      .then((res) => res.json())
      .then((response) => setListProvince(response.data))
      .catch((error) => console.log(error));
  };
  const fetchListProvider = async () => {
    await fetch(`http://192.168.100.105:8080/digital-cms/api/listProvider`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(request),
    })
      .then((res) => res.json())
      .then((response) => setListProvider(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchListProvince();
    fetchListService();
    fetchListProvider();
  }, [request]);
  // function onClickInactive(provider) {
  //   if (onInActiveClick) {
  //     onInActiveClick(provider);
  //   }
  // }

  const handleSelectService = (data) => {
    let abc = data.target.value;
    if (abc === "5") {
      document.getElementById("select-province").disabled = false;
    } else {
      document.getElementById("select-province").value = -1;
      document.getElementById("select-province").disabled = true;
    }
    setRequest({ ...request, subServiceId: data.target.value });
  };
  const handleSelectProvince = (data) => {
    setRequest({ ...request, provinceId: data.target.value });
  };

  const handleSearch = (data) => {
    setRequest({ ...request, keyword: data.target.value });
  };

  const handleStatus = (data) => {
    setRequest({ ...request, status: data.target.value });
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h2 className="card-content-title"> Danh sách nhà cung cấp </h2>

          <form action="" method="get">
            <div className="row searchBar">
              <div className="form-group col-md-3 pdr-menu ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tên dịch vụ"
                  onChange={handleSearch}
                />
              </div>
              <div className="form-group col-md-2 pdr-menu">
                <select
                  className="form-control"
                  id=""
                  onChange={handleSelectService}
                >
                  <option value="-1">Chọn dịch vụ</option>
                  {listService.map((service) => (
                    <option value={service.id}>{service.subserviceName}</option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-2 pdr-menu">
                <select
                  className="form-control"
                  id="select-province"
                  onChange={handleSelectProvince}
                  disabled
                >
                  <option value="-1"> Chọn khu vực </option>
                  {listProvince.map((province) => (
                    <option value={province.id}>{province.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-2 pdr-menu">
                <select className="form-control" id="" onChange={handleStatus}>
                  <option value="-1"> Chọn trạng thái </option>
                  <option value="1"> Hoạt động </option>
                  <option value="0"> Không hoạt động </option>
                </select>
              </div>
            </div>
            <div className="row mgbt searchBar">
              <div className="form-group col-md-4 pdr-menu">
                <Link
                  type="submit"
                  className="btn btn-success btn-icon-text"
                  to="/addProvider"
                >
                  Thêm nhà cung cấp
                </Link>
              </div>
              <div className="form-group col-md-8 pdl-menu">
                <div className="d-flex align-items-center justify-content-md-end">
                  {/* <div className="pr-1 mb-3 mb-xl-0">
                    <Link
                      type="submit"
                      className="btn btn-primary btn-icon-text"
                      onClick={handleSearchService}
                    >
                      Tìm kiếm
                    </Link>
                  </div> */}
                  <div className="pr-1 mb-3 mb-xl-0">
                    <button
                      type="submit"
                      className="btn btn-danger bth-cancel btn-icon-text"
                    >
                      Bỏ lọc
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className="table-responsive">
            <table className="table table-bordered table-custom">
              <thead>
                <tr>
                  <th className="font-weight-bold" rowSpan="2" width="10%">
                    <input className="check-action" type="checkbox" />
                    <button
                      type="button"
                      className="btn btn-success btn-icon-custom"
                    >
                      <i className="mdi mdi-checkbox-marked-circle-outline"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-icon-custom"
                    >
                      <i className="mdi mdi-close-circle-outline"></i>
                    </button>
                  </th>
                  <th className="font-weight-bold" rowSpan="2" width="10%">
                    Tên nhà cung cấp
                  </th>
                  <th className="font-weight-bold" rowSpan="2" width="15%">
                    Dịch vụ cha
                  </th>
                  <th className="font-weight-bold" rowSpan="2" width="10%">
                    Dịch vụ con
                  </th>
                  <th className="font-weight-bold" rowSpan="2" width="10%">
                    Khu vực
                  </th>
                  <th className="font-weight-bold" rowSpan="2" width="10%">
                    Ngày tạo
                  </th>
                  <th className="font-weight-bold" rowSpan="2" width="10%">
                    Ngày cập nhật
                  </th>
                  <th className="font-weight-bold" rowSpan="2" width="10%">
                    Trạng thái
                  </th>
                </tr>
              </thead>
              <tbody>
                {listProvider.map((provider) => (
                  <tr key={provider.id}>
                    <td>
                      <input className="check-action" type="checkbox" />
                      <button
                        type="button"
                        className="btn btn-primary btn-icon-custom"
                      >
                        <i className="mdi mdi-pen"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-icon-custom"
                        /*onClick={() => onClickInactive(provider)}*/
                      >
                        <i className="mdi mdi-close-circle-outline"></i>
                      </button>
                    </td>
                    <td className="text-center">{provider.provider_name}</td>
                    <td className="text-center">{provider.serviceName}</td>
                    <td className="text-center">{provider.sub_type}</td>
                    <td className="text-center">{provider.province}</td>
                    <td className="text-center">{provider.create_date}</td>
                    <td className="text-center">{provider.update_date}</td>
                    <td className="text-center">
                      {provider.active === 1 ? "Hoạt động" : "Không hoạt động"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ReactPagination
            className=""
            previousLabel={"<<"}
            nextLabel={">>"}
            breakLabel={"..."}
            pageCount={totalPage}
            marginPagesDisplayed={1}
            pageRangeDisplayed={4}
            containerClassName={"pagination justify-content-center mt-4"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
            onPageChange={handlePageClick}
          />
        </div>
      </div>
    </>
  );
}

export default ListProvider;
