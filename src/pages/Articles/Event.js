import React, { Component } from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";

import SocialShare from "../../components/element/SocialShare";

class Event extends Component {
  render() {
    return (
      <div>
        <div className="promo-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 promo-title">
                <h1>Acara HIAS House</h1>
              </div>

              <div className="col-md-6 promo-image">
                <img
                  src={require("../../assets/img/MASTER_LOGO_HIAS_HOUSE_HORIZONTAL.png")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ width: "50%" }}>
          <Timeline>
            <TimelineEvent
              title="Bazaar Sampoerna Strategic"
              createdAt="26 – 29 November 2019"
              lineColor="#46C5E2"
              bubbleStyle={{ borderColor: "#46C5E2" }}
              titleStyle={{ fontWeight: "bold", fontSize: 14 }}
            >
              <p>
                Acara diselenggarakan di Sampoerna Strategic, Ayo datang ke
                booth HIAS House!
              </p>

              <SocialShare url={window.location.href} />
            </TimelineEvent>
            <TimelineEvent
              title="Bazaar Elevenia"
              createdAt="27 – 28 November 2019"
              lineColor="#46C5E2"
              bubbleStyle={{ borderColor: "#46C5E2" }}
              titleStyle={{ fontWeight: "bold", fontSize: 14 }}
            >
              <p>
                Acara diselenggarakan di Elevenia Tower, Ayo datang ke booth
                HIAS House!
              </p>

              <SocialShare url={window.location.href} />
            </TimelineEvent>
            <TimelineEvent
              title="Kantor Wali Kota Jakarta Selatan"
              createdAt="27 – 28 November 2019"
              lineColor="#46C5E2"
              bubbleStyle={{ borderColor: "#46C5E2" }}
              titleStyle={{ fontWeight: "bold", fontSize: 14 }}
            >
              <p>
                Acara diselenggarakan di Kantor Wali Kota Jakarta Selatan, Ayo
                datang ke booth HIAS House!
              </p>

              <SocialShare url={window.location.href} />
            </TimelineEvent>
            <TimelineEvent
              title="Gedung Merdeka"
              createdAt="27 – 29 November 2019"
              lineColor="#46C5E2"
              bubbleStyle={{ borderColor: "#46C5E2" }}
              titleStyle={{ fontWeight: "bold", fontSize: 14 }}
            >
              <p>
                Acara diselenggarakan di Gedung Merdeka, Ayo datang ke booth
                HIAS House!
              </p>

              <SocialShare url={window.location.href} />
            </TimelineEvent>
            <TimelineEvent
              title="Pasar Pantai Indah Kapuk"
              createdAt="27 – 3 Desember 2019"
              lineColor="#46C5E2"
              bubbleStyle={{ borderColor: "#46C5E2" }}
              titleStyle={{ fontWeight: "bold", fontSize: 14 }}
            >
              <p>
                Acara diselenggarakan di Pasar Pantai Indah Kapuk, Ayo datang ke
                booth HIAS House!
              </p>

              <SocialShare url={window.location.href} />
            </TimelineEvent>
          </Timeline>
        </div>
      </div>
    );
  }
}

export default Event;
