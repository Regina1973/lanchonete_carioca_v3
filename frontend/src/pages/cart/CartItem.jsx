export default function CartItem({
  item,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="border-b py-4 flex justify-between">
      <div>
        <h3>{item.name}</h3>

        <span>
          R$ {item.price.toFixed(2)}
        </span>
      </div>

      <div className="flex gap-3 items-center">
        <button onClick={onDecrease}>-</button>

        <span>{item.quantity}</span>

        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}