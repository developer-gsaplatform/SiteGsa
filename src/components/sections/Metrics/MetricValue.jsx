import AnimatedCounter from "./AnimatedCounter";

export default function MetricValue({ metric }) {
  if ("total" in metric) {
    return (
      <>
        <span className="mr-3 inline-block">+</span>
        <AnimatedCounter value={metric.total} duration={4} />
      </>
    );
  }

  if ("percentage" in metric) {
    return (
      <>
        <AnimatedCounter value={metric.percentage} duration={4} decimals={1} />%
      </>
    );
  }

  if ("availability" in metric) {
    return metric.availability;
  }

  return null;
}
