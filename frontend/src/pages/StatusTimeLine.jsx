export default function StatusTimeline({
  currentStatus,
}) {
  const steps = [
    "Recebido",
    "Em preparo",
    "Saiu para entrega",
    "Entregue",
  ];

  return (
    <div className="space-y-4">
      {steps.map((step, index) => {
        const active =
          index <= currentStatus;

        return (
          <div
            key={step}
            className="flex items-center gap-3"
          >
            <div
              className={`w-4 h-4 rounded-full ${
                active
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            />

            <span>{step}</span>
          </div>
        );
      })}
    </div>
  );
}