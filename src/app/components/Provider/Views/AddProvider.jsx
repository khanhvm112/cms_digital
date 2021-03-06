import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
export default function AddProvider() {
  const [provider, setProvider] = useState([]);
  const [listService, setListService] = useState([]);
  const [listProvince, setListProvince] = useState([]);
  const [request, setRequest] = useState({
    id: 1,
    provider_code: "",
    provider_name: "",
    sub_type: -1,
    type: -1,
    image: "",
    province: "",
    province_id: -1,
    prepaid_syntax: "",
    postpaid_syntax: "",
    itopup_id: -1,
  });
  const fetchListService = () => {
    fetch(`http://192.168.100.105:8080/digital-cms/api/listService`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json; charset=UTF-8",
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

  const fetchProviders = () => {
    fetch(`http://192.168.100.192:2024/getProducts`)
      .then((res) => res.json())
      .then((response) => setProvider(response.providers))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProviders();
    fetchListProvince();
    fetchListService();
  }, []);
  const handleSelectService = (data) => {
    let result = data.target.value;
    if (result === "5") {
      // console.log("abc");
      document.getElementById("province_id").disabled = false;
    } else if (result === "1" || result === "3") {
      // console.log("abc");
      document.getElementById("prepaid_syntax").disabled = false;
      document.getElementById("postpaid_syntax").disabled = false;
    } else {
      document.getElementById("province_id").value = -1;
      document.getElementById("province_id").disabled = true;
      document.getElementById("prepaid_syntax").disabled = true;
      document.getElementById("prepaid_syntax").value = "";
      document.getElementById("postpaid_syntax").disabled = true;
      document.getElementById("postpaid_syntax").value = "";
    }
  };
  const handleSelectProvince = (data) => {
    // setRequest({ ...request, provinceId: data.target.value });
  };
  let history = useHistory();
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3 className="card-content-title"> Th??m nh?? cung c???p </h3>
          <form>
            <div className="form-group row pdn mt-5">
              <label className="col-sm-2 col-form-label">
                Ch???n nh?? cung c???p
              </label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  id="service_id"
                  onChange={handleSelectService}
                >
                  <option value="-1">Ch???n d???ch v???</option>
                  {provider.map((provider) => (
                    <option
                      key={provider.service_provider_id}
                      value={provider.service_provider_name}
                    >
                      {provider.service_provider_id} -{" "}
                      {provider.service_provider_name}
                    </option>
                  ))}
                </select>
                <span className="error_text" id="err_service_id"></span>
              </div>
            </div>

            <div className="form-group row pdn ">
              <label className="col-sm-2 col-form-label">M?? nh?? cung c???p</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="provider_code"
                  className="form-control"
                  id="provider_code"
                  placeholder="M?? nh?? cung c???p"
                  defaultValue=""
                />
                <span className="error_text" id="err_provider_code"></span>
              </div>
            </div>

            <div className="form-group row pdn">
              <label className="col-sm-2 col-form-label">
                T??n nh?? cung c???p
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="provider_name"
                  className="form-control"
                  id="provider_name"
                  placeholder="T??n nh?? cung c???p"
                  defaultValue=""
                />
                <span className="error_text" id="err_provider_name"></span>
              </div>
            </div>

            <div className="form-group row pdn">
              <label className="col-sm-2 col-form-label">Ch???n d???ch v???</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  id="service_id"
                  onChange={handleSelectService}
                >
                  <option value="-1">Ch???n d???ch v???</option>
                  {listService.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.subserviceName}
                    </option>
                  ))}
                </select>
                <span className="error_text" id="err_service_id"></span>
              </div>
            </div>

            <div className="form-group row pdn">
              <label className="col-sm-2 col-form-label">Ch???n khu v???c</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  id="province_id"
                  onChange={handleSelectProvince}
                  disabled
                >
                  <option value="-1"> Ch???n khu v???c </option>
                  {listProvince.map((province) => (
                    <option key={province.id} value={province.id}>
                      {province.name}
                    </option>
                  ))}
                </select>
                <span className="error_text" id="err_province_id"></span>
              </div>
            </div>

            <div className="form-group row pdn">
              <label className="col-sm-2 col-form-label">
                C?? ph??p tr??? tr?????c
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="prepaid_syntax"
                  className="form-control"
                  id="prepaid_syntax"
                  placeholder="T??n nh?? cung c???p"
                  defaultValue=""
                  disabled
                />
                <span className="error_text" id="err_prepaid_syntax"></span>
              </div>
            </div>

            <div className="form-group row pdn">
              <label className="col-sm-2 col-form-label">C?? ph??p tr??? sau</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="postpaid_syntax"
                  className="form-control"
                  id="postpaid_syntax"
                  placeholder="T??n nh?? cung c???p"
                  defaultValue=""
                  disabled
                />
                <span className="error_text" id="err_postpaid_syntax"></span>
              </div>
            </div>

            <div className="form-group row pdn">
              <label className="col-sm-2 col-form-label">Tr???ng th??i</label>
              <div className="col-sm-9">
                <select className="form-control" id="provider_status">
                  <option value="-1"> Ch???n tr???ng th??i </option>
                  <option value="1"> Ho???t ?????ng </option>
                  <option value="0"> T???m d???ng </option>
                </select>
                <span className="error_text" id="err_provider_status"></span>
              </div>
            </div>
            <div className="form-group row text-right">
              <div className="col-sm-12">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={history.goBack}
                >
                  H???y
                </button>
                <button
                  type="submit"
                  id="btn-add-news"
                  className="btn btn-primary"
                >
                  Th??m m???i ???ng vi??n
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
