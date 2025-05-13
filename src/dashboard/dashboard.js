import React, { useEffect, useState } from "react";
import GaugeComponent from "react-gauge-component";
import ChartLine from "./chart";
import Header from "./header";
import meter from "./image/meter.svg";
import { Box, Typography } from "@mui/material";
import { Speed, SpeedTwoTone, Water, WaterDrop, WaterTwoTone } from "@mui/icons-material";

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
          const latest = data[0];
          setGaugeValue(latest.Value);
          setVelocity(latest.Velocity);
          setFlow(latest.Flow);
        }
      } catch (error) {
        console.error("Gauge fetch error:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch("https://guage-control-530056698.us-central1.run.app/create-metadata/");
        const result = await response.json();
        const sorted = [...result].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        const labels = sorted.map((item) => new Date(item.timestamp).toLocaleTimeString());
        setTimestamps(labels);
        setVelocityData(sorted.map((item) => item.Velocity));
        setFlowData(sorted.map((item) => item.Flow));
      } catch (err) {
        console.error("History fetch error:", err);
      }
    };

    fetchHistory();
    const interval = setInterval(fetchHistory, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
<Box sx={{ width: "100%", p: 2, mt: 10, overflowX: 'hidden' }}>
  {/* Top Grid Section */}
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap", // Allows wrapping on smaller screens
      gap: 3,
      mb: 4,
      justifyContent: "center",
    }}
  >
    {/* Meter Image */}
    <Box
      sx={{
        flex: "1 1 300px", // Flex-grow, shrink, basis
        minWidth: 280,
        maxWidth: 400,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        component="img"
        src={meter}
        alt="Meter"
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: 2,
          boxShadow: 2,
          maxHeight: 285,
          objectFit: "contain",
        }}
      />
    </Box>

    {/* Info Cards */}
    <Box
      sx={{
        flex: "2 1 300px",
        minWidth: 280,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {[{
        value: velocity, label: "Velocity: m/s", Icon: Speed, bg: "rgba(16,192,163,0.77)"
      }, {
        value: flow, label: "Flow: m³/hr", Icon: Water, bg: "rgba(151,16,192,0.54)"
      }, {
        value: gaugeValue, label: "Cumulative Total", Icon: WaterDrop, bg: "rgba(192,116,16,0.54)"
      }].map(({ value, label, Icon, bg }, i) => (
        <Box
          key={i}
          sx={{
            bgcolor: bg,
            p: 2,
            borderRadius: 2,
            boxShadow: 1,
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Icon fontSize="large" />
          <Box>
            <Typography variant="h5">{value}</Typography>
            <Typography variant="body2">{label}</Typography>
          </Box>
        </Box>
      ))}
    </Box>

    {/* Extra Info Cards */}
    <Box
      sx={{
        flex: "1 1 300px",
        minWidth: 280,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {[{
        value: velocity, label: "Velocity: m/s", bg: "rgba(235, 255, 252, 0.77)"
      }, {
        value: flow, label: "Flow: m³/hr", bg: "rgba(245, 217, 253, 0.54)"
      }, {
        value: gaugeValue, label: "Cumulative Total", bg: "rgba(250, 239, 224, 0.54)"
      }].map(({ value, label, bg }, i) => (
        <Box
          key={i}
          sx={{
            bgcolor: bg,
            p: 2,
            borderRadius: 2,
            boxShadow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Typography variant="h5">{value}</Typography>
            <Typography variant="body2">{label}</Typography>
          </Box>
        </Box>
      ))}
    </Box>

    {/* Gauge Meter */}
    <Box
      sx={{
        flex: "2 1 300px",
        minWidth: 280,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        boxShadow: 2,
        p: 2,
      }}
    >
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
        pointer={{ elastic: true, animationDelay: 0 }}
      />
    </Box>
  </Box>

  {/* Charts Section */}
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      gap: 3,
      mt: 4,
    }}
  >
    {[{
      title: "Daily Consumption",
      values: flowData,
      label: "Flow",
    }, {
      title: "Velocity (Realtime)",
      values: velocityData,
      label: "Velocity",
    }].map((chart, idx) => (
      <Box
        key={idx}
        sx={{
          flex: 1,
          minWidth: 280,
          borderRadius: 2,
          boxShadow: 2,
          p: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>{chart.title}</Typography>
        <ChartLine labels={timestamps} values={chart.values} label={chart.label} />
      </Box>
    ))}
  </Box>
</Box>

  );
}

export default Dashboard;
