const PETALS = [
  { left: "8%", duration: "15s", delay: "0s", size: 18 },
  { left: "22%", duration: "18s", delay: "4s", size: 14 },
  { left: "38%", duration: "16s", delay: "8s", size: 20 },
  { left: "55%", duration: "20s", delay: "2s", size: 15 },
  { left: "70%", duration: "17s", delay: "6s", size: 19 },
  { left: "86%", duration: "19s", delay: "10s", size: 14 },
];

export function Petals() {
  return (
    <>
      {PETALS.map((petal) => (
        <svg
          key={petal.left}
          className="petal"
          style={{
            left: petal.left,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
            width: petal.size,
            height: petal.size,
          }}
          aria-hidden="true"
        >
          <use href="#d-petal" />
        </svg>
      ))}
    </>
  );
}
