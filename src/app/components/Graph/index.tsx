/**
 *
 * Graph
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Bar } from 'react-chartjs-2';

export function Graph() {
  const data = {
    labels: [
      'Javascript(ES6/ES7)',
      'ReactJS',
      'React Native',
      'Express JS',
      'NodeJS',
      'MongoDB',
      'Python',
      'CSS/SASS/SCSS',
      'Git/Github(version control)',
      'SVN',
      'Linux',
      'Windows',
    ],
    datasets: [
      {
        label: 'Skills',
        data: [8, 8, 8, 7, 7, 7, 7, 8, 7, 7, 7, 8],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 4,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 10,
          },
        },
        {
          gridLines: {
            drawOnChartArea: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
        },
      ],
    },
    responsive: true,
  };
  return (
    <Div>
      <Bar data={data} options={options} />
    </Div>
  );
}

const Div = styled.div``;
