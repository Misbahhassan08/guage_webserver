import React, { useEffect, useState } from "react";
import GaugeComponent from "react-gauge-component";
import ChartLine from "./chart";
import Header from "./header";
import Font, {Text} from 'react-font'
import { height } from "@mui/system";

function Dashboard() {
  const [gaugeValue, setGaugeValue] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [flow, setFlow] = useState(0);
  const [velocityData, setVelocityData] = useState([]);
  const [flowData, setFlowData] = useState([]);
  const [timestamps, setTimestamps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://guage-control-530056698.us-central1.run.app/create-metadata/");
        const data = await response.json();
        if (data && data.length > 0) {
          const latestData = data[0];
          setGaugeValue(latestData.Value);
          setVelocity(latestData.Velocity);
          setFlow(latestData.Flow);
        }
      } catch (error) {
        console.error("Error fetching gauge value:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://guage-control-530056698.us-central1.run.app/create-metadata/");
        const result = await response.json();
        const sorted = [...result].sort(
          (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
        );
        const timeLabels = sorted.map(item =>
          new Date(item.timestamp).toLocaleTimeString()
        );
        const velocities = sorted.map(item => item.Velocity);
        const flows = sorted.map(item => item.Flow);
        setTimestamps(timeLabels);
        setVelocityData(velocities);
        setFlowData(flows);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      
      <Header />
      <div style={styles.container}>
        
        {/* Gauge Card */}
        <div style={styles.card}>
          <Font family='Roboto'>
          <div style={styles.container}>
            <img
                  src="src/dashboard/image/IoT-Water-Flow-Meter-A-Novel-Water-Meter-Based-On-IoT-Primary-image.jpg"
                  alt="Gauge Icon"
                  style={styles.gaugeImage}
                  
                />

            <div style={styles.boxesContainer}>
              <div style={styles.box1}>
                
                <h2>{velocity}</h2>
                <p>Velocity: m/s</p>
                
              </div>
              <div style={styles.box2}>
                <h2>{flow}</h2>
                <p>Flow: L/min</p>
              </div>
              <div style={styles.box3}>
                <h2>{gaugeValue}</h2>
                <p>Value: {gaugeValue}</p>
              </div>
            </div>
            </div>
            <div style={styles.gaugeContainer}>
              <div style={{ width: "60%", height:"50%", margin: "1rem auto" }}>
                <GaugeComponent
                  value={gaugeValue}
                  type="radial"
                  labels={{
                    tickLabels: {
                      type: "inner",
                      ticks: [
                        { value: 20 },
                        { value: 40 },
                        { value: 60 },
                        { value: 80 },
                        { value: 100 },
                      ],
                    },
                  }}
                  arc={{
                    colorArray: ["#5BE12C", "#EA4228"],
                    subArcs: [{ limit: 10 }, { limit: 30 }, {}, {}, {}],
                    padding: 0.02,
                    width: 0.3,
                  }}
                  pointer={{
                    elastic: true,
                    animationDelay: 0,
                  }}
                />
                <p style={{ textAlign: "center" }}>Current Usage: <h2>{gaugeValue}%</h2></p>
              </div>
            </div>
          </Font>
        </div>
        

        {/* Info Boxes + Charts */}
        <div style={{ ...styles.card, width: "100%" }}>
          <Font family='Roboto'>
        
          <div style={styles.graphsContainer}>
            <div style= {styles.graph1}>
              <ChartLine labels={timestamps} values={velocityData} label="Velocity" />
            </div>
            <div style={styles.graph1}>
              <ChartLine labels={timestamps} values={flowData} label="Flow" />
            </div>
          </div>
          </Font>
        </div>
        
      </div>
      
    </div>
  );
}

const styles = {
  graph1: {
    width: "100%",
    height:"50%"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    padding: "2rem",
    width: "100%",
    boxSizing: "border-box",
    marginTop: "70px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "1rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
  },
  colcard: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    padding: "2rem",
    width: "100%",
    boxSizing: "border-box",
    marginTop: "70px",
  },
  gaugeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "78%",
    height:"30%"
  },
  gaugeImage: {
    width: "50%",  // You can adjust the size of the image here
    height: "20%",
    marginBottom: "1rem",  // Space between image and gauge
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.57)",
    flex: 1,
  },
  boxesContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    marginBottom: "1rem",
    width: "50%",
  },
  box1: {
    backgroundColor: "rgba(16, 192, 163, 0.77)",
    borderRadius: "8px",
    padding: "1rem",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    flex: 1,
    
  },
  box2: {
    backgroundColor: "rgba(151, 16, 192, 0.54)",
    borderRadius: "8px",
    padding: "1rem",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    flex: 1,
  },
  box3: {
    backgroundColor: "rgba(192, 116, 16, 0.54)",
    borderRadius: "8px",
    padding: "1rem",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    flex: 1,
  },
  graphsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: "100%",
  },
  graphCard: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "1rem",
    height: "100px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default Dashboard;
