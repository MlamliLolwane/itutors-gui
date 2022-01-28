import Navbar from "../../components/tutor/tutorNavbar"
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import React, { useEffect } from 'react'
import ApexCharts from 'apexcharts'

function Dashboard() {
    const [isActive, setActive] = React.useState(false);

    var options = {
        chart: {
            type: 'line'
        },
        series: [{
            name: 'sales',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }],
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    }

    let pie_options = {
        chart: {
            type: 'donut'
          },
        series: [44, 55, 13, 33],
        labels: ['Social Media', 'Search Engine', 'Direct Click', 'Referrals']
      }

    useEffect(() => {
        var chart = new ApexCharts(document.getElementById('chart'), options);
        var pie_chart = new ApexCharts(document.getElementById('pie_chart'), pie_options);

        chart.render();
        pie_chart.render();
    })

    return (
        <LoadingOverlay
            active={isActive}
            fadeSpeed={100}
            styles={{
                overlay: (base) => ({
                    ...base,
                    background: ' rgba(0, 0, 0, 0.9)'
                })
            }}
            spinner={<HashLoader color="white" size="70px" speedMultiplier="2" />}
        >
            <Navbar />
            <hr className="my-0 py-0" />
            <div style={{ minHeight: "100vh", backgroundColor: "black" }} className="px-0 align-items-center">
                <br />
                <div className="row">
                    <div className="col">
                        <h6 className="ps-md-3 pb-2 text-white text-secondary pt-3">
                            DASHBOARD
                </h6>
                    </div>
                </div>

                <div className="row mt-3 mb-5">
                    <div className="col-10 col-md-3 px-md-4">
                        <div className="card">
                            <div className="card-body ">
                                <h5 className="card-title text-green"><b>5</b></h5>
                                <p className="card-text font-small-headings fw-bolder text-grey">
                                    NUMBER OF ADS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-3 px-md-4">
                        <div className="card">
                            <div className="card-body ">
                                <h5 className="card-title text-green"><b>R800,00</b></h5>
                                <p className="card-text font-small-headings fw-bolder text-grey">
                                    REVENUE GENERATED</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-10 col-md-3 px-md-4">
                        <div className="card">
                            <div className="card-body ">
                                <h5 className="card-title text-green"><b>2</b></h5>
                                <p className="card-text font-small-headings fw-bolder text-grey">
                                    PENDING REQUESTS</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-10 col-md-3 px-md-4">
                        <div className="card">
                            <div className="card-body ">
                                <h5 className="card-title text-green"><b>1</b></h5>
                                <p className="card-text font-small-headings fw-bolder text-grey">UPCOMING SESSIONS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7 px-md-4" >
                        <div className="card" style={{ minHeight: "50vh" }}>
                            <div className="card-body">
                                <p className="card-title fw-bolder">
                                    REVENUE GENERATED</p>
                                <div id="chart">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-5 px-md-4">
                        <div className="card" style={{ minHeight: "50vh" }}>
                            <div className="card-body">
                                <p className="card-title fw-bolder"><b>TRAFFIC SOURCE</b></p>
                                <div id="pie_chart">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LoadingOverlay>
    )
}

export default Dashboard;