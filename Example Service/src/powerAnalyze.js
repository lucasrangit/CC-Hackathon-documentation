
const KWH_TO_EURO = 0.266;
const NORM_TIME_DAY = 24 * 60 * 60 / (1000 * 3600); // Watt -> kWh/day
const NORM_TIME_MONTH = 30.44 * NORM_TIME_DAY; // Watt -> kWh/month

function continousInformation(start, end, points) {
  //  Calculate total consumption. 
  const totalWs = points.reduce((total, p) => total + p[1], 0);
  const average = totalWs / points.length;
  //Include endday.
  const days = (end - start) / (1000 * 60 * 60 * 24) + 1;
  const totalConsumption = average * NORM_TIME_DAY * days;
  const normConsumption = average * NORM_TIME_MONTH;
  const normConsumptionEuro = kWhToEuro(normConsumption);
  const result = {
    days,
    totalConsumption,
    normConsumption,
    normConsumptionEuro,
  }
  return result;
}

function kWhToEuro(kWh) {
  return kWh * KWH_TO_EURO;
}

module.exports = {
  continousInformation,
  kWhToEuro
}
