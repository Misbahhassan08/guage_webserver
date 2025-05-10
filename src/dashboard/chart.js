import React, { useEffect, useRef } from 'react'
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/react-chartjs'

const ChartLine = ({ labels, values, label }) => {
  const chartRef = useRef(null)

  useEffect(() => {
    const handleColorSchemeChange = () => {
      const chartInstance = chartRef.current
      if (chartInstance) {
        const { options } = chartInstance

        if (options.plugins?.legend?.labels) {
          options.plugins.legend.labels.color = getStyle('--cui-body-color')
        }

        if (options.scales?.x?.grid) {
          options.scales.x.grid.color = getStyle('--cui-border-color-translucent')
        }
        if (options.scales?.x?.ticks) {
          options.scales.x.ticks.color = getStyle('--cui-body-color')
        }

        if (options.scales?.y?.grid) {
          options.scales.y.grid.color = getStyle('--cui-border-color-translucent')
        }
        if (options.scales?.y?.ticks) {
          options.scales.y.ticks.color = getStyle('--cui-body-color')
        }

        chartInstance.update()
      }
    }

    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange)
    return () => {
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange)
    }
  }, [])

  const data = {
    labels,
    datasets: [
      {
        label,
        backgroundColor: 'rgba(100, 200, 220, 0.2)',
        borderColor: 'rgba(100, 200, 220, 1)',
        pointBackgroundColor: 'rgba(100, 200, 220, 1)',
        pointBorderColor: '#fff',
        data: values,
        fill: true,
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
        type: 'category',
      },
      y: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
        beginAtZero: true,
      },
    },
  }

  return <CChart type="line" data={data} options={options} ref={chartRef} />
}

export default ChartLine
