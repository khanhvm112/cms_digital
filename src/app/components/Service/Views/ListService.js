import React from "react";
import { Link } from "react-router-dom";
export default function ListService() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h2 className="card-content-title"> Danh sách dịch vụ </h2>
          <div className="row searchBar">
            <div className="form-group col-md-3 pdr-menu ">
              <input
                type="text"
                className="form-control"
                placeholder="Tên dịch vụ"
              />
            </div>
            <div className="form-group col-md-2 pdr-menu">
              <select className="form-control" id="exampleSelectGender">
                <option value="-1"> Chọn dịch vụ cha </option>
                <option value="1"> Dịch vụ cha 1 </option>
                <option value="2"> Dịch vụ cha 2 </option>
                <option value="3"> Dịch vụ cha 3 </option>
              </select>
            </div>
            <div className="form-group col-md-2 pdr-menu">
              <select className="form-control" id="exampleSelectGender">
                <option value="-1"> Chọn trạng thái </option>
                <option value="1"> Hoạt động </option>
                <option value="0"> Tạm dừng </option>
              </select>
            </div>
          </div>
          <div className="row mgbt searchBar">
            <div className="form-group col-md-4 pdr-menu">
              <Link
                type="submit"
                className="btn btn-success btn-icon-text"
                to="/digital/addservices"
              >
                Thêm dịch vụ
              </Link>
            </div>
            <div className="form-group col-md-8 pdl-menu">
              <div className="d-flex align-items-center justify-content-md-end">
                <div className="pr-1 mb-3 mb-xl-0">
                  <Link
                    type="submit"
                    className="btn btn-primary btn-icon-text"
                    onClick={() => this.handleSearchService()}
                  >
                    Tìm kiếm
                  </Link>
                </div>
                <div className="pr-1 mb-3 mb-xl-0">
                  <button
                    type="submit"
                    className="btn btn-danger bth-cancel btn-icon-text"
                    onClick={() => this.handleUnfilteredService()}
                  >
                    Bỏ lọc
                  </button>
                </div>
              </div>
            </div>
          </div>

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
                    Dịch vụ con
                  </th>
                  <th className="font-weight-bold" rowSpan="2" width="10%">
                    Dịch vụ cha
                  </th>
                  <th className="font-weight-bold" rowSpan="2" width="10%">
                    Ngày tạo
                  </th>
                  <th className="font-weight-bold" rowSpan="2" width="10%">
                    Ngày nhập
                  </th>
                  <th className="font-weight-bold" rowSpan="2" width="15%">
                    Người cập nhật
                  </th>
                  <th className="font-weight-bold" rowSpan="2" width="10%">
                    Trạng thái
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
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
                      onClick={() => this.handleInactive()}
                    >
                      <i className="mdi mdi-close-circle-outline"></i>
                    </button>
                  </td>
                  <td>a</td>
                  <td>b</td>
                  <td className="text-center">c</td>
                  <td className="text-center">d</td>
                  <td className="text-center">e</td>
                  <td className="text-center">f</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
