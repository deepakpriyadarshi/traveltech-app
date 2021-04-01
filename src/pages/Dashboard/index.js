import React, { useState } from "react";
import { useQuery } from "react-query";
import { Redirect } from "react-router";

import cupIcon from "../../assets/images/icons/cup.png";
import bannerImage from "../../assets/images/banner-design.png";

import { getUserDetails } from "../../utils/api/user";
import { clearUserAuthToken } from "../../utils/localstorage";

function Dashboard() {
    const { isLoading, error, data, isFetching } = useQuery("userdetails", getUserDetails);

    const [logout, setLogout] = useState(false);

    let userDetails = data?.data;

    if (error || userDetails === null || logout) return <Redirect to="/" push={true} />;

    if (isLoading || isFetching)
        return (
            <div className="text-center loader">
                <h2>Loading Dashboard</h2>
                <h5>Please wait ...</h5>
            </div>
        );

    return (
        <div className="container-fluid">
            <div className="text-right mt-3 mb-3">
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        clearUserAuthToken();
                        setLogout(true);
                    }}
                >
                    Logout
                </button>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-6 col-12 dashboard-greetings">
                    <div className="card card-shadow">
                        <div className="card-header">
                            <h3 className="greeting-text">Welcome {userDetails.firstName}!</h3>
                            <p className="mb-0">{userDetails.email}</p>
                        </div>
                        <div className="card-body pt-0">
                            <div className="d-flex justify-content-between align-items-end">
                                <div className="dashboard-content-left">
                                    <h1 className="text-primary font-large-2 text-bold-500">Rs. 100k</h1>
                                    <p>You have done 90% more sales today.</p>
                                </div>
                                <div className="dashboard-content-right">
                                    <img src={cupIcon} height="220" width="220" className="img-fluid" alt="Dashboard Ecommerce" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-md-6 col-12 dashboard-latest-update">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center pb-50">
                            <h4 className="card-title">Recent Activity</h4>
                        </div>
                        <div className="card-body p-0 pb-1 ps">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between">
                                    <div className="list-left d-flex">
                                        <div className="list-icon mr-1">
                                            <div className="avatar bg-rgba-primary m-0">
                                                <div className="avatar-content">
                                                    <i className="bx bxs-zap text-primary font-size-base"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-content">
                                            <span className="list-title">Registered On</span>
                                            <small className="text-muted d-block">Real Data</small>
                                        </div>
                                    </div>
                                    <span>{userDetails.createdOn.substr(0, 10)}</span>
                                </li>
                                <li className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between">
                                    <div className="list-left d-flex">
                                        <div className="list-icon mr-1">
                                            <div className="avatar bg-rgba-info m-0">
                                                <div className="avatar-content">
                                                    <i className="bx bx-stats text-info font-size-base"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-content">
                                            <span className="list-title">Last Logged In</span>
                                            <small className="text-muted d-block">Dummy Data</small>
                                        </div>
                                    </div>
                                    <span>{userDetails.modifiedOn.substr(0, 10)}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 text-center">
                    <img src={bannerImage} alt="Banner" width="100%" />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-xl-6 col-12">
                    <div className="card card-shadow table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Campaign</th>
                                    <th>Growth</th>
                                    <th>Charges</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 line-ellipsis">
                                        <img className="rounded-circle mr-1" src={cupIcon} alt="card" height="24" width="24" />
                                        Fastrack Watches
                                    </td>
                                    <td className="p-2">
                                        <i className="bx bx-trending-up text-success align-middle mr-50"></i>
                                        <span>30%</span>
                                    </td>
                                    <td className="p-2">$5,536</td>
                                    <td className="text-success p-2">Active</td>
                                </tr>
                                <tr>
                                    <td className="p-2 line-ellipsis">
                                        <img className="rounded-circle mr-1" src={cupIcon} alt="card" height="24" width="24" />
                                        Puma Shoes
                                    </td>
                                    <td className="p-2">
                                        <i className="bx bx-trending-down text-danger align-middle mr-50"></i>
                                        <span>15.5%</span>
                                    </td>
                                    <td className="p-2">$1,569</td>
                                    <td className="text-success p-2">Active</td>
                                </tr>
                                <tr>
                                    <td className="p-2 line-ellipsis">
                                        <img className="rounded-circle mr-1" src={cupIcon} alt="card" height="24" width="24" />
                                        Nike Air Jordan
                                    </td>
                                    <td className="p-2">
                                        <i className="bx bx-trending-up text-success align-middle mr-50"></i>
                                        <span>70.3%</span>
                                    </td>
                                    <td className="p-2">$23,859</td>
                                    <td className="text-danger p-2">Closed</td>
                                </tr>
                                <tr>
                                    <td className="p-2 line-ellipsis">
                                        <img className="rounded-circle mr-1" src={cupIcon} alt="card" height="24" width="24" />
                                        Oneplus 7 pro
                                    </td>
                                    <td className="p-2">
                                        <i className="bx bx-trending-up text-success align-middle mr-50"></i>
                                        <span>10.4%</span>
                                    </td>
                                    <td className="p-2">$9,523</td>
                                    <td className="text-success p-2">Active</td>
                                </tr>
                                <tr>
                                    <td className="p-2 line-ellipsis">
                                        <img className="rounded-circle mr-1" src={cupIcon} alt="card" height="24" width="24" />
                                        Google Pixel 4 xl
                                    </td>
                                    <td className="p-2">
                                        <i className="bx bx-trending-down text-danger align-middle mr-50"></i>
                                        <span>-62.38%</span>
                                    </td>
                                    <td className="p-2">$12,897</td>
                                    <td className="text-danger p-2">Closed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col-xl-6 col-12">
                    <div className="card card-shadow table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Campaign</th>
                                    <th>Growth</th>
                                    <th>Charges</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 line-ellipsis">
                                        <img className="rounded-circle mr-1" src={cupIcon} alt="card" height="24" width="24" />
                                        Fastrack Watches
                                    </td>
                                    <td className="p-2">
                                        <i className="bx bx-trending-up text-success align-middle mr-50"></i>
                                        <span>30%</span>
                                    </td>
                                    <td className="p-2">$5,536</td>
                                    <td className="text-success p-2">Active</td>
                                </tr>
                                <tr>
                                    <td className="p-2 line-ellipsis">
                                        <img className="rounded-circle mr-1" src={cupIcon} alt="card" height="24" width="24" />
                                        Puma Shoes
                                    </td>
                                    <td className="p-2">
                                        <i className="bx bx-trending-down text-danger align-middle mr-50"></i>
                                        <span>15.5%</span>
                                    </td>
                                    <td className="p-2">$1,569</td>
                                    <td className="text-success p-2">Active</td>
                                </tr>
                                <tr>
                                    <td className="p-2 line-ellipsis">
                                        <img className="rounded-circle mr-1" src={cupIcon} alt="card" height="24" width="24" />
                                        Nike Air Jordan
                                    </td>
                                    <td className="p-2">
                                        <i className="bx bx-trending-up text-success align-middle mr-50"></i>
                                        <span>70.3%</span>
                                    </td>
                                    <td className="p-2">$23,859</td>
                                    <td className="text-danger p-2">Closed</td>
                                </tr>
                                <tr>
                                    <td className="p-2 line-ellipsis">
                                        <img className="rounded-circle mr-1" src={cupIcon} alt="card" height="24" width="24" />
                                        Oneplus 7 pro
                                    </td>
                                    <td className="p-2">
                                        <i className="bx bx-trending-up text-success align-middle mr-50"></i>
                                        <span>10.4%</span>
                                    </td>
                                    <td className="p-2">$9,523</td>
                                    <td className="text-success p-2">Active</td>
                                </tr>
                                <tr>
                                    <td className="p-2 line-ellipsis">
                                        <img className="rounded-circle mr-1" src={cupIcon} alt="card" height="24" width="24" />
                                        Google Pixel 4 xl
                                    </td>
                                    <td className="p-2">
                                        <i className="bx bx-trending-down text-danger align-middle mr-50"></i>
                                        <span>-62.38%</span>
                                    </td>
                                    <td className="p-2">$12,897</td>
                                    <td className="text-danger p-2">Closed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
