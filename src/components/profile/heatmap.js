import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ReactFrappeChart from "react-frappe-charts";
import {addDays, isBefore, isEqual} from "date-fns";

const useStyles = makeStyles((theme) => ({
  heatmap: {
    backgroundColor: 'antiquewhite',
    padding: theme.spacing(6),
  },
}));

let startDate = new Date("2020-01-01");
let endDate = new Date("2020-12-31");

function getHeatMapData() {
  let dataPoints = {};
  let currDate = startDate;
  while (isBefore(currDate, endDate) || isEqual(currDate, endDate)) {
    const count = pickRandomNumber(10, 1000);
    dataPoints[currDate.getTime() / 1000] = count;
    currDate = addDays(currDate, 1);
  }
  return dataPoints;
}

function pickRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const HeatMap = (props) => {
  const classes = useStyles();

  return <ReactFrappeChart
    className={classes.heatmap}
    type="heatmap"
    data={{
      dataPoints: getHeatMapData(),
      start: startDate,
      end: endDate,
    }}
  />
}

export default HeatMap;
