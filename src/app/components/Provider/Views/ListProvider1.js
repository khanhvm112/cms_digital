import React, { Component } from "react";
import { Link } from "react-router-dom";
import { listProviderApi } from "../Controllers/ProviderApis";

export default class ListProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request: {
        keyword: "",
        page: "1",
        pagesize: "20",
      },
      listProvider: [],
    };
  }
  componentDidMount = async () => {
    let response = await listProviderApi(this.state.request);
    console.log(response.data);
    this.setState({
      listProvider: response.data,
    });
  };
  render() {
    let { listProvider } = this.state;
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h2 className="card-content-title"> Danh sách nhà cung cấp </h2>
            <div className="row searchBar">
              <div className="form-group col-md-3 pdr-menu ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tên dịch vụ"
                />
              </div>
              <div className="form-group col-md-2 pdr-menu">
                <select className="form-control" id="">
                  <option value="-1"> Chọn dịch vụ cha </option>
                  <option value="1"> Dịch vụ cha 1 </option>
                  <option value="2"> Dịch vụ cha 2 </option>
                  <option value="3"> Dịch vụ cha 3 </option>
                </select>
              </div>
              <div className="form-group col-md-2 pdr-menu">
                <select className="form-control" id="">
                  <option value="-1"> Chọn khu vực </option>
                  <option value="1"> Khu vực 1 </option>
                  <option value="2"> Khu vực 2 </option>
                  <option value="3"> Khu vực 3 </option>
                </select>
              </div>
              <div className="form-group col-md-2 pdr-menu">
                <select className="form-control" id="">
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
                  Thêm nhà cung cấp
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
                  {listProvider &&
                    listProvider.length > 0 &&
                    listProvider.map((item) => {
                      return (
                        <tr key={item.id}>
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
                          <td>{item.provider_name}</td>
                          <td className="text-center">{item.serviceName}</td>
                          <td className="text-center">{item.sub_type}</td>
                          <td>{item.province}</td>
                          <td className="text-center">{item.create_date}</td>
                          <td className="text-center">{item.update_date}</td>
                          <td className="text-center">
                            {item.active === 1 ? "Hoạt động" : "Tạm dừng"}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
