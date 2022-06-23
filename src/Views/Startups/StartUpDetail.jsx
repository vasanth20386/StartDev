import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
import { Knob } from "primereact/knob";
import photoData from "./growindi.jpg";
import photoData_1 from "./growindigo.jpg";
import photoData_2 from "./tweeklabs.png";
import photoData_3 from "./tweek.jpg";
import photoData_4 from "./scrap.png";
import photoData_5 from "./scrapuncle.png";
import photoData_6 from "./m1.png";
import photoData_7 from "./q1.png";
import photoData_8 from "./q3.png";
import photoData_9 from "./q4.png";
import photoData_10 from "./w.png";
export default function StartUpDetail({ butt, details }) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [chartData] = useState({
    labels: ["2019", "2020", "2021"],
    datasets: [
      {
        data: [
          getRandomInt(100, 300),
          getRandomInt(10, 50),
          getRandomInt(10, 200),
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  });

  const [chartData1] = useState({
    labels: ["Previous Year", "Current year"],
    datasets: [
      {
        data: [getRandomInt(10, 100), getRandomInt(10, 100)],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  });

  const [basicData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Previous Year",
        backgroundColor: "#42A5F5",
        data: [
          getRandomInt(10, 100),
          getRandomInt(10, 100),
          getRandomInt(10, 100),
          getRandomInt(10, 100),
          getRandomInt(10, 100),
          getRandomInt(10, 100),
          getRandomInt(10, 100),
        ],
      },
      {
        label: "Current Year",
        backgroundColor: "#FFA726",
        data: [
          getRandomInt(10, 100),
          getRandomInt(10, 100),
          getRandomInt(10, 100),
          getRandomInt(10, 100),
          getRandomInt(10, 100),
          getRandomInt(10, 100),
          getRandomInt(10, 100),
        ],
      },
    ],
  });

  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };

    let horizontalOptions = {
      indexAxis: "y",
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };

    let stackedOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        tooltips: {
          mode: "index",
          intersect: false,
        },
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          stacked: true,
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };

    let multiAxisOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
        tooltips: {
          mode: "index",
          intersect: true,
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            min: 0,
            max: 100,
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          grid: {
            drawOnChartArea: false,
            color: "#ebedef",
          },
          ticks: {
            min: 0,
            max: 100,
            color: "#495057",
          },
        },
      },
    };

    return {
      basicOptions,
      horizontalOptions,
      stackedOptions,
      multiAxisOptions,
    };
  };

  const { basicOptions, horizontalOptions, multiAxisOptions, stackedOptions } =
    getLightTheme();

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
  });

  const header1 = (
    <img
      className="circle-image-card"
      alt="Card"
      style={{ width: "50px" }}
      src={photoData_10}
      onError={(e) => (e.target.src = "https://picsum.photos/id/1/200")}
    />
  );

  const header2 = (
    <img
      className="circle-image-card-2"
      alt="Card"
      style={{ width: "150px" }}
      src={photoData_6}
      onError={(e) => (e.target.src = "https://picsum.photos/id/1/200")}
    />
  );

  const header3 = (
    <img
      className="circle-image-card-2"
      alt="Card"
      src="https://picsum.photos/id/1/200"
      onError={(e) => (e.target.src = "https://picsum.photos/id/1/200")}
    />
  );

  const footer = (
    <span>
      <i className="pi pi-linkedin mr-4"></i>
      <i className="pi pi-instagram"></i>
    </span>
  );
  return (
    <div className="main">
      <i
        className="pi pi-arrow-left mb-4"
        style={{ fontSize: "2rem" }}
        onClick={() => {
          console.log("");
          butt(false);
        }}
      ></i>
      <div className="startup-header">
        <img
          className="circle-image"
          alt="Card"
          src={photoData_8}
          onError={(e) => (e.target.src = "https://picsum.photos/id/1/200")}
        />
        <div className="startup-header-title">
          <h2>{details?.startupName}</h2>

          <h4>{details?.startupWeb}</h4>
          <div className="m2-4">
            <Button className="mr-4" label="Book a Slot" />
            <Button label="Invest Now" />
          </div>
        </div>
      </div>
      <div className="panel-header">
        <TabView>
          <TabPanel header="Profile">
            <>
              <div className="profile-details row">
                <div className="col-6">
                  <h2>Details</h2>
                  <h5> {details?.starupInfo}</h5>
                </div>
                <div className="col-6">
                  <img
                    alt="Card"
                    src={photoData_9}
                    onError={(e) =>
                      (e.target.src = "https://picsum.photos/id/1/200")
                    }
                  />
                </div>
              </div>

              <div className="profile-details-two">
                <div className="profile-details-two-card">
                  <Card
                    className="mr-4 ml-4 mt-4 mb-4"
                    title="Stage"
                    style={{ width: "25em" }}
                    header={header1}
                  >
                    <p className="m-0" style={{ lineHeight: "1.5" }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Inventore sed consequuntur error repudiandae numquam
                      deserunt quisquam repellat libero asperiores earum nam
                      nobis, culpa ratione quam perferendis esse, cupiditate
                      neque quas!
                    </p>
                  </Card>

                  <Card
                    className="mr-4 ml-4 mt-4 mb-4"
                    title="Stage"
                    style={{ width: "25em" }}
                    header={header1}
                  >
                    <p className="m-0" style={{ lineHeight: "1.5" }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Inventore sed consequuntur error repudiandae numquam
                      deserunt quisquam repellat libero asperiores earum nam
                      nobis, culpa ratione quam perferendis esse, cupiditate
                      neque quas!
                    </p>
                  </Card>

                  <Card
                    className="mr-4 ml-4 mt-4 mb-4"
                    title="Stage"
                    style={{ width: "25em" }}
                    header={header1}
                  >
                    <p className="m-0" style={{ lineHeight: "1.5" }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Inventore sed consequuntur error repudiandae numquam
                      deserunt quisquam repellat libero asperiores earum nam
                      nobis, culpa ratione quam perferendis esse, cupiditate
                      neque quas!
                    </p>
                  </Card>

                  <Card
                    className="mr-4 ml-4 mt-4 mb-4"
                    title="Stage"
                    style={{ width: "25em" }}
                    header={header1}
                  >
                    <p className="m-0" style={{ lineHeight: "1.5" }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Inventore sed consequuntur error repudiandae numquam
                      deserunt quisquam repellat libero asperiores earum nam
                      nobis, culpa ratione quam perferendis esse, cupiditate
                      neque quas!
                    </p>
                  </Card>
                </div>

                <div className="profile-details-two-card">
                  <Card
                    className="mr-4 ml-4 mt-4 mb-4"
                    title="Stage"
                    style={{ width: "25em" }}
                    header={header1}
                  >
                    <p className="m-0" style={{ lineHeight: "1.5" }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Inventore sed consequuntur error repudiandae numquam
                      deserunt quisquam repellat libero asperiores earum nam
                      nobis, culpa ratione quam perferendis esse, cupiditate
                      neque quas!
                    </p>
                  </Card>

                  <Card
                    className="mr-4 ml-4 mt-4 mb-4"
                    title="Stage"
                    style={{ width: "25em" }}
                    header={header1}
                  >
                    <p className="m-0" style={{ lineHeight: "1.5" }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Inventore sed consequuntur error repudiandae numquam
                      deserunt quisquam repellat libero asperiores earum nam
                      nobis, culpa ratione quam perferendis esse, cupiditate
                      neque quas!
                    </p>
                  </Card>

                  <Card
                    className="mr-4 ml-4 mt-4 mb-4"
                    title="Stage"
                    style={{ width: "25em" }}
                    header={header1}
                  >
                    <p className="m-0" style={{ lineHeight: "1.5" }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Inventore sed consequuntur error repudiandae numquam
                      deserunt quisquam repellat libero asperiores earum nam
                      nobis, culpa ratione quam perferendis esse, cupiditate
                      neque quas!
                    </p>
                  </Card>

                  <Card
                    className="mr-4 ml-4 mt-4 mb-4"
                    title="Stage"
                    style={{ width: "25em" }}
                    header={header1}
                  >
                    <p className="m-0" style={{ lineHeight: "1.5" }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Inventore sed consequuntur error repudiandae numquam
                      deserunt quisquam repellat libero asperiores earum nam
                      nobis, culpa ratione quam perferendis esse, cupiditate
                      neque quas!
                    </p>
                  </Card>
                </div>
              </div>

              <div className="profile-details-three">
                <h2>
                  <font face="Arial" size="20px" color="#FF7A59">
                    Meet the Team
                  </font>
                </h2>
                <h5>
                  <font face="Arial" size="20px" color="#0E6655">
                    Entrepreneurship is a difficult journey. We work together to
                    make it the best journey.
                  </font>
                </h5>

                <div className="profile-details-two-card">
                  {" "}
                  {details.people.map((item, idx) => {
                    return (
                      <>
                        <Card
                          className="mr-4 ml-4 mt-4 mb-4"
                          title={item?.name}
                          footer={footer}
                          subTitle={item?.title}
                          style={{ width: "25em" }}
                          header={header2}
                        ></Card>
                      </>
                    );
                  })}
                </div>
                <Button label="Know More" />
              </div>
            </>
          </TabPanel>
          <TabPanel header="Analysis">
            <>
              <p>
                Displaying a comprehensive analysis like success rate, sales
                rate, competitors, and the information about their negative
                points from an expert analyst.
              </p>
              <div className="charts-cards row">
                <div className="chart-div">
                  <h4>Market Sales</h4>
                  <h4>CAGR of the Market</h4>
                  <h4>Total Fundings in Cr.</h4>
                </div>

                <div className="chart-div">
                  <div className="card col-3">
                    <Chart type="bar" data={basicData} options={basicOptions} />
                  </div>
                  <Chart
                    type="doughnut"
                    data={chartData1}
                    options={lightOptions}
                    style={{ position: "relative", width: "30%" }}
                  />
                  <Chart
                    type="doughnut"
                    data={chartData}
                    options={lightOptions}
                    style={{ position: "relative", width: "30%" }}
                  />
                </div>
              </div>

              <div className="card">
                <br></br>
                <h5>Market Size</h5>
                <Chart type="line" data={basicData} options={basicOptions} />
              </div>
              <div className="row mt-4">
                <div className="col-4">
                  <div className="card-knob mt-2 mb-2">
                    <div className="card-knob-heading mr-3 mt-2 mb-2">
                      <h3 className="ml-3">Net Sales</h3>
                      <h5 className="ml-3">
                        $61,137 increament<br></br> over previous year
                      </h5>
                    </div>

                    <Knob
                      className="mt-3 mb-3"
                      value={getRandomInt(10, 100)}
                      valueTemplate={"{value}%"}
                      readOnly
                    />
                  </div>

                  <div className="card-knob mt-2 mb-2">
                    <div className="card-knob-heading mr-3 mt-2 mb-2">
                      <h3 className="ml-3">Gross Margin</h3>
                      <h5 className="ml-3">
                        $23,422 increament<br></br> over previous year
                      </h5>
                    </div>

                    <Knob
                      className="mt-3 mb-3"
                      value={getRandomInt(10, 100)}
                      valueTemplate={"{value}%"}
                      readOnly
                    />
                  </div>

                  <div className="card-knob mt-2 mb-2">
                    <div className="card-knob-heading mr-3 mt-2 mb-2">
                      <h3 className="ml-3">Cost of sales</h3>
                      <h5 className="ml-3">
                        $37,715 increament <br></br>over previous year
                      </h5>
                    </div>

                    <Knob
                      className="mt-3 mb-3"
                      value={getRandomInt(10, 100)}
                      valueTemplate={"{value}%"}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-1"></div>
                <div className="col-2">
                  <div className="card-knob mt-2 mb-2">
                    <div className="card-knob-heading mr-3 mt-2 mb-2">
                      <h3 className="ml-3">Seed</h3>
                      <h5 className="ml-3">
                        {" "}
                        Pre-seed NE
                      </h5>
                    </div>

                    <Knob
                      className="mt-3 mb-3"
                      value={getRandomInt(10, 100)}
                      valueTemplate={"{value}%"}
                      readOnly
                    />
                  </div>

                  <div className="card-knob mt-2 mb-2">
                    <div className="card-knob-heading mr-3 mt-2 mb-2">
                      <h3 className="ml-3">Series A</h3>
                      <h5 className="ml-3">
                        Seed Funding NE
                      </h5>
                    </div>

                    <Knob
                      className="mt-3 mb-3"
                      value={getRandomInt(10, 100)}
                      valueTemplate={"{value}%"}
                      readOnly
                    />
                  </div>

                  <div className="card-knob mt-2 mb-2">
                    <div className="card-knob-heading mr-3 mt-2 mb-2">
                      <h3 className="ml-3">Series B</h3>
                      <h5 className="ml-3">
                        Series -A Funding NE{" "}
                      </h5>
                    </div>

                    <Knob
                      className="mt-3 mb-3"
                      value={60}
                      valueTemplate={"{value}%"}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-1"></div>

                {/* <h4>Net Profit </h4> */}
                <Chart
                  type="doughnut"
                  data={chartData1}
                  options={lightOptions}
                  style={{ position: "relative", width: "30%" }}
                />
              </div>
            </>
          </TabPanel>
          <TabPanel header="Analysts">
            <div className="profile-details-three">
              <h2>
                <font face="Arial" size="40px" color="#FF7A59">
                  Profile
                </font>
              </h2>
              <h5>
                <font face="Times" size="40px" color="#A569BD ">
                  Connect. Disrupt. Grow.
                </font>
              </h5>

              <div className="profile-details-two-card">
                <Card
                  className="mr-4 ml-4 mt-4 mb-4"
                  title="Ayush Kushwaha "
                  footer={footer}
                  subTitle="Co-Founder and CEO"
                  style={{ width: "25em" }}
                  header={header2}
                ></Card>

                <Card
                  className="mr-4 ml-4 mt-4 mb-4"
                  title="Anant Sharma"
                  footer={footer}
                  subTitle="Co-Founder and CEO"
                  style={{ width: "25em" }}
                  header={header2}
                ></Card>
                <Card
                  className="mr-4 ml-4 mt-4 mb-4"
                  title="Shwetank Shrey"
                  footer={footer}
                  subTitle="Co-Founder and CTO"
                  style={{ width: "25em" }}
                  header={header2}
                ></Card>
                <Card
                  className="mr-4 ml-4 mt-4 mb-4"
                  title="Aman Parnami"
                  footer={footer}
                  subTitle="Mentor"
                  style={{ width: "25em" }}
                  header={header2}
                ></Card>
              </div>
              <Button label="Know More" />
            </div>
          </TabPanel>
          <TabPanel header="FAQ">
            <p>
              If my startup gets recognised, would I obtain a certificate for
              it? If yes, would I be able to download the certificate? Yes, if
              your startup gets recognised, you would be able to download a
              system generated verifiable certificate of recognition. How do
              Investors earn returns from investing in Startups? Investors
              realize their return on investment from startups through various
              means of exit. Ideally, the VC firm and the entrepreneur should
              discuss the various exit options at the beginning of investment
              negotiations. A well performing, high-growth startup that also has
              excellent management and organisational processes is more likely
              of being exit-ready earlier than other startups. Venture Capital
              and Private Equity funds must exit all their investments before
              the end of the fund’s life. The common exit methods are: 1.
              Mergers and Acquisitions: The investor may decide to sell the
              portfolio company to another company in the market. For ex: The
              $140mn acquisition of RedBus by South African Internet and media
              giant Naspers and integrating it with its India arm Ibibo group,
              presented an exit option for its investors, Seedfund, Inventus
              Capital Partners and Helion Venture Partners. 2. IPO: Initial
              Public Offering is the first time that the stock of a private
              company is offered to the public. Issued by private companies
              seeking capital to expand, it is one of the preferred options for
              investors looking to exit a startup organisation. 3. Exit to
              Financial Investors: Investors may sell their investment to other
              venture capital or private equity firms How do you make sure I
              don’t get spammed? While we encourage more engagement on the
              platform, we can understand that access to high quality mentors
              investor like yourself can be overwhelming for some Startups,
              which may lead to them spamming. To ensure Startups are
              conservative and careful with the mentor/ investor requests, we
              restrict each Startup to 3 connection requests each week. Can I
              get access to additional resources which can further aid my
              mentorship support to the Startup? To aid in your mentoring
              journey, we have pooled together a vast repository of resources
              ranging from plug and play templates to Market research reports
              which can help both mentor and Startup gauge the opportunity at
              their disposal better. Feel free to navigate through our
              repository of resources on the top ribbon of the portal.
            </p>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}
